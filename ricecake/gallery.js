(() => {
  const photos = Array.from(document.querySelectorAll('.photo'));
  const viewer = document.querySelector('dialog');
  const image = document.querySelector('#large-photo');
  const count = document.querySelector('#photo-count');
  let current = 0;
  function show(index) {
    current = (index + photos.length) % photos.length;
    image.src = photos[current].href;
    image.alt = photos[current].querySelector('img').alt;
    count.textContent = `${current + 1} / ${photos.length}`;
  }
  photos.forEach((photo, index) => {
    photo.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (typeof viewer.showModal !== 'function') return;
      event.preventDefault();
      show(index);
      viewer.showModal();
    });
  });
  document.querySelector('#close').addEventListener('click', () => viewer.close());
  document.querySelector('#previous').addEventListener('click', () => show(current - 1));
  document.querySelector('#next').addEventListener('click', () => show(current + 1));
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
})();
