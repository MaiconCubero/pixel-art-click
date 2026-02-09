// Elementos do DOM
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const gridSizeSelect = document.getElementById("gridSize");
const newGridBtn = document.getElementById("newGridBtn");
const resetBtn = document.getElementById("resetBtn");

// Estado do desenho
let isDrawing = false;
let currentColor = colorPicker.value;

// Atualizar cor quando o usuário escolher
colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

// Função para criar a grade
function criarGrid(tamanho = 32) {
  grid.innerHTML = ""; // Limpa a grade anterior
  
  // Configura o CSS grid
  grid.style.gridTemplateColumns = `repeat(${tamanho}, 15px)`;
  
  const totalPixels = tamanho * tamanho;
  
  for (let i = 0; i < totalPixels; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    
    // Eventos para clicar e arrastar
    pixel.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDrawing = true;
      pixel.style.backgroundColor = currentColor;
    });
    
    pixel.addEventListener("mouseenter", () => {
      if (isDrawing) {
        pixel.style.backgroundColor = currentColor;
      }
    });
    
    // Prevenir seleção de texto ao arrastar
    pixel.addEventListener("dragstart", (e) => e.preventDefault());
    
    grid.appendChild(pixel);
  }
}

// Parar de desenhar quando soltar o mouse (em qualquer lugar)
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Função para resetar a grade
function resetGrid() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

// Aplicar nova grade
newGridBtn.addEventListener("click", () => {
  const tamanho = parseInt(gridSizeSelect.value);
  criarGrid(tamanho);
});

// Resetar
resetBtn.addEventListener("click", resetGrid);

// Inicializar com grade padrão (32x32)
criarGrid(32);
