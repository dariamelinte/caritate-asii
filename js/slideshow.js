let slideIndex = 1;

const images = [
  {
    url: '../assets/images/slide/slide-1.jpg',
    description: 'Description 1',
  },
  {
    url: '../assets/images/slide/slide-2.jpg',
    description: 'Description 2',
  },
  {
    url: '../assets/images/slide/slide-3.jpg',
    description: 'Description 3',
  },
  {
    url: '../assets/images/slide/slide-4.jpg',
    description: 'Description 4',
  },
];

const slideshow = document.getElementById('slideshow');

slideshow.innerHTML = images.map((image, index) => `
  <div class="mySlides fade">
    <div class="numbertext">${index + 1} / ${images.length}</div>
    <img src="${image.url}" style="width:100%">
    <div class="text">${image.description}</div>
  </div>
`).join("") + `
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
`

const dots = document.getElementById('dots');

dots.innerHTML = images.map((_, index) => `
  <span class="dot" onclick="currentSlide(${index + 1})"></span>
`).join("");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}