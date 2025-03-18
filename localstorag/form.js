document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("storedName").textContent =
      "Nome salvato: " + savedName;
  }
});

function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
  document.getElementById("storedName").textContent = "Nome salvato: " + name;
}

function removeName() {
  localStorage.removeItem("username");
  document.getElementById("storedName").textContent = "";
}
