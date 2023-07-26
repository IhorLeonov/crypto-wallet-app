import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Wrapper = styled.div`
  width: 500px;
  height: 350px;

  border-radius: 10px;
  border: 1px solid white;
  background: radial-gradient(
    ${(props) => props.theme.colors.thirdMainColor},
    ${(props) => props.theme.colors.secondMainColor}
  );
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 35px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 350px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const FormLabel = styled.label`
  &:nth-child(2) {
    margin-top: 10px;
  }
`;

export const FormikField = styled(Field)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  height: 34px;
  outline: none;

  border: none;
  border-radius: 10px;
  transition: all 0.218s ease 0s;
  placeholder &:hover,
  &:focus {
    outline: 1.5px solid ${(props) => props.theme.colors.firstMainColor};
  }
`;

export const FormikError = styled(ErrorMessage)``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  padding: 0 10px;

  width: 120px;
  height: 35px;

  border: 1px solid ${(props) => props.theme.colors.firstMainColor};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.accentColor};
  color: ${(props) => props.theme.colors.backgroundColor};
  transition: all 0.218s ease 0s;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.secondAccentColor};
    color: white;
  }
`;
