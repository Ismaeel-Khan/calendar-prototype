import { useState } from "react";
import "./Calendar.css";

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); 

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
    const monthName = new Date(year, month).toLocaleString("en-GB", { month: "long" });

      function changeMonth(step) {
    const next = new Date(year, month + step, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
  }

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null); 
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="calendar">
            <div className="calendar-header">
        <button onClick={() => changeMonth(-1)} aria-label="Previous month">‹</button>
        <h2>{monthName} {year}</h2>
        <button onClick={() => changeMonth(1)} aria-label="Next month">›</button>
      </div>
      <div className="calendar-grid">
        {DAY_NAMES.map((name) => (
          <div key={name} className="day-name">{name}</div>
        ))}
        {cells.map((day, i) =>
          day === null
            ? <div key={`empty-${i}`} />
            : <button key={day} className="day">{day}</button>
        )}
      </div>
    </section>
  );
}