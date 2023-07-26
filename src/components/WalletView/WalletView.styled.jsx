import { styled } from "styled-components";

export const ConnectBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 0 10px;

  height: 30px;
  font-size: 12px;

  @media screen and (min-width: 500px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    height: 35px;
    min-width: 175px;
    font-size: 16px;
  }
`;

export const AccentData = styled.span`
  color: ${(props) => props.theme.colors.secondAccentColor};
`;

export const BoldAccent = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondAccentColor};

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
