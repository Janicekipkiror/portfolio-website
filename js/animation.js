document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

});
