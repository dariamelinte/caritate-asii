function submitForm() {
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;

  var link = "mailto:dariamelinte2003@gmail.com"
  + `?cc=${email}`
  + "&subject=" + encodeURIComponent(`Message from ${lastName} ${firstName}`)
  + "&body=" + encodeURIComponent(subject);

  window.location.href = link;
}