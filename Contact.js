window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    // Apply active class based on current page (if using multiple files)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

    // Also update active on click (so hover doesn't matter)
    links.forEach(link => {
      link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active")); // remove old
        this.classList.add("active"); // add to clicked one
      });
    });
  });
