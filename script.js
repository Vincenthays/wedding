const params = Object.fromEntries(new URLSearchParams(window.location.search));

document.addEventListener('alpine:init', () => {
    Alpine.store('params', params);
    Alpine.store('wedding', {
        date: new Date('june 11, 2026 15:00:00').getTime(),
        dateText: '11 juin 2026 • 15h00'
    });
});

