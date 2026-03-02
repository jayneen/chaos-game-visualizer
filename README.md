# Chaos Game Visualizer
### Created for the Seattle Universal Math Museum
#### Authors: Dizzy Swaims, Jayne Nemynova

Base behavior:
1. Places 3 equally spaced out SUMM colored dots on screen.
2. Places a 4th black starting dot anywhere on screen.
3. Every X seconds a random color is picked, and a new dot is placed halfway between the last dot and the original dot of the chosen color. It takes on the same color.
4. Pressing the Add a Dot button bypasses the timer and adds a new dot as described in Step 3.
5. Pressing the Reset button resets the GUI to the starting state as described in Steps 1 and 2.

Extras:
- Different number of dots.
- Different distance (currently halfway through the line, maybe 25% or 75%).

Example: 
https://thewessens.net/ClassroomApps/Main/chaosgame.html

IDE Set Up:
1. Clone the repository.
2. Check if Node.js is installed: 
        node -v
        npm -v
   If not, install with: 
        winget install OpenJS.NodeJS.LTS
   Winget should be included with Win10/11.
3. Install dependencies: 
        npm install
4. Build the project: 
        npm run build
5. Start the application: 
        npm start