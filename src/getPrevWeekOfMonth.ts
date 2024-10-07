import getWeekOfMonth from "./getWeekOfMonth";
import { WeekOfMonth } from "./type";

const getPrevWeekOfMonth = (
  year: number,
  month: number,
  weekOfMonth: number
): WeekOfMonth => {
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
  const weekdayPrevMonthLastDay = new Date(year, month - 1, 0).getDay();
  const { weekOfMonth: prevMonthLastWeek } = getWeekOfMonth(
    new Date(year, month - 1, 0)
  );
  const totalWeeksInPrevMonth =
    prevMonthLastWeek === 5 || prevMonthLastWeek === 4
      ? prevMonthLastWeek
      : getWeekOfMonth(
          new Date(year, month - 2, prevMonthLastDay - weekdayPrevMonthLastDay)
        ).weekOfMonth;

  if (weekOfMonth === 1) {
    return {
      year: month - 1 <= 0 ? year - 1 : year,
      month: month - 1 <= 0 ? 12 : month - 1,
      weekOfMonth: totalWeeksInPrevMonth,
    };
  } else {
    return {
      year: year,
      month: month,
      weekOfMonth: weekOfMonth - 1,
    };
  }
};
export default getPrevWeekOfMonth;
