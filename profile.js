document.addEventListener("DOMContentLoaded", pageLoad());

function pageLoad(){
    setDate();
    setUTC();
}

function setDate(){
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date();
    const weekDay = weekDays[today.getUTCDay()];
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = weekDay;
}

function setUTC(){
    const utcTimestamp = new Date().getTime();
    document.querySelector("[data-testid='currentUTCTime']").textContent = utcTimestamp;
}