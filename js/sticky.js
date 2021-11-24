window.onscroll = function() {
  addSticky()
};

var header = document.getElementById("sticky");
var sticky = header.offsetTop;

function addSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}