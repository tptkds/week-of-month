"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getNextWeekOfMonth: () => getNextWeekOfMonth_default,
  getPrevWeekOfMonth: () => getPrevWeekOfMonth_default,
  getWeekOfMonth: () => getWeekOfMonth_default
});
module.exports = __toCommonJS(src_exports);

// src/getWeekOfMonth.ts
var getWeekOfMonth = (date) => {
  const currentDay = date.getDate();
  const firstWeekday = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const firstWeekDayCount = firstWeekday === 0 ? 1 : 7 - firstWeekday + 1;
  const isFirstWeekOfPreviousMonth = firstWeekday === 0 || firstWeekday > 4;
  const dayOfTheLastWeek = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const isLastWeekOfCurrentMonth = dayOfTheLastWeek >= 4 || dayOfTheLastWeek === 0;
  switch (true) {
    case isFirstWeekOfPreviousMonth: {
      let startOfWeekDate = 1 + firstWeekDayCount;
      if (currentDay < startOfWeekDate) {
        return {
          year: date.getMonth() - 1 === -1 ? date.getFullYear() - 1 : date.getFullYear(),
          month: date.getMonth(),
          weekOfMonth: 5
        };
      }
      for (let i = 1; i < 6; i++) {
        if (i === 5) {
          if (!isLastWeekOfCurrentMonth) {
            return {
              year: date.getMonth() + 2 > 12 ? date.getFullYear() + 1 : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1
            };
          }
        }
        if (startOfWeekDate <= currentDay && currentDay <= startOfWeekDate + 6) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i
          };
        }
        startOfWeekDate += 7;
      }
    }
    default: {
      let startOfWeekDate = 1;
      if (currentDay >= startOfWeekDate && currentDay < startOfWeekDate + firstWeekDayCount) {
        return {
          year: date.getMonth() ? date.getFullYear() : date.getFullYear(),
          month: date.getMonth() + 1,
          weekOfMonth: 1
        };
      }
      startOfWeekDate += firstWeekDayCount;
      for (let i = 2; i < 6; i++) {
        if (i === 5) {
          if (!isLastWeekOfCurrentMonth) {
            return {
              year: date.getMonth() + 2 > 12 ? date.getFullYear() + 1 : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1
            };
          }
        }
        if (startOfWeekDate <= currentDay && currentDay <= startOfWeekDate + 6) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i
          };
        }
        startOfWeekDate += 7;
      }
      return {
        year: 0,
        month: 0,
        weekOfMonth: 0
      };
    }
  }
};
var getWeekOfMonth_default = getWeekOfMonth;

// src/getNextWeekOfMonth.ts
var getNextWeekOfMonth = (year, month, weekOfMonth) => {
  const theseMonthLastDay = new Date(year, month, 0).getDate();
  const weekdayTheseMonthLastDay = new Date(year, month, 0).getDay();
  const { weekOfMonth: lastWeekOfTheseMonth } = getWeekOfMonth_default(
    new Date(year, month, 0)
  );
  const totalWeeksInTheseMonth = lastWeekOfTheseMonth === 5 || lastWeekOfTheseMonth === 4 ? lastWeekOfTheseMonth : getWeekOfMonth_default(
    new Date(
      year,
      month - 2,
      theseMonthLastDay - weekdayTheseMonthLastDay
    )
  ).weekOfMonth;
  if (weekOfMonth === totalWeeksInTheseMonth) {
    return {
      year: month + 1 > 12 ? year + 1 : year,
      month: month + 1 > 12 ? 1 : month + 1,
      weekOfMonth: 1
    };
  } else {
    return {
      year,
      month,
      weekOfMonth: weekOfMonth + 1
    };
  }
};
var getNextWeekOfMonth_default = getNextWeekOfMonth;

// src/getPrevWeekOfMonth.ts
var getPrevWeekOfMonth = (year, month, weekOfMonth) => {
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
  const weekdayPrevMonthLastDay = new Date(year, month - 1, 0).getDay();
  const { weekOfMonth: prevMonthLastWeek } = getWeekOfMonth_default(
    new Date(year, month - 1, 0)
  );
  const totalWeeksInPrevMonth = prevMonthLastWeek === 5 || prevMonthLastWeek === 4 ? prevMonthLastWeek : getWeekOfMonth_default(
    new Date(year, month - 2, prevMonthLastDay - weekdayPrevMonthLastDay)
  ).weekOfMonth;
  if (weekOfMonth === 1) {
    return {
      year: month - 1 <= 0 ? year - 1 : year,
      month: month - 1 <= 0 ? 12 : month - 1,
      weekOfMonth: totalWeeksInPrevMonth
    };
  } else {
    return {
      year,
      month,
      weekOfMonth: weekOfMonth - 1
    };
  }
};
var getPrevWeekOfMonth_default = getPrevWeekOfMonth;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getNextWeekOfMonth,
  getPrevWeekOfMonth,
  getWeekOfMonth
});
