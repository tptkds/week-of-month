interface WeekOfMonth {
    year: number;
    month: number;
    weekOfMonth: number;
}

declare const getWeekOfMonth: (date: Date) => WeekOfMonth;

declare const getNextWeekOfMonth: (year: number, month: number, weekOfMonth: number) => WeekOfMonth;

declare const getPrevWeekOfMonth: (year: number, month: number, weekOfMonth: number) => WeekOfMonth;

export { type WeekOfMonth, getNextWeekOfMonth, getPrevWeekOfMonth, getWeekOfMonth };
