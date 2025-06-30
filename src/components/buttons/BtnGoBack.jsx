import { Link } from "react-router";
import arrowLeftBlack from "../../assets/arrow_left_black.svg";

export const BtnGoBack = ({ backTo }) => {
  return (
    <Link to={backTo} className="text-xl cursor-pointer flex mb-5 justify-end">
      <img className="w-6" src={arrowLeftBlack} alt="arrow left" />
      Volver
    </Link>
  );
};
