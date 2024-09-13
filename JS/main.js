
//Menu/toggle animasjon
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
 

// Logo slider
const scrollers = document.querySelectorAll('.scroller')

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true)
    
    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContent = Array.from(scrollerInner.children)
    
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}

//CONTACT US
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//TESTIMONIALS
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelector('.testimonials');
  const totalTestimonials = testimonials.children.length;
  let index = 0;

  document.getElementById('next').addEventListener('click', function() {
      index = (index + 1) % totalTestimonials;
      updateCarousel();
  });

  document.getElementById('prev').addEventListener('click', function() {
      index = (index - 1 + totalTestimonials) % totalTestimonials;
      updateCarousel();
  });

  function updateCarousel() {
      testimonials.style.transform = `translateX(-${index * 100}%)`;
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('background-video');
  video.play().catch(error => {
    console.error('Error attempting to play', error);
    // Handling autoplay blocking
    video.muted = true;
    video.play();
  });
});



