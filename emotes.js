window.TurtleEmotes = [
  {
    code: ":scaredbouncing:",
    src: "assets/emotes/scaredbouncing.png"
  },
  {
    code: ":codeblocks:",
    src: "assets/emotes/codeblocks.png"
  },
  {
    code: ":world:",
    src: "assets/emotes/world.png"
  },
  {
    code: ":classicsnail:",
    src: "assets/emotes/classicsnail.png"
  },
  {
    code: ":peacefinger:",
    src: "assets/emotes/peacefinger.png"
  },
  {
    code: ":puzzle:",
    src: "assets/emotes/puzzle.png"
  }
];
function renderTurtleChat(text) {
  let output = text;

  TurtleEmotes.forEach(emote => {
    output = output.replaceAll(
      emote.code,
      `<img src="${emote.src}" class="turtle-emote">`
    );
  });

  return output;
      }
.turtle-emote {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  image-rendering: pixelated;
    }
