document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('searchInput');
    let talksData = [];

    // Define the full schedule structure including breaks
    const scheduleLayout = [
        { type: 'talk', index: 0 },
        { type: 'break', duration: 10 },
        { type: 'talk', index: 1 },
        { type: 'break', duration: 10 },
        { type: 'talk', index: 2 },
        { type: 'break', title: 'Lunch Break', duration: 60 },
        { type: 'talk', index: 3 },
        { type: 'break', duration: 10 },
        { type: 'talk', index: 4 },
        { type: 'break', duration: 10 },
        { type: 'talk', index: 5 }
    ];

    // Fetch talk data
    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            talksData = data;
            renderSchedule(talksData);
        });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const scheduleItems = document.querySelectorAll('.schedule-item');

        scheduleItems.forEach(item => {
            if (item.classList.contains('break')) {
                return; // Always show breaks
            }
            const categories = item.dataset.categories.toLowerCase();
            const speakers = item.dataset.speakers.toLowerCase();
            if (categories.includes(searchTerm) || speakers.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });

    function renderSchedule(talks) {
        scheduleContainer.innerHTML = ''; // Clear existing content
        let talkIndex = 0;

        scheduleLayout.forEach(item => {
            if (item.type === 'talk') {
                const talk = talks[talkIndex++];
                if (talk) {
                    const talkElement = document.createElement('div');
                    talkElement.className = 'schedule-item';
                    talkElement.dataset.categories = talk.categories.join(', ');
                    talkElement.dataset.speakers = talk.speakers.join(', ');

                    talkElement.innerHTML = `
                        <div class="schedule-item-time">${talk.time}</div>
                        <h2>${talk.title}</h2>
                        <div class="schedule-item-speakers">By: ${talk.speakers.join(', ')}</div>
                        <p>${talk.description}</p>
                        <div class="schedule-item-categories">
                            ${talk.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                        </div>
                    `;
                    scheduleContainer.appendChild(talkElement);
                }
            } else { // It's a break
                const breakElement = document.createElement('div');
                breakElement.className = 'schedule-item break';
                const breakTitle = item.title || `${item.duration}-Minute Break`;
                breakElement.innerHTML = `<h2>${breakTitle}</h2>`;
                scheduleContainer.appendChild(breakElement);
            }
        });
    }
});
