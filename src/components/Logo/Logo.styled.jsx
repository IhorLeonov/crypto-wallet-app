import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.div`
  color: ${(props) => props.theme.colors.secondAccentColor};
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 620px) {
    display: none;
  }
`;
