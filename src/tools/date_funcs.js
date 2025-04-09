function isLeapYearJalali(jy) {
  const t = [1, 5, 9, 13, 17, 22, 26, 30];
  const s = jy % 33;
  return t.includes(s);
}
export function returnMonthsDays(jy) {
  return [
    31,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    isLeapYearJalali(jy) ? 30 : 29,
  ];
}
function getDayOfWeekJalali(jy, jm, jd) {
  const daysInMonth = [
    31,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    isLeapYearJalali(jy) ? 30 : 29,
  ];

  let totalDays = 0;
  for (let year = 1; year < jy; year++) {
    totalDays += isLeapYearJalali(year) ? 366 : 365;
  }

  for (let month = 1; month < jm; month++) {
    totalDays += daysInMonth[month - 1];
  }

  totalDays += jd - 1;

  let dayOfWeek = (totalDays + 5) % 7;

  return dayOfWeek;
}

export function DTDW(jDate) {
  let jy = jDate.y;
  let jm = jDate.m;
  let jd = jDate.d;

  const daysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];
  let dayIndex = getDayOfWeekJalali(jy, jm, jd);

  return [daysOfWeek[dayIndex], dayIndex];
}
export function includes_date(date_array, date) {
  for (let i = 0; i < date_array.length; i++) {
    if (date_array[i].y === date.y) {
      if (date_array[i].m === date.m) {
        if (date_array[i].d === date.d) {
          return true;
        }
      }
    }
  }
  return false;
}
