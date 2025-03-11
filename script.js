// import { shop1, shop2, shop3, shop4 } from "./shop-data.js";
// const shops = [shop1, shop2, shop3, shop4];


const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');
let currentIndex = 0;
const slides = document.querySelectorAll('.my-swiper-slide');

hideAllSlides();
showCurrentSlide();

nextButton.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showCurrentSlide();
});

prevButton.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showCurrentSlide();

});


function showCurrentSlide() {
  hideAllSlides();
  slides[currentIndex].style.display = 'grid';
}

function hideAllSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
}



// const shopsContainer = document.querySelector('.shops');  

// shops.forEach(shop => {
  
//   const shopContainer = document.createElement('div');
//   shopContainer.classList.add('shop-container');
  
//   // Shop image
//   const shopImg = document.createElement('img');
//   shopImg.classList.add('shop-img');
//   // shopImg.src = shop.imgSrc;
//   shopImg.src = "assets/shops-images/Anker.jpg";
//   shopContainer.appendChild(shopImg);
  
//   // Logo
//   shop.logos.forEach(logo => {
//     const logoImg = document.createElement('img');
//     logoImg.classList.add('logo-site');
//     // logoImg.src = logo;
//     logoImg.src = "assets/logos/atone.svg";
//     shopContainer.appendChild(logoImg);
//   });

//   // Name
//   const shopName = document.createElement('p');
//   shopName.classList.add('shop-name', 'single-line');
//   shopName.textContent = shop.name;
//   shopContainer.appendChild(shopName);
  
//   // Promotion
//   const shopCampaign = document.createElement('p');
//   shopCampaign.classList.add('shop-campaign');
//   // shopCampaign.textContent = shop.campaign;
//   shopCampaign.textContent = "キャンペーン中";
//   shopContainer.appendChild(shopCampaign);
  
  
//   shopsContainer.appendChild(shopContainer);
// });
