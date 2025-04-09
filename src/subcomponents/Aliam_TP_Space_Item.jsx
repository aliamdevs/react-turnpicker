import React from "react";

export default function Aliam_TP_Space_Item(props) {
  return (
    <React.Fragment>
      {props.data.map((x, i) => (
        <div className="__TP_noLeaflet" key={i}></div>
      ))}
    </React.Fragment>
  );
}
