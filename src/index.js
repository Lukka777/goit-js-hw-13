import { fetchImages } from './js/apiService';
import { createImgCard } from './js/imgCard';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('#load-more');

let currentPage = 1;
let photoNameInput = '';

searchForm.addEventListener('input', async event => {
  loadMore.style = 'display:none';
  gallery.innerHTML = '';
  photoNameInput = event.target.value;
  const data = await fetchImages(photoNameInput, currentPage);
  data.hits.forEach(photo => {
    const imgCard = createImgCard(photo);
    gallery.append(imgCard);
  });
  if (data.hits.length) {
    loadMore.style = 'display:inline-block';
  }
});

loadMore.addEventListener('click', async event => {
  const data = await fetchImages(photoNameInput, ++currentPage);
  data.hits.forEach((photo, index) => {
    const imgCard = createImgCard(photo);
    gallery.append(imgCard);
    if (index === 0) {
      imgCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
