import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;

  width: 100%;
  height: 50px;

  @media screen and (min-width: 500px) {
    padding: 0 25px;
  }

  color: ${(props) => props.theme.colors.hederFontColor};
  background-color: ${(props) => props.theme.colors.firstMainColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondAccentColor};
`;

export const Main = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  color: ${(props) => props.theme.colors.backgroundColor};
`;
