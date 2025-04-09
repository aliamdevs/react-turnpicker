/**
 * Convert English numbers to Persian.
 *
 * @param {string} value
 * @return {string} converted string.
 */
export function toFaNum(value) {
  var englishNumbers = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  if (typeof value === "number") {
    var value = value.toString();
  }

  return value.split("").reduce(function (result, char) {
    if (char in englishNumbers) {
      return result + englishNumbers[char];
    }
    return result + char;
  }, "");
}

/**
 * Convert Persian/Arabic numbers to English.
 *
 * @param {string} value
 * @return {string} converted string.
 */
export function toEnNum(value) {
  var persianNumbers = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
    // in case you type with arabic keyboard:
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };

  return value.split("").reduce(function (result, char) {
    if (char in persianNumbers) {
      return result + persianNumbers[char];
    }
    return result + char;
  }, "");
}
