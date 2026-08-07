// RUN BUTTON
document.getElementById("runButton").addEventListener("click", () => {
  if (window.isRunning) return;
  window.isRunning = true;

  console.log("▶ RUN PROJECT");

  const program = buildProgram();
  DolphinVM.run(program);
});

// STOP BUTTON
document.getElementById("stopButton").addEventListener("click", () => {
  console.log("⛔ STOP PROJECT");

  window.isRunning = false;

  DolphinVM.reset(); // If you have a reset() function

  // Manual fallback reset:
  DolphinVM.state = {
    x: 0,
    y: 0,
    direction: 90,
    bubbles: []
  };

  if (window.DolphinSprites) {
    window.DolphinSprites.forEach(sprite => {
      sprite.x = 0;
      sprite.y = 0;
    });
  }
});
