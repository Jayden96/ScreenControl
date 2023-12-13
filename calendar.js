document.addEventListener('DOMContentLoaded', function() {
    const calendarGrid = document.getElementById('calendar-grid');

    for (let day = 1; day <= 30; day++) {
        const cell = document.createElement('div');
        cell.classList.add('calendar-cell');
        cell.textContent = `Day ${day}`;
        calendarGrid.appendChild(cell);
    }
});
