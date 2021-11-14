import { createElemWithClasses } from './helpers';

export const createImgCard = ({
  downloads,
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
}) => {
  const liElem = createElemWithClasses('li', ['gallery-item']);
  const photoCard = createElemWithClasses('div', ['photo-card']);
  const imgElem = document.createElement('img');
  imgElem.src = webformatURL;

  const stats = createElemWithClasses('div', ['stats']);

  const statsItemLikes = createElemWithClasses('p', ['stats-item']);
  const materialIconsLikes = createElemWithClasses('i', ['material-icons']);
  materialIconsLikes.innerText = 'thumb_up';
  statsItemLikes.append(materialIconsLikes, likes);

  const statsItemViews = createElemWithClasses('p', ['stats-item']);
  const materialIconsViews = createElemWithClasses('i', ['material-icons']);
  materialIconsViews.innerText = 'visibility';
  statsItemViews.append(materialIconsViews, views);

  const statsItemComments = createElemWithClasses('p', ['stats-item']);
  const materialIconsComments = createElemWithClasses('i', ['material-icons']);
  materialIconsComments.innerText = 'comment';
  statsItemComments.append(materialIconsComments, comments);

  const statsItemDownloads = createElemWithClasses('p', ['stats-item']);
  const materialIconsDownloads = createElemWithClasses('i', ['material-icons']);
  materialIconsDownloads.innerText = 'cloud_download';
  statsItemDownloads.append(materialIconsDownloads, downloads);

  stats.append(statsItemLikes, statsItemViews, statsItemComments, statsItemDownloads);
  photoCard.append(imgElem, stats);
  liElem.append(photoCard);
  return liElem;
};


