let currentDate = document.querySelector(".current-date");
let daysTag = document.querySelector(".days");
let prevNextIcBtn = document.querySelectorAll(".icons span");


let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "Octuber", "November", "December"];

function renderCalander() {
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(),
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;

  }

  for (let i = 1; i <= lastDateofMonth; i++) {

    let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
      && currentYear === new Date().getFullYear() ? "active" : "";

    liTag += `<li class="${isToday}">${i}</li>`;
  }


  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;

  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

renderCalander();

prevNextIcBtn.forEach(icon => {
  // adding click lister both buttons
  icon.addEventListener("click", () => {
    // if clicked on prev then decrement 1 otherwise increment 1
    currentMonth = icon.id === "next" ? currentMonth + 1 : currentMonth - 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    // passing new date as date value 
    } else {
      date = new Date();
    }
    renderCalander();
  });
});

