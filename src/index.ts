import { WeekOfMonth } from "./type";
import { default as getWeekOfMonth } from "./getWeekOfMonth";
import { default as getNextWeekOfMonth } from "./getNextWeekOfMonth";
import { default as getPrevWeekOfMonth } from "./getPrevWeekOfMonth";

export { getWeekOfMonth, getNextWeekOfMonth, getPrevWeekOfMonth };
export type { WeekOfMonth };

const weekOfMonth = getWeekOfMonth(new Date());

console.log(weekOfMonth);
console.log(
  getNextWeekOfMonth(
    weekOfMonth.year,
    weekOfMonth.month,
    weekOfMonth.weekOfMonth
  )
);
console.log(
  getPrevWeekOfMonth(
    weekOfMonth.year,
    weekOfMonth.month,
    weekOfMonth.weekOfMonth
  )
);
