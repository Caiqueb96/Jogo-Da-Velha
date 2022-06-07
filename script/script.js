const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
}

const handleClick = (e) => {
  // Colocar a marca (X ou Círculo)
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);
  
  // Verificar por empate
  // Mudar o símbolo
};

for (const cell of cellElements) {
  cell.addEventListener("click", handleClick, { once: true });
}
