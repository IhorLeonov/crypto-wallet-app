import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;

  color: ${(props) => props.theme.colors.hederFontColor};
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Main = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: ${(props) => props.theme.colors.firstMainColor}; */

  /* background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.firstMainColor},
    ${(props) => props.theme.colors.secondMainColor}
  ); */
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  /* background-color: ${(props) => props.theme.colors.firstMainColor}; */
  color: ${(props) => props.theme.colors.backgroundColor};
`;
