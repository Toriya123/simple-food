

$(function () {
  var mixer = mixitup('.category')
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.style.padding = '30px 0'; 
  } else {
    header.style.padding = '60px 0'; 
  }
});