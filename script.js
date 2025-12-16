const params = Object.fromEntries(new URLSearchParams(window.location.search));
const date = new Date(parseInt(1000*params.t, 10));

document.addEventListener('alpine:init', () => {
    Alpine.store('params', { ...params, date });
});
