const parentContainer =  document.querySelector('.readMore_container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isExtendBtn = current.className.includes('extendBtn');

    if(!isExtendBtn) return;

    const currentText = event.target.parentNode.querySelector('.moreText');

    currentText.classList.toggle('moreText_show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";

})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
