
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery .item');
  items.forEach(item => {
    if (category === 'all') {
      item.classList.remove('hide');
    } else {
      item.classList.toggle('hide', !item.classList.contains(category));
    }
  });
}

