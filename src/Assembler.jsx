import React from "react";
import "./styles/__assembler.css";
import Aliam_TP_Manual_Year_Fix from "./subcomponents/Aliam_TP_Manual_Year_Fix";
import Aliam_TP_Manual_Month_Fix from "./subcomponents/Aliam_TP_Manual_Month_Fix";
import Aliam_TP_Gusture_Year_Fix from "./subcomponents/Aliam_TP_Gusture_Year_Fix";
import Aliam_TP_Gusture_Month_Fix from "./subcomponents/Aliam_TP_Gusture_Month_Fix";
export default function Assembler({
  month,
  year,
  setMonth,
  setYear,
  shadow,
  border,
  em,
  gus,
}) {
  const IncreaseYearHandler = () => {
    setYear(year + 1);
  };
  const DecreaseYearHandler = () => {
    setYear(year - 1);
  };
  return (
    <React.Fragment>
      <div className="__TP_Assembler_On_topcontainer">
        <div
          className={
            "__TP_Assembler_On_Sec_Floor_Container " +
            (shadow
              ? " __TP_shadow_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ") +
            (border
              ? " __TP_border_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ")
          }
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="493px"
            height="995px"
          >
            {" "}
            <path
              fill-rule="evenodd"
              fill="rgb(42, 42, 42)"
              d="M178.565,0.671 C182.736,0.671 186.908,0.671 191.079,0.671 C195.251,65.326 199.423,129.999 203.594,194.653 C203.594,213.424 206.723,232.200 206.723,250.971 C209.047,293.536 211.594,327.470 216.109,391.764 C216.109,445.990 216.109,500.232 216.109,554.458 C220.722,578.316 232.035,600.766 238.011,617.033 C236.083,635.568 224.668,661.634 231.753,688.994 C242.727,731.370 292.562,747.682 308.407,789.114 C337.501,865.189 244.113,888.274 253.654,926.779 C259.580,950.693 299.524,969.857 317.793,983.096 C317.793,985.703 317.793,988.311 317.793,990.918 C316.229,991.961 314.665,993.004 313.100,994.046 C288.915,1000.532 261.907,963.217 248.961,950.244 C216.942,918.159 169.974,864.401 184.822,789.114 C194.264,741.239 222.529,692.702 209.852,626.419 C200.127,575.569 182.364,551.304 151.970,521.607 C152.525,434.506 157.243,352.547 159.792,276.001 C160.905,242.587 166.057,191.529 148.841,174.316 C134.952,160.429 109.920,159.889 81.574,160.237 C81.574,157.109 81.574,153.979 81.574,150.851 C110.772,150.851 139.980,150.851 169.178,150.851 C172.307,100.796 175.436,50.726 178.565,0.671 ZM217.674,150.851 C331.171,149.218 422.477,151.535 467.973,216.554 C486.378,242.858 498.573,290.837 488.310,335.447 C462.986,445.520 372.356,496.497 234.882,495.012 C234.882,493.448 234.882,482.497 234.882,480.933 C236.967,478.847 232.796,478.326 234.882,476.240 C247.396,475.719 230.153,484.673 303.714,477.804 C368.208,464.744 402.955,438.451 421.042,388.635 C466.203,264.252 344.002,140.896 219.238,182.138 C219.238,171.710 217.674,161.279 217.674,150.851 ZM159.792,798.500 C166.049,799.022 172.308,799.543 178.565,800.065 C179.086,801.629 179.607,803.193 180.129,804.758 C181.045,811.190 181.575,812.058 175.436,815.708 C157.708,817.272 158.050,804.213 122.247,820.401 C110.321,823.873 99.611,836.098 84.702,839.174 C23.196,851.863 -14.767,800.374 6.484,742.183 C23.884,694.535 78.761,699.175 108.168,665.529 C125.167,646.079 140.389,613.772 147.277,585.746 C148.841,572.189 150.406,558.629 151.970,545.072 C163.376,551.241 169.724,559.802 175.436,571.666 C163.720,602.434 126.370,664.390 134.762,707.767 C138.933,729.666 143.106,751.571 147.277,773.470 C150.937,783.454 148.985,785.705 159.792,798.500 ZM72.187,704.638 C55.597,708.559 45.084,714.758 36.207,724.975 C11.819,753.043 12.149,814.530 53.415,823.530 C133.996,841.105 163.660,701.886 72.187,704.638 ZM231.753,751.569 C216.977,755.092 207.624,766.600 202.030,778.163 C181.573,820.453 209.219,885.688 263.041,870.461 C318.283,854.832 304.520,748.768 231.753,751.569 ZM172.595,409.126 C168.658,413.451 166.884,417.244 166.351,421.857 C164.888,434.530 176.900,451.873 190.326,446.422 C216.545,435.778 197.957,390.616 172.595,409.126 Z"
            />{" "}
          </svg> */}
          {gus ? (
            <Aliam_TP_Gusture_Year_Fix sety={setYear} y={year} />
          ) : (
            <Aliam_TP_Manual_Year_Fix
              y={year}
              IncreaseYearHandler={IncreaseYearHandler}
              DecreaseYearHandler={DecreaseYearHandler}
              em={em}
            />
          )}
        </div>
        <div
          className={
            "__TP_Assembler_On_Sec_Floor_Container " +
            (shadow
              ? " __TP_shadow_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ") +
            (border
              ? " __TP_border_is_alowed_for_This_contect_Aliam_With_low_Op "
              : " ")
          }
        >
          {gus ? (
            <Aliam_TP_Gusture_Month_Fix setm={setMonth} m={month} />
          ) : (
            <Aliam_TP_Manual_Month_Fix
              m={month}
              setm={setMonth}
              IncreaseYearHandler={IncreaseYearHandler}
              DecreaseYearHandler={DecreaseYearHandler}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
