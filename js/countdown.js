// Set the date we're counting down to
const countDownDate = new Date("Dec 17, 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days-concert").innerHTML = days;
  document.getElementById("hours-concert").innerHTML = hours;
  document.getElementById("minutes-concert").innerHTML = minutes;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("final-concert").innerHTML = "Concertul a inceput!";
  }
}, 1000);