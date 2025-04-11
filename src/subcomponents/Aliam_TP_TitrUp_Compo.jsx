import React from "react";
const titrup_classes_names = "__TitrUp_aliam_TP_Component ___TP_TU_Standard";
const titr_name_styles = [
  ["شنبه", "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
  ["شنبه", "یک‌ شــ", "دو شــ", "سه‌ شــ", "چهار شــ", "پنج‌ شــ", "جمعه"],
  ["شنبه", "۱ شنبه", "۲ شنبه", "۳ شنبه", "۴ شنبه", "۵ شنبه", "جمعه"],
];
export default function Aliam_TP_TitrUp_Compo(props) {
  return (
    <React.Fragment>
      {titr_name_styles[props.tns].map((x, i) => {
        return (
          <span className={titrup_classes_names} key={i}>
            {x}
          </span>
        );
      })}
    </React.Fragment>
  );
}
