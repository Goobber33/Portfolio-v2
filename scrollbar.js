// Animate the scrollbar on page load
window.addEventListener('load', function() {
    var scrollbar = document.querySelector('::-webkit-scrollbar-thumb');
    var initialWidth = parseInt(window.getComputedStyle(scrollbar).getPropertyValue('width'));
    animateScrollbar(scrollbar, initialWidth, 100, 1000);
  });
  
  // Animate the scrollbar on page scroll
  window.addEventListener('scroll', function() {
    var scrollbar = document.querySelector('::-webkit-scrollbar-thumb');
    var initialWidth = parseInt(window.getComputedStyle(scrollbar).getPropertyValue('width'));
    var scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    animateScrollbar(scrollbar, initialWidth, scrolled * 100, 500);
  });
  
  // Animate the scrollbar width using CSS transitions
  function animateScrollbar(scrollbar, fromWidth, toWidth, duration) {
    scrollbar.style.width = toWidth + '%';
    scrollbar.style.transition = 'width ' + duration + 'ms ease-out';
    setTimeout(function() {
      scrollbar.style.width = fromWidth + '%';
      scrollbar.style.transition = 'width ' + duration + 'ms ease-in';
    }, duration);
  }
  