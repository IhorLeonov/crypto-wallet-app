import styled from "styled-components";

export const LogoWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 375px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    position: absolute;
    left: 50px;
    top: 100px;
  }
`;
