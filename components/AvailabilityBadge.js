"use client";

import { useEffect, useState } from "react";

function isWithinSupportHours() {
  const accraHour = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Africa/Accra",
    }).format(new Date())
  );

  return accraHour >= 8 && accraHour < 20;
}

export default function AvailabilityBadge() {
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    const update = () => setIsAvailable(isWithinSupportHours());
    update();
    const interval = setInterval(update, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isAvailable === null) {
    return <span className="h-5" />;
  }

  return (
    <span className="flex items-center gap-2">
      <span
        className={`w-2 h-2 rounded-full ${
          isAvailable ? "bg-green-500 animate-pulse" : "bg-gray-400"
        }`}
      />
      {isAvailable
        ? "Available Now"
        : "We're currently offline. Leave a message and we'll reply at 8:00 AM."}
    </span>
  );
}
