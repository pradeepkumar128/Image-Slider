const sliderImg = document.querySelector("#sliderImg");

const images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"];

let imgIndex = 0;
const sliderInterval = setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  sliderImg.setAttribute("src", imgUrl);
  imgIndex++;
}, 1000);


