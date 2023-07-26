import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPaymentData,
  selectIsLoadingSend,
} from "../../redux/wallet/selectors";
import { send } from "../../redux/wallet/operations";
import { Loader } from "../Loader/Loader";

import {
  Wrapper,
  FormikForm,
  Title,
  FormikField,
  FormLabel,
  Button,
} from "./TransferForm.styled";

export const TransferForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingSend);
  const paymentData = useSelector(selectPaymentData);

  if (paymentData.hash)
    console.log(
      `https://explorer.bitquery.io/ru/goerli/tx/${paymentData.hash}`
    );

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
      // validationSchema={}
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
            {/* <ErrorMessage name="name" component="span" /> */}
          </FormLabel>
          <FormLabel>
            Enter token ether:
            <FormikField
              type="number"
              name="ether"
              step="0.001"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            {/* <ErrorMessage name="number" component="span" /> */}
          </FormLabel>
          <Button type="submit">
            {isLoading ? <Loader width={22} color={"#ffffff"} /> : "Send"}
          </Button>
        </FormikForm>
      </Wrapper>
    </Formik>
  );
};
