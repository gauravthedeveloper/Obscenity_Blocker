fetch("example.json")
  .then((response) => response.text())
  .then((text) => {
    document.getElementById("content").textContent = text;
  })
  .catch((error) => console.log(error));
