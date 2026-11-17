# Chaos Game Visualizer
### Created for the Seattle Universal Math Museum

**Features**
Algorithm:
1. Places 3 equally spaced out SUMM colored dots on screen.
2. Places a 4th black starting dot anywhere on screen.
3. Every X seconds a random color is picked, and a new dot is placed halfway between the last dot and the original dot of the chosen color. It takes on the same color.
Interactions:
1. Pressing *Add a Dot* bypasses the timer and adds a new dot as described in Step 3.
2. Pressing *Reset* resets the GUI to the starting state as described in Steps 1 and 2.
3. *Next 100* draws 100 new dots.
4. *Final* draws 10,000 new dots to reveal the final pattern.

## Development
### Prerequisites
- Node.js.

### Installation
```bash
git clone https://github.com/jayneen/chaos-game-visualizer.git
cd repo
npm install
```

Start the local development server:
```bash
npm run build
npm start
```

## Known Limitations
- Does not support variable numbers of vertices [2 to 8].
- Does not supprt an independent R-value slider and textbox for precise values.
- Narrow canvas (extend horizontally).
- Does not delete starting artifact points.

## Credits
### Developers
- Zane Swaims
- Evgeniia Nemynova

### External Resources
Inspiration: https://thewessens.net/ClassroomApps/Main/chaosgame.html
