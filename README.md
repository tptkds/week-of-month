# 📅 Week of the Month

Week of the Month is a package for calculating the week of the month for a specific date based on the ISO 8601 standard.<br/>

With this package, you can:

- **Easily calculate the week of the month for a specific date.**
- **Easily retrieve the previous or next week of the month for a specific week.**
- **Easily get the dates for a specific week.**

## Install

```
npm install week-of-month
```

## Usage Examples

```javascript
import {
  getWeekOfMonth,
  getPrevWeekOfMonth,
  getNextWeekOfMonth,
} from "week-of-month";

// Calculate the current week of a specific date (December 31, 2024)
const currentWeek = getWeekOfMonth(new Date(2024, 11, 31));
console.log(currentWeek); // Output: { year: 2025, month: 1, weekOfMonth: 1 }

// Get the previous week based on the current week
const prevWeek = getPrevWeekOfMonth(
  currentWeek.year,
  currentWeek.month,
  currentWeek.weekOfMonth
);
console.log(prevWeek); // Output: { year: 2024, month: 12, weekOfMonth: 4 }

// Get the next week based on the current week
const nextWeek = getNextWeekOfMonth(
  currentWeek.year,
  currentWeek.month,
  currentWeek.weekOfMonth
);
console.log(nextWeek); // Output: { year: 2025, month: 1, weekOfMonth: 2 }

// Get the dates for the 2nd week of October 2024
const dates = getWeekDates(2024, 10, 2);
console.log(dates);
// Output: [
//   2024-10-07T00:00:00.000Z,
//   2024-10-08T00:00:00.000Z,
//   2024-10-09T00:00:00.000Z,
//   2024-10-10T00:00:00.000Z,
//   2024-10-11T00:00:00.000Z,
//   2024-10-12T00:00:00.000Z,
//   2024-10-13T00:00:00.000Z
// ]
```
