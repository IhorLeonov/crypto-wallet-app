import logo from "../../assets/images/eth-logo.png";
import { LogoWrapper } from "./Logo.styled";

export const Logo = ({ width, height }) => {
  return (
    <LogoWrapper>
      <img
        style={{ width: `${width}px`, height: `${height}px` }}
        src={logo}
        alt="Ethereum-logo"
      />
    </LogoWrapper>
  );
};
