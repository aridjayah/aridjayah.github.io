document.addEventListener("DOMContentLoaded", function () {
    var key = "views_{{ page.url }}";
    var views = localStorage.getItem(key);
    if (!views) {
        views = 0;
    }
    views++;
    localStorage.setItem(key, views);
});