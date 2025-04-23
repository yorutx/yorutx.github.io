  const searchInput = document.getElementById('searchInput');
  const animeCards = document.querySelectorAll('.anime-card');
  const noResultMessage = document.getElementById('noResultMessage');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let matchCount = 0;

    animeCards.forEach(card => {
      const title = card.textContent.toLowerCase();
      const isMatch = title.includes(query);
      card.style.display = isMatch ? '' : 'none';
      if (isMatch) matchCount++;
    });

    noResultMessage.style.display = query && matchCount === 0 ? 'block' : 'none';

    // Si l'utilisateur vide le champ, tout revient
    if (query === '') {
      animeCards.forEach(card => card.style.display = '');
      noResultMessage.style.display = 'none';
    }
  });
