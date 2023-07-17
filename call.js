document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.querySelector("#phone");
  form.addEventListener("submit", process);

  function process(event) {
    event.preventDefault();
    const phoneNumber = phoneInput.value;
    alert("Phone number in E.164 format: <strong>" + phoneNumber + "</strong>");
  }
});

