const offset = new Date().getTimezoneOffset();

function formatGCalendarDate(date) {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
}

function getStartDate(date, time) {
    const startDate = new Date(`${date}-${time}`);
    startDate.setMinutes(startDate.getMinutes() + offset);
    return startDate;
}

function getEndDate(date, time) {
    const endDate = new Date(`${date}-${time}`);
    endDate.setMinutes(endDate.getMinutes() + offset + 120);
    return endDate;
}

function createGCalLink(event) {
    return `http://www.google.com/calendar/render?action=TEMPLATE&text=${event.eventName}&dates=${formatGCalendarDate(getStartDate(event.date, event.time))}/${formatGCalendarDate(getEndDate(event.date, event.time))}&details=${event.groupName}&location=${event.venue} ${event.location}&trp=false&sprop=&sprop=name:`;
}

export default createGCalLink;