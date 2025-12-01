// ShoreSquad JS - Interactivity & Performance

document.addEventListener('DOMContentLoaded', () => {
    // Interactive Map Placeholder
    const map = document.getElementById('map');
    map.innerHTML = '<p>Map loading... (interactive beach cleanup locations coming soon!)</p>';

    // Mock 4-day weather forecast data
    const weather = document.getElementById('weather');
    const mockForecast = [
        { day: 'Mon', temp: 31, rain: '10%', emoji: '☀️' },
        { day: 'Tue', temp: 29, rain: '60%', emoji: '🌧️' },
        { day: 'Wed', temp: 30, rain: '20%', emoji: '⛅' },
        { day: 'Thu', temp: 32, rain: '0%', emoji: '☀️' }
    ];
    let forecastHTML = '<div style="display:flex;gap:1rem;justify-content:center;">';
    mockForecast.forEach(day => {
        forecastHTML += `
            <div style="background:var(--secondary);color:var(--text);border-radius:8px;padding:1rem;min-width:90px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
                <div style="font-size:2rem;">${day.emoji}</div>
                <div style="font-weight:bold;">${day.day}</div>
                <div>${day.temp}°C</div>
                <div>Rain: ${day.rain}</div>
            </div>
        `;
    });
    forecastHTML += '</div>';
    weather.innerHTML = `
        <h3 style="margin-top:0;margin-bottom:0.5rem;">4-Day Beach Forecast</h3>
        ${forecastHTML}
        <div style="margin-top:0.5rem;font-size:0.95rem;color:var(--highlight);">Mock data for demo 🌊</div>
    `;

    // Crew List Placeholder
    const crewList = document.getElementById('crew-list');
    crewList.innerHTML = '<p>Invite friends and build your crew here!</p>';

    // Accessibility: Focus management for sections
    document.querySelectorAll('section').forEach(section => {
        section.setAttribute('tabindex', '0');
    });
});
