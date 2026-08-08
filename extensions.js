const extensions = {
  "mathPlus": [
    "sin()", "cos()", "tan()", "sqrt()", "log()", "power()"
  ],
  "cloudData": [
    "cloud write", "cloud read", "cloud delete"
  ],
  "turtlePhysics": [
    "apply force", "gravity toggle", "collision check"
  ]
};
function installExtension(name) {
  const newBlocks = extensions[name];
  renderBlocks(newBlocks);
}
<button onclick="installExtension('mathPlus')">Install MathPlus 🧩</button>
<button onclick="installExtension('cloudData')">Install CloudData 🧩</button>
<button onclick="installExtension('turtlePhysics')">Install TurtlePhysics 🧩</button>
