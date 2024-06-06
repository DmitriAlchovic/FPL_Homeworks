const currentDate = document.querySelector(".current-date"),
    days = document.querySelector(".days")

let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()
const month = ["January", "February", "March","April","May", "June", "July", "August", "September", 'October', "November", "December"]
const renderCalendar = () => {
    let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayOfLastMonth = new Date(currentYear, currentMonth , 0).getDate(),
    lastDay_OfMonth = new Date(currentYear, currentMonth , lastDayOfMonth).getDay(),
    firstDayOfMonth = new Date(currentYear, currentMonth , 1).getDay()
    let lists = ""
    for (let i = firstDayOfMonth; i > 0; i--){
        lists += `<li class="inactive">${lastDayOfLastMonth-i+1}</li>`
    }
    for (let i = 1; i <= lastDayOfMonth; i++){
        let isDay = i ===date.getDate() && currentMonth == new Date().getMonth() && currentYear === new Date().getFullYear() ? "active":""
        lists += `<li class="${isDay}">${i}</li>`
    }
    for (let i = lastDay_OfMonth ; i < 6; i++){
        lists += `<li class="inactive">${i - lastDay_OfMonth + 1}</li>`
    }
    currentDate.innerHTML = `${month[currentMonth]} ${currentYear}`
    days.innerHTML = lists
}
renderCalendar()

function next() {
    currentYear = currentMonth === 11 ?
        currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    renderCalendar(currentMonth, currentYear);
}
 
// Function to navigate to the previous month
function previous() {
    currentYear = currentMonth === 0 ?
        currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ?
        11 : currentMonth - 1;
    renderCalendar(currentMonth, currentYear);
}