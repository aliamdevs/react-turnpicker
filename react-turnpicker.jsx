import React, { useEffect, useState } from "react";
import Assembler from "./src/assembler";
import ColorVars from "./src/color-vars-settign.json";
import monthName from "./src/tools/month_name_array.json";
import "./src/styles/__main.css";
import { convertToPersianDigits, SetColorInStyles } from "./src/tools/common";
import { DTDW, includes_date, returnMonthsDays } from "./src/tools/date_funcs";
import { j2q } from "./src/tools/hijri.jalali";
import Aliam_TP_TitrUp_Compo from "./src/subcomponents/Aliam_TP_TitrUp_Compo";
import Aliam_TP_Space_Item from "./src/subcomponents/Aliam_TP_Space_Item";
import Aliam_TP_Item_Num from "./src/subcomponents/Aliam_TP_Item_Num";

const JalaliHolidays = [
  "1/1",
  "1/2",
  "1/3",
  "1/4",
  "1/12",
  "1/13",
  "3/14",
  "3/15",
  "11/22",
  "12/29",
];
const QamariHolidays = [
  "1/9",
  "1/10",
  "2/20",
  "2/28",
  "2/30",
  "3/8",
  "3/17",
  "6/3",
  "7/13",
  "7/27",
  "8/15",
  "9/21",
  "10/1",
  "10/2",
  "10/25",
  "12/10",
  "12/18",
];
const QamariHolidaysAfterNintee = [
  "1/10",
  "1/11",
  "2/21",
  "2/29",
  "3/1",
  "3/9",
  "3/18",
  "6/4",
  "7/14",
  "7/28",
  "8/16",
  "9/22",
  "10/2",
  "10/3",
  "10/26",
  "12/11",
  "12/19",
];
const BoxesDeafultConfiguration = [
  "07:30-08:00",
  "08:20-08:55",
  "09:00-09:35",
  "09:50-10:25",
  "10:40-11:15",
  "11:30-12:05",
  "12:20-12:55",
  "13:10-13:45",
  "14:00-14:35",
  "14:50-15:25",
  "15:40-16:15",
  "16:30-17:05",
  "17:20-17:55",
  "18:10-18:45",
  "19:00-19:35",
  "19:50-20:25",
  "20:40-21:15",
  "21:30-22:05",
  "22:20-22:55",
  "23:10-23:45",
];

export default function TurnPicker({
  colorPalette = {
    primary: "#83a570",
    second: "#a4cb8d",
    third: "#E195AB",
  },
  background = "#fffdf9",
  mode = "D",
  disabled = false,
  shadow = false,
  border = true,
  borderColor = "#e6e6e6",
  enNum = false,
  folded_spicific_day = [{ y: 1404, m: 1, d: 17 }], //items : {y:year,m:month,d:day}
  folded_weekly_day = [6],
  holidaysAreFolded = true,
  folded_specific_boxes = [], // 0-19 ({y:year,m:month,d:day,h:(Box Index -> 0-19)})
  folded_routin_boxes = [], // 0-19
  soldedOut = [], // H mode : {y:year,m:month,d:day,h:(Box Index -> 0-19)} // D Mode : {y:year,m:month,d:day}
  boxesConfig = { BoxesDeafultConfiguration },
}) {
  const [theDay, settheDay] = useState(21);
  const [theMonth, settheMonth] = useState(1);
  const [theYear, settheYear] = useState(1404);
  const [MONTHVOCAB, setMONTHVOCAB] = useState([]);
  const [TPNotLeaf, setTPNotLeaf] = useState([]);
  useEffect(() => {
    SetColorInStyles(ColorVars, colorPalette, background, borderColor);
  }, [colorPalette, background, borderColor]);
  useEffect(() => {
    let tmp = [];
    for (let i = 1; i < returnMonthsDays(theYear)[theMonth - 1] + 1; i++) {
      tmp.push(i);
    }
    setMONTHVOCAB(tmp);
    let ttmp = [];
    for (let i = 0; i < DTDW({ y: theYear, m: theMonth, d: 1 })[1]; i++) {
      ttmp.push("X");
    }
    setTPNotLeaf(ttmp);
  }, [theYear, theMonth]);
  const checkFormalHoliday = (y, m, d) => {
    let QH = true;
    if (y > 1405) {
      QH = false;
    } else if (y === 1405) {
      if (m > 10) {
        QH = false;
      } else if (m === 10) {
        if (d > 18) {
          QH = false;
        }
      }
    }
    switch (holidaysAreFolded) {
      case true:
        return (
          JalaliHolidays.includes(m.toString() + "/" + d.toString()) ||
          (QH
            ? QamariHolidays.includes(j2q(y, m, d))
            : QamariHolidaysAfterNintee.includes(j2q(y, m, d)))
        );

      case false:
        return false;
    }
  };
  const folded_cheker = (x) => {
    return (
      folded_weekly_day.includes(DTDW({ y: theYear, m: theMonth, d: x })[1]) ||
      includes_date(folded_spicific_day, { y: theYear, m: theMonth, d: x }) ||
      checkFormalHoliday(theYear, theMonth, x)
    );
  };
  switch (disabled) {
    case false:
      return (
        <React.Fragment>
          <div className="_main_container" id="__VARS_TurnPickerDiv_ID_Aliam">
            <Assembler
              month={theMonth}
              year={theYear}
              setMonth={settheMonth}
              setYear={settheYear}
            />
            <div
              className={
                "TP_Body_Container_Aliam_Componnt " +
                (shadow
                  ? " __TP_shadow_is_alowed_for_This_contect_Aliam "
                  : " ") +
                (border
                  ? " __TP_border_is_alowed_for_This_contect_Aliam "
                  : " ")
              }
            >
              <Aliam_TP_TitrUp_Compo />
              <Aliam_TP_Space_Item data={TPNotLeaf} />
              {MONTHVOCAB.map((x, i) => {
                return (
                  <div
                    className={
                      "__TP_box_day_displayer " +
                      (folded_cheker(x)
                        ? "__TP_light_bdd "
                        : "__TP_secon_bdd ") +
                      (x === theDay ? "__TP_prim_bdd " : " ")
                      //__TP_third_bdd
                    }
                    key={i}
                    onClick={() => {
                      if (!folded_cheker(x)) settheDay(x);
                    }}
                  >
                    <Aliam_TP_Item_Num>
                      {!enNum ? convertToPersianDigits(x) : x}
                    </Aliam_TP_Item_Num>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      );
    case true:
      return (
        <React.Fragment>
          <div id="__VARS_TurnPickerDiv_ID_Aliam">DISABLED</div>
        </React.Fragment>
      );
  }
}
