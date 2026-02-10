const grid = document.getElementById("grid");
const size = 16;

for (let i = 0; i < size * size; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");

  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = "black";
  });

  grid.appendChild(pixel);
}
