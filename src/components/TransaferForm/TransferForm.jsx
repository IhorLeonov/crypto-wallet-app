import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { send } from "../../redux/wallet/operations";
import { Loader } from "../Loader/Loader";
import { ethers } from "ethers";

import * as Yup from "yup";
import toast from "react-hot-toast";

import {
  selectPaymentData,
  selectIsLoadingSend,
  selectUser,
} from "../../redux/wallet/selectors";

import {
  Wrapper,
  FormikForm,
  Title,
  FormikField,
  FormLabel,
  FormikError,
  Button,
  Message,
} from "./TransferForm.styled";

const addressRegExp = /^0x[a-fA-F0-9]{40}$/;

const isValidEthereumAddress = (value) => {
  if (!addressRegExp.test(value)) {
    return false;
  }
  return ethers.utils.isAddress(value);
};

const numberInRange = (value) => {
  return value >= 0.000001 && value <= 100000;
};

const schema = Yup.object().shape({
  address: Yup.string()
    .trim()
    .test(
      "isValidEthereumAddress",
      "Invalid Ethereum address",
      isValidEthereumAddress
    )
    .required("Required!"),
  ether: Yup.number()
    .test(
      "inRange",
      "Amount must be in range 0.000001 to 100000",
      numberInRange
    )
    .required("Required!"),
});

export const TransferForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingSend);
  const { userAccount } = useSelector(selectUser);
  const { hash } = useSelector(selectPaymentData);
  const firstHalf = hash.slice(0, 32).trim();
  const secondHalf = hash.slice(32);

  const handleSubmit = async (address, ether) => {
    dispatch(
      send({
        address,
        ether: ether.toString(),
      })
    );
  };

  return (
    <Formik
      initialValues={{ address: "", ether: "" }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const { address, ether } = values;

        if (!window.ethereum)
          return toast.error("No crypto wallet found. Please install it!");
        if (!userAccount) return toast.error("Please connect to wallet!");

        handleSubmit(address, ether);
        actions.resetForm();
      }}
    >
      <Wrapper>
        <Title>Transfer Form</Title>
        <FormikForm>
          <FormLabel>
            Enter recipient&apos;s address:
            <FormikField
              type="text"
              name="address"
              title='Address may start from "0x" plus digits 0-9 and letters A-F. For example 0xD37f26fFB70f688d16e803De0177C91229E877fb'
            />
            <FormikError name="address" component="span" />
          </FormLabel>
          <FormLabel>
            Enter token amount:
            <FormikField type="number" name="ether" step="0.000001" />
            <FormikError name="ether" component="span" />
          </FormLabel>
          <Button type="submit">
            {isLoading ? <Loader width={22} color={"#ffffff"} /> : "Send"}
          </Button>
          {hash && (
            <Message>
              Check your transaction with hash:{" "}
              <p style={{ color: "#18d685" }}>{firstHalf}</p>
              <p style={{ color: "#18d685" }}>{secondHalf}</p>
            </Message>
          )}
        </FormikForm>
      </Wrapper>
    </Formik>
  );
};
