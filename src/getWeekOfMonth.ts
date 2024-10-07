import { WeekOfMonth } from "./type";

const getWeekOfMonth = (date: Date): WeekOfMonth => {
  const currentDay = date.getDate();
  const firstWeekday = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const firstWeekDayCount = firstWeekday === 0 ? 1 : 7 - firstWeekday + 1;

  // The variable 'firstWeekday' indicates the weekday of the first day of the month.
  // Here, '0' represents Sunday, and values '5' and '6' represent Friday and Saturday, respectively.
  // This condition checks if the first week of the current month belongs to the fifth week of the previous month.
  // Specifically, it returns true if the first day of the month is either Sunday or falls on a weekday that makes it part of the previous month’s fifth week.
  const isFirstWeekOfPreviousMonth = firstWeekday === 0 || firstWeekday > 4;
  const dayOfTheLastWeek = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // The variable 'dayOfTheLastWeek' indicates the weekday of the last day of the current month.
  // Here, '0' represents Sunday, and '4' represents Thursday.
  // This condition checks if the last week of the current month belongs to the fifth week of the month.
  // Specifically, it returns true if the last day of the month falls on either Sunday or a weekday that makes it part of the fifth week.
  const isLastWeekOfCurrentMonth =
    dayOfTheLastWeek >= 4 || dayOfTheLastWeek === 0;

  switch (true) {
    case isFirstWeekOfPreviousMonth: {
      let startOfWeekDate = 1 + firstWeekDayCount;
      if (currentDay < startOfWeekDate) {
        return {
          year:
            date.getMonth() - 1 === -1
              ? date.getFullYear() - 1
              : date.getFullYear(),
          month: date.getMonth(),
          weekOfMonth: 5,
        };
      }

      for (let i = 1; i < 6; i++) {
        if (i === 5) {
          if (!isLastWeekOfCurrentMonth) {
            return {
              year:
                date.getMonth() + 2 > 12
                  ? date.getFullYear() + 1
                  : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1,
            };
          }
        }

        if (
          startOfWeekDate <= currentDay &&
          currentDay <= startOfWeekDate + 6
        ) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i,
          };
        }
        startOfWeekDate += 7;
      }
    }

    default: {
      let startOfWeekDate = 1;

      if (
        currentDay >= startOfWeekDate &&
        currentDay < startOfWeekDate + firstWeekDayCount
      ) {
        return {
          year: date.getMonth() ? date.getFullYear() : date.getFullYear(),
          month: date.getMonth() + 1,
          weekOfMonth: 1,
        };
      }
      startOfWeekDate += firstWeekDayCount;

      for (let i = 2; i < 6; i++) {
        if (i === 5) {
          if (!isLastWeekOfCurrentMonth) {
            return {
              year:
                date.getMonth() + 2 > 12
                  ? date.getFullYear() + 1
                  : date.getFullYear(),
              month: date.getMonth() + 2 > 12 ? 1 : date.getMonth() + 2,
              weekOfMonth: 1,
            };
          }
        }

        if (
          startOfWeekDate <= currentDay &&
          currentDay <= startOfWeekDate + 6
        ) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            weekOfMonth: i,
          };
        }
        startOfWeekDate += 7;
      }
      return {
        year: 0,
        month: 0,
        weekOfMonth: 0,
      };
    }
  }
};

export default getWeekOfMonth;
