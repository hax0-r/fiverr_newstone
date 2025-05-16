const lenis = new Lenis({
  autoRaf: true,
});

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer z-40 bg-[#3da1b9] h-10 fixed bottom-5 right-5 hover:bg-[#192531] transition-all duration-500 hidden text-white flex items-center justify-center rounded-lg "><i class="fa-solid fa-angle-up"></i>
</div>`

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.querySelector(".bottomToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 28,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

AOS.init({
  once: true,
  duration: 1000
});