var topDOM = document.getElementById("top");
topDOM.addEventListener('click', scrollUP );
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topDOM.style.display = "block";
  } else {
    topDOM.style.display = "none";
  }
}
function scrollUP() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }