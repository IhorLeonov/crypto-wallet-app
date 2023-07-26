import styled from "styled-components";

import { Form, Field, ErrorMessage } from "formik";

export const Wrapper = styled.div`
  height: 300px;
  width: 270px;

  border-radius: 10px;
  border: 1px solid white;
  background: radial-gradient(
    ${(props) => props.theme.colors.thirdMainColor},
    ${(props) => props.theme.colors.secondMainColor}
  );

  @media screen and (min-width: 375px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 350px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 35px;
  }
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const FormLabel = styled.label`
  margin-left: auto;
  margin-right: auto;

  &:nth-child(2) {
    margin-top: 10px;
  }
`;

export const FormikField = styled(Field)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 8px;
  width: 200px;
  height: 34px;

  border: none;
  border-radius: 10px;
  transition: all 0.218s ease 0s;
  outline: none;

  @media screen and (min-width: 375px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  &:hover,
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
  margin-top: 25px;
  padding: 0 10px;

  width: 100px;
  height: 30px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 35px;
    width: 120px;
    height: 35px;
    font-size: 16px;
  }
`;
