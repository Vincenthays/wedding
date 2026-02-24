// Decode data from URL parameter
const params = JSON.parse(atob(window.location.search.substring(1)));

// Initialize Alpine.js store with wedding data
document.addEventListener('alpine:init', () => {
    Alpine.store('params', { ...params, date: new Date(params.t) });
});
