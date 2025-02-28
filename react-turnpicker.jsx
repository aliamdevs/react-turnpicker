import React, { useEffect } from "react";
import Assembler from "./src/assembler";
import ColorVars from "./src/color-vars-settign.json";
import "./src/styles/__main.css";

export default function TurnPicker({
  colorPalette = { primary: "blue", second: "red", third: "green" },
  style = "Standard",
  disabled = false,
}) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      ColorVars.primary,
      colorPalette.primary
    );
    document.documentElement.style.setProperty(
      ColorVars.second,
      colorPalette.second
    );
    document.documentElement.style.setProperty(
      ColorVars.third,
      colorPalette.third
    );
  }, [colorPalette]);
  return (
    <React.Fragment>
      <div className="_main_container">
        <Assembler />
        {disabled === true ? "true" : "false"}
      </div>
    </React.Fragment>
  );
}
