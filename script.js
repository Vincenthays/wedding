const params = JSON.parse(atob(window.location.search.substring(1)));

document.addEventListener('alpine:init', () => {
    Alpine.store('params', { ...params, date: new Date(params.t) });
});
