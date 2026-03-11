# Chaos Game Visualizer
### Created for the Seattle Universal Math Museum
#### Authors: Zane Swaims, Jayne Nemynova

Base behavior:
0. Starts in fullscreen mode. Press Esc to minimize.
1. Places 3 equally spaced out SUMM colored dots on screen.
2. Places a 4th black starting dot anywhere on screen.
3. Every 10 seconds a random color is picked, and a new dot is placed halfway between the last dot and the original dot of the chosen color. It takes on the same color.
4. Pressing the spacebar/USB button bypasses the timer and adds a new dot as described in Step 3.

IDE Set Up:
1. Clone the repository.
2. Check if Node.js is installed:  
        node -v  
        npm -v  
   If not, install with: winget install OpenJS.NodeJS.LTS  
   Winget should be included with Win10/11.  
3. Install dependencies:  
        npm install  
4. Build:  
        npm run build
5. Run:  
        npm start
