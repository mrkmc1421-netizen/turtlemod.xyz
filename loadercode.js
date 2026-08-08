const EXTENSION_BASE = "https://www.mrkmc1421-netizen.github.io/turtlemod.xyz/extensions/";

function installPlugin(file) {
  fetch(EXTENSION_BASE + file)
    .then(res => res.json())
    .then(plugin => {
      plugin.blocks.forEach(block => {
        addBlockToEditor(block);
      });

      alert("🐢 Installed plugin: " + plugin.name);
    });
}
fetch("https://www.mrkmc1421-netizen.github.io/turtlemod.xyz/extensions/index.json")
  .then(res => res.json())
  .then(plugins => {
    const list = document.getElementById("pluginList");

    plugins.forEach(p => {
      const card = document.createElement("div");
      card.className = "pluginCard";
      card.innerHTML = `
        <h3>${p.icon} ${p.name}</h3>
        <p>${p.description}</p>
        <button onclick="installPlugin('${p.file}')">Install</button>
      `;
      list.appendChild(card);
    });
  });
