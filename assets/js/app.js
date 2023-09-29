let currentIndex = 0;
let slides = document.querySelectorAll('.image');
let dotsContainer = document.querySelector('.slider-dots');
let dots = [];
let next=document.querySelector('.next-button');
let prev=document.querySelector('.prev-button');


next.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});


prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(-100%)';
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}





function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  dots.push(dot);
  dotsContainer.appendChild(dot);
});



updateSlider();

let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(()=>{
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  },6000);
}

startAutoplay();
