import "./Calendar.css";

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0 = January, 10 = November

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // getDay() starts on Sunday (0); this shifts it so Monday is the first column
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const monthName = today.toLocaleString("en-GB", { month: "long" });

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null); // blank cells before the 1st
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <section className="calendar">
      <h2>{monthName} {year}</h2>
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