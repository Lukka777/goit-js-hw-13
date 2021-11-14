
export const fetchImages = async (imgName, imgPage)=>{
  const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imgName}&page=${imgPage}&per_page=12&key=24332091-bbc201ebf865e6ba9d783395a`);
  return await response.json();
};
