document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#login");
  const phoneInput = document.querySelector("#phone");
  const info = document.querySelector(".alert");

  form.addEventListener("submit", process);

  function process(event) {
    event.preventDefault();
    const phoneNumber = phoneInput.value;
    info.classList.remove("hidden");
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
  }
});
