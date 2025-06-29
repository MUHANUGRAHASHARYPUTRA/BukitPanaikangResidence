// script.js

// Preloader hilang setelah load
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = 0;
      preloader.style.visibility = "hidden";
      preloader.style.transition = "0.5s";
    }
  });
  
  // Swiper slider galeri
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  