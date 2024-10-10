import getWeekOfMonth from "./getWeekOfMonth";

const getWeekDates = (
  year: number,
  month: number,
  weekOfMonth: number
): Date[] => {
  const days = [];

  let curDate = new Date();
  for (let i = 0; i < 5; i++) {
    curDate = new Date(year, month - 1, i === 0 ? 1 : i * 7);
    const {
      year: cYear,
      month: cMonth,
      weekOfMonth: cWeek,
    } = getWeekOfMonth(curDate);
    if (year === cYear && month === cMonth && weekOfMonth === cWeek) break;
  }

  let curDay = curDate?.getDay();
  if (curDay === 0) curDay = 7;
  const startDate = new Date(year, month - 1, curDate.getDate() - curDay + 1);
  for (let i = 0; i < 7; i++) {
    days.push(
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + i
      )
    );
  }
  return days;
};
export default getWeekDates;
