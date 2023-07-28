import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;

  width: 100%;
  height: 80px;

  @media screen and (min-width: 500px) {
    padding: 0 25px;
  }

  color: ${(props) => props.theme.colors.hederFontColor};
  background-color: ${(props) => props.theme.colors.firstMainColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondAccentColor};
`;

export const Main = styled.main`
  height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  color: ${(props) => props.theme.colors.backgroundColor};
`;

export const GhLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.backgroundColor};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.secondAccentColor};
  }
`;
