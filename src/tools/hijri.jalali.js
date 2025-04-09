function IQYL(y) {
  const Y = [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29];
  return Y.includes(y % 30);
}
export const j2q = (y, m, d) => {
  d = m > 6 ? 6 * 31 + (m - 7) * 30 + d : (m - 1) * 31 + d;
  let result = ((y - 1) * 365.2422 + d - 119) / 354.367;
  result = result.toString().split(".");
  y = +result[0] + 1;
  result = (("0." + result[1]) * 12).toString().split(".");
  m = +result[0] + 1;
  d = +(("0." + result[1]) * 29.53).toString().split(".")[0] + 1;
  return m.toString() + "/" + d.toString();
};
