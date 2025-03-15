document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20,
          behavior: "smooth"
        });
      }
    });
  });

  // Project hover effect with animation
  document.querySelectorAll(".project").forEach(project => {
    project.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
    
    project.addEventListener("mouseover", () => {
      project.style.transform = "scale(1.05)";
      project.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });
    
    project.addEventListener("mouseout", () => {
      project.style.transform = "scale(1)";
      project.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.1)";
    });
  });

  // Dynamic year update in footer
  const footer = document.querySelector("footer p");
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Saad Bin Yunus. All rights reserved.`;
  }
});
