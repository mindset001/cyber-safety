'use client';

import { getLastSaturdaysOfQuarters, getNextQuarterSaturday } from '@/app/lib/dateUtils';
import React, { useEffect, useState } from 'react';

export default function QuarterSaturdaysPage() {
  const year = new Date().getFullYear();
  const lastSaturdays = getLastSaturdaysOfQuarters(year);
  const targetDate = getNextQuarterSaturday();

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className=" py-6 bg-white text-black">
      {/* <h1 className="text-2xl font-bold mb-4">Last Saturdays of Each Quarter – {year}</h1> */}

      {/* <ul className="mb-6 list-disc pl-5">
        {lastSaturdays.map((date, index) => (
          <li key={index}>
            Q{index + 1}: {date.toDateString()}
          </li>
        ))}
      </ul> */}

      {targetDate ? (
        <div className="p-4 bg-[#0a486b] border border-yellow-400 rounded-md text-white">
          <p className="text-lg font-medium">
            🕒 Next Quarter's Saturday: <strong>{targetDate.toDateString()}</strong>
          </p>
          <p className="text-sm mt-1">
            ⏳ {timeLeft.days} day(s), {timeLeft.hours} hour(s), {timeLeft.minutes} minute(s) left
          </p>
        </div>
      ) : (
        <p>✅ All last Saturdays for this year have passed.</p>
      )}
    </div>
  );
}
