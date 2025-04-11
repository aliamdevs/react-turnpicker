import React from "react";
import "./styles/__assembler.css";
import Aliam_TP_Manual_Year_Fix from "./subcomponents/Aliam_TP_Manual_Year_Fix";
import Aliam_TP_Manual_Month_Fix from "./subcomponents/Aliam_TP_Manual_Month_Fix";
export default function Assembler({
  month,
  year,
  setMonth,
  setYear,
  shadow,
  border,
  em,
}) {
  const IncreaseYearHandler = () => {
    setYear(year + 1);
  };
  const DecreaseYearHandler = () => {
    setYear(year - 1);
  };
  return (
    <React.Fragment>
      <div className="S1">
        <div
          className={
            "SD1 " +
            (shadow
              ? " __TP_shadow_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ") +
            (border
              ? " __TP_border_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ")
          }
        >
          <Aliam_TP_Manual_Year_Fix
            y={year}
            IncreaseYearHandler={IncreaseYearHandler}
            DecreaseYearHandler={DecreaseYearHandler}
            em={em}
          />
        </div>
        <div
          className={
            "SD1 " +
            (shadow
              ? " __TP_shadow_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ") +
            (border
              ? " __TP_border_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ")
          }
        >
          <Aliam_TP_Manual_Month_Fix
            m={month}
            setm={setMonth}
            IncreaseYearHandler={IncreaseYearHandler}
            DecreaseYearHandler={DecreaseYearHandler}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
