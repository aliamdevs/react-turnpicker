import React from "react";

export default function Aliam_TP_Item_Num(props) {
  return (
    <div>
      <p
        className={
          " Num_aliam_Stylus_font_init " +
          (props.Selected ? " Num_aliam_Stylus_font_Selected " : " ")
        }
      >
        {props.children}
      </p>
    </div>
  );
}
