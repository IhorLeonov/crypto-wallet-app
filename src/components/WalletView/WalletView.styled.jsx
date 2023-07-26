import { styled } from "styled-components";

export const WalletBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  padding: 0 10px;

  height: 35px;
  min-width: 175px;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.accentColor};
  background: ${(props) => props.theme.colors.firstMainColor};
  color: #ffffff;
`;

export const AccentData = styled.span`
  color: ${(props) => props.theme.colors.secondAccentColor};
`;

export const BoldAccent = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondAccentColor};
`;

export const ConnectBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  padding: 0 10px;

  height: 35px;
  min-width: 175px;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.accentColor};
  background: ${(props) => props.theme.colors.firstMainColor};
  color: #ffffff;
  transition: all 0.218s ease 0s;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.secondAccentColor};
    color: ${(props) => props.theme.colors.accentColor};
  }
`;
