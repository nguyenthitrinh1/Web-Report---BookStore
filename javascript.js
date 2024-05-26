/*click*/
function moveOver(a) {
    document.getElementById(a).style.backgroundColor = "red";
    document.getElementById(a).style.color = "white";
}
function moveOut(b) {
    document.getElementById(b).style.backgroundColor = null;
    document.getElementById(b).style.color = null;
}
/*crousel*/
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlide = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

showSlide(activeSlide);

prevBtn.addEventListener('click', () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    showSlide(activeSlide);
});

nextBtn.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    showSlide(activeSlide);
});
/*list-1*/
var currentIndex = 0;
var productListItems = document.querySelectorAll('.product-list-item');

function showItems() {
  for (var i = 0; i < productListItems.length; i++) {
    if (i >= currentIndex && i < currentIndex + 5) {
      productListItems[i].classList.add('show');
    } else {
      productListItems[i].classList.remove('show');
    }
  }
}

function previousProducts() {
  if (currentIndex > 0) {
    currentIndex--;
    showItems();
  }
}

function nextProducts() {
  if (currentIndex < productListItems.length - 5) {
    currentIndex++;
    showItems();
  }
}

showItems();
/*list-2*/
var currentIndex2 = 0;
var productListItems2 = document.querySelectorAll('.product-list-item-2');

function showItems2() {
  for (var i = 0; i < productListItems2.length; i++) {
    if (i >= currentIndex2 && i < currentIndex2 + 5) {
      productListItems2[i].classList.add('show-2');
    } else {
      productListItems2[i].classList.remove('show-2');
    }
  }
}

function previousProducts2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
    showItems2();
  }
}

function nextProducts2() {
  if (currentIndex2 < productListItems2.length - 5) {
    currentIndex2++;
    showItems2();
  }
}

showItems2();