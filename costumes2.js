canvas.addEventListener("mousedown", e => {
  if (locked) return;

  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / pixelSize);
  const y = Math.floor((e.clientY - rect.top) / pixelSize);

  layers[currentLayer][y][x] = "#00ff00"; // TurtleMod green pixel
  drawGrid();
});
document.getElementById("frontBtn").onclick = () => {
  currentLayer = "front";
};

document.getElementById("backBtn").onclick = () => {
  currentLayer = "back";
};
document.getElementById("lockBtn").onclick = () => {
  locked = true; 🔐 
};

document.getElementById("unlockBtn").onclick = () => {
  locked = false;
};
