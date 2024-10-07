import getWeekOfMonth from "./getWeekOfMonth";
import { WeekOfMonth } from "./type";

const getNextWeekOfMonth = (
  year: number,
  month: number,
  weekOfMonth: number
): WeekOfMonth => {
  const theseMonthLastDay = new Date(year, month, 0).getDate();
  const weekdayTheseMonthLastDay = new Date(year, month, 0).getDay();
  const { weekOfMonth: lastWeekOfTheseMonth } = getWeekOfMonth(
    new Date(year, month, 0)
  );
  const totalWeeksInTheseMonth =
    lastWeekOfTheseMonth === 5 || lastWeekOfTheseMonth === 4
      ? lastWeekOfTheseMonth
      : getWeekOfMonth(
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
      weekOfMonth: 1,
    };
  } else {
    return {
      year: year,
      month: month,
      weekOfMonth: weekOfMonth + 1,
    };
  }
};
export default getNextWeekOfMonth;
