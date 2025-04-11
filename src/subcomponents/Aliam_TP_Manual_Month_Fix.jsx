import React from "react";
import monthName from "../tools/month_name_array.json";
import "../styles/__assembler.css";
import leftarrowico from "../assets/icons/left_arrow_ico.png";

export default function Aliam_TP_Manual_Month_Fix({
  m,
  setm,
  IncreaseYearHandler,
  DecreaseYearHandler,
}) {
  const IncreaseMonthHandler = () => {
    if (m === 12) {
      IncreaseYearHandler();
      setm(1);
    } else {
      setm(m + 1);
    }
  };
  const DecreaseMonthHandler = () => {
    if (m === 1) {
      DecreaseYearHandler();
      setm(12);
    } else {
      setm(m - 1);
    }
  };
  return (
    <div className="Aliam_TP_Manual_YF_Container">
      <div
        className="TP_M_YF_Butoom TP_M_YF_Butoom_Sec2"
        onClick={IncreaseMonthHandler}
      >
        <img
          src={leftarrowico}
          alt="Next-Year"
          className="TP_M_YF_Butoom_ICO TP_M_YF_Butoom_ICO_ROTATE"
        />
      </div>
      <div className="TP_M_YF_Display ___TP_MYF_Stand_Disp ">
        <span>{monthName.array[m - 1]}</span>
      </div>
      <div
        className="TP_M_YF_Butoom TP_M_YF_Butoom_Sec1"
        onClick={DecreaseMonthHandler}
      >
        <img
          src={leftarrowico}
          alt="Perv-Year"
          className="TP_M_YF_Butoom_ICO"
        />
      </div>
    </div>
  );
}
