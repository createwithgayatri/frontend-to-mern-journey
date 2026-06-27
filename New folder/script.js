document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const navItems = document.querySelectorAll("#sidebar .nav-item");

    // Dynamic Sidebar Toggling based on viewport
    menuBtn.addEventListener("click", () => {
        if (window.innerWidth > 768) {
            // Collapse text sidebar into a narrow icon-only column on Desktop
            sidebar.classList.toggle("collapsed");
        } else {
            // Slide sidebar drawer completely visible/hidden on mobile
            sidebar.classList.toggle("active");
        }
    });

    // Navigation Active Link Item Handler
    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            // Prevent basic redirection mock-up behavior
            e.preventDefault();
            
            document.querySelector("#sidebar .nav-item.active").classList.remove("active");
            this.classList.add("active");

            // Auto dismiss panel selection overlay on responsive screen dimensions
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }
        });
    });
});