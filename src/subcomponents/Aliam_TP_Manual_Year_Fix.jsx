import React from "react";
import { convertToPersianDigits } from "../tools/common";
import "../styles/__assembler.css";
import leftarrowico from "../assets/icons/left_arrow_ico.png";

export default function Aliam_TP_Manual_Year_Fix({
  y,
  em,
  IncreaseYearHandler,
  DecreaseYearHandler,
}) {
  return (
    <div className="Aliam_TP_Manual_YF_Container">
      <div
        className="TP_M_YF_Butoom TP_M_YF_Butoom_Sec1"
        onClick={DecreaseYearHandler}
      >
        <img
          src={leftarrowico}
          alt="Perv-Year"
          className="TP_M_YF_Butoom_ICO"
        />
      </div>

      <div
        className="TP_M_YF_Butoom TP_M_YF_Butoom_Sec2"
        onClick={IncreaseYearHandler}
      >
        <img
          src={leftarrowico}
          alt="Next-Year"
          className="TP_M_YF_Butoom_ICO TP_M_YF_Butoom_ICO_ROTATE"
        />
      </div>
      <div className="TP_M_YF_Display ___TP_MYF_Stand_Disp ">
        <span>{!em ? convertToPersianDigits(y) : y}</span>
      </div>
    </div>
  );
}
