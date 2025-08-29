const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Nombre de los meses
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  monthYear.textContent = `${months[month]} ${year}`;

  // Primer día del mes
  const firstDay = new Date(year, month, 1).getDay();
  // Último día del mes
  const lastDate = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = "";

  // Rellenar días vacíos antes del primer día
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("span");
    daysContainer.appendChild(empty);
  }

  // Rellenar días del mes
  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("span");
    day.textContent = i;

    // Día actual
    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    // Selección
    day.addEventListener("click", () => {
      document.querySelectorAll(".days span").forEach(d => d.classList.remove("selected"));
      day.classList.add("selected");
      console.log(`Fecha seleccionada: ${i}/${month+1}/${year}`);
    });

    daysContainer.appendChild(day);
  }
}

// Botones para cambiar mes
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Inicializar
renderCalendar(currentDate);
