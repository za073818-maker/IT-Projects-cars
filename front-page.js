window.addEventListener("load", () => {
  document.querySelectorAll(".track").forEach((track) => {
    const container = track.parentElement;
    const originalCards = [...track.children];
    
  // number of times we repeat animition to not get to be awful
    const loop = 9;

    for (let i = 1; i < loop; i++) {
      originalCards.forEach((card) => {
        track.appendChild(card.cloneNode(true));
      });
    }
  });
});