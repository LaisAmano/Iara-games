document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnHamburger");
    const sidebar = document.getElementById("sidebar");

    btn.addEventListener("click", function () {
        const isVisible = window.getComputedStyle(sidebar).display !== "none";
        sidebar.style.display = isVisible ? "none" : "flex";
    });
});