window.addEventListener("load", () => {
  document.querySelectorAll(".track").forEach((track) => {
    const container = track.parentElement;
    const originalCards = [...track.children];
    
    // =============== depth ===============
    const depth = 10;

    for (let i = 1; i < depth; i++) {
      originalCards.forEach((card) => {
        track.appendChild(card.cloneNode(true));
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});