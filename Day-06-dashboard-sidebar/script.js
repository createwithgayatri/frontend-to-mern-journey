document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const sidebarCollapseBtn = document.getElementById("sidebarCollapse");
    const sidebarCloseBtn = document.getElementById("sidebarCollapseClose");
    const navLinks = document.querySelectorAll("#sidebar .nav-link");

    // Toggle Sidebar for Desktop (Collapse) & Mobile (Slide In/Out)
    sidebarCollapseBtn.addEventListener("click", function () {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle("collapsed");
        } else {
            sidebar.classList.toggle("active");
        }
    });

    // Close Mobile Sidebar
    sidebarCloseBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // Handle Active Menu Item Highlight
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from previous item
            document.querySelector("#sidebar li.active").classList.remove("active");
            // Add active class to parent 'li' of clicked link
            this.parentElement.classList.add("active");
            
            // Auto-close sidebar on mobile after clicking an option
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
            }
        });
    });
});