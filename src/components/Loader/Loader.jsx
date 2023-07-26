import { LoaderBox } from "./Loader.styled.jsx";
import { RotatingLines } from "react-loader-spinner";

export const Loader = ({ width, color = "#CAE8FF" }) => {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor={color}
        strokeWidth="5"
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </LoaderBox>
  );
};
