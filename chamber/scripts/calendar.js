const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let currentDate = new Date();
const events = {
    "2025-09-10": "Harvest Festival",
    "2025-07-18": "Carnival",
    "2025-03-05": "Meet & Greet",
    "2025-03-12": "Meet & Greet",
    "2025-03-19": "Meet & Greet",
    "2025-03-26": "Meet & Greet",
    "2025-04-15": "Opening of Zee's Bar and Grill",
    "2025-05-07": "Farmer's Market",
    "2025-05-21": "Farmer's Market",
    "2025-07-04": "Firework Show at the Lake",
};

function renderCalendar(date) {
    calendar.innerHTML = "";
    const year = date.getFullYear();
    const month = date.getMonth();
    monthYear.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day");
        calendar.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        const dateKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        dayElement.classList.add("day");
        dayElement.textContent = day;

        if (events[dateKey]) {
            dayElement.classList.add("event-day");
            dayElement.setAttribute("data-event", events[dateKey]);
        }

        calendar.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
