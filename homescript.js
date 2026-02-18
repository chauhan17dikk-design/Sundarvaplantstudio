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


  
  const headings = document.querySelectorAll(".product-text h3");

  headings.forEach(h3 => {
    h3.addEventListener("mouseenter", () => {
      h3.style.transform = "scale(1.2)";
      h3.style.color = "#2e7d32";
      h3.style.transition = "transform 0.3s ease, color 0.3s ease";
    });

    h3.addEventListener("mouseleave", () => {
      h3.style.transform = "scale(1)";
      h3.style.color = "#1a3e2d";
    });
  });

