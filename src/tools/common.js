function darkenColor(hex, amount) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function ContextColor(hexColor) {
  hexColor = hexColor.replace(/^#/, "");
  const r = parseInt(hexColor.slice(0, 2), 16) / 255;
  const g = parseInt(hexColor.slice(2, 4), 16) / 255;
  const b = parseInt(hexColor.slice(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.4 ? "#535353" : "#ffffff";
}
export function SetColorInStyles(CV, CP, BG, BC) {
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.primary, CP.primary);
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.darkerprimary, darkenColor(CP.primary, 3));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.second, CP.second);
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.darkersecond, darkenColor(CP.second, 2));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.third, CP.third);
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.darkerthird, darkenColor(CP.third, 1));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.contextcolorP, ContextColor(CP.primary));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.contextcolorS, ContextColor(CP.second));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.contextcolorT, ContextColor(CP.third));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.backColorFixed, BG);
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.backColorTint, darkenColor(BG, 5));
  document
    .getElementById("__VARS_TurnPickerDiv_ID_Aliam")
    .style.setProperty(CV.borderColor, BC);
}
export function convertToPersianDigits(input) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/\d/g, (digit) => persianDigits[digit]);
}
