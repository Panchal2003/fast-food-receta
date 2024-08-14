const images = document.querySelectorAll('.goto-para');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const paraId = image.getAttribute('data-para-id');
    const paragraph = document.getElementById(paraId);
    paragraph.scrollIntoView({ behavior: 'mooth' });
  });
});