export type WeekDateItem = {
  day: string;
  dayNumber: number;
  date: Date;
};

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function getWeekDates(currentDate = new Date()): WeekDateItem[] {
  const weekDates: WeekDateItem[] = [];

  const currentDayIndex = currentDate.getDay();
  const mondayOffset = currentDayIndex === 0 ? -6 : 1 - currentDayIndex;

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() + mondayOffset);
  startOfWeek.setHours(0, 0, 0, 0);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    weekDates.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: date.getDate(),
      date,
    });
  }

  return weekDates;
}
