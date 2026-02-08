document.addEventListener("DOMContentLoaded", () => {

  
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });


  const skills = document.querySelectorAll("#skills li");

  skills.forEach(skill => {
    skill.addEventListener("mouseenter", () => {
      skill.style.backgroundColor = "#2563eb";
      skill.style.color = "#ffffff";
    });

    skill.addEventListener("mouseleave", () => {
      skill.style.backgroundColor = "#e5e7eb";
      skill.style.color = "#000000";
    });
  });

});

