  document.querySelectorAll(".star-rating-static").forEach(container => {
    const rating = parseFloat(container.dataset.rating);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.textContent = i <= rating ? "★" : "☆";
      container.appendChild(star);
    }
  });