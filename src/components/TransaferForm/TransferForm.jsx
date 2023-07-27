import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { send } from "../../redux/wallet/operations";
import { Loader } from "../Loader/Loader";
import * as Yup from "yup";

import {
  selectPaymentData,
  selectIsLoadingSend,
} from "../../redux/wallet/selectors";

import {
  Wrapper,
  FormikForm,
  Title,
  FormikField,
  FormLabel,
  FormikError,
  Button,
} from "./TransferForm.styled";

const adressRegExp = /^0x[a-fA-F0-9]{40}$/;

const schema = Yup.object().shape({
  address: Yup.string()
    .matches(adressRegExp, "Address is not valid!")
    .required("Required!")
    .trim(),
  ether: Yup.number().required("Required!"),
});

export const TransferForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingSend);
  const { hash } = useSelector(selectPaymentData);

  const firstHalf = hash.slice(0, 32).trim();
  const secondHalf = hash.slice(32);

  console.log(firstHalf, secondHalf);

  const handleSubmit = async (address, ether) => {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

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
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <FormikError name="address" component="span" />
          </FormLabel>
          <FormLabel>
            Enter token amount:
            <FormikField
              type="number"
              name="ether"
              step="0.001"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <FormikError name="ether" component="span" />
          </FormLabel>
          <Button type="submit">
            {isLoading ? <Loader width={22} color={"#ffffff"} /> : "Send"}
          </Button>

          {hash && (
            <div
              style={{
                padding: 10,
                backgroundColor: "#12232f",
                borderTop: "1px solid white",
                borderBottom: "1px solid white",
                textAlign: "center",
                marginTop: 20,
                overflow: "auto",
              }}
            >
              Check your transaction with hash:{" "}
              <p style={{ color: "#18d685" }}>{firstHalf}</p>
              <p style={{ color: "#18d685" }}>{secondHalf}</p>
            </div>
          )}
        </FormikForm>
      </Wrapper>
    </Formik>
  );
};
