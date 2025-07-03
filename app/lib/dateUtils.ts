// lib/dateUtils.ts
export function getLastSaturdaysOfQuarters(year: number): Date[] {
  const months = [2, 5, 8, 11];
  return months.map((month) => {
    const lastDay = new Date(year, month + 1, 0);
    let date = lastDay.getDate();
    while (new Date(year, month, date).getDay() !== 6) {
      date--;
    }
    return new Date(year, month, date, 23, 59); // Set time to end of day
  });
}

export function getNextQuarterSaturday(): Date | null {
  const today = new Date();
  const year = today.getFullYear();
  const saturdays = getLastSaturdaysOfQuarters(year);

  return saturdays.find((date) => date > today) || null;
}
