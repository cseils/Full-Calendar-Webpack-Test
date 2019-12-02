import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import 'normalize.css'
import './styles/index.scss';

document.addEventListener("DOMContentLoaded", () => {
    renderCalendar();
});

function renderCalendar() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ]
    });

    calendar.render();
}
