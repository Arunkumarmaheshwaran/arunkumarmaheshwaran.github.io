
document.addEventListener('DOMContentLoaded', () => {
  // Select all entry sections targeted for reveal animations
  const elementsToReveal = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    elementsToReveal.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      // Add the active class if element sits above the layout threshold
      if (elementTop < triggerBottom) {
        element.classList.add('active');
      }
    });
  };

  // Run immediately on target initialization to discover elements on initial view
  revealOnScroll();

  // Attach continuous stream handling
  window.addEventListener('scroll', revealOnScroll);
});
