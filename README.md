# Chaos Game Visualizer
### Created for the Seattle Universal Math Museum
#### Authors: Zane Swaims, Jayne Nemynova

Base behavior:
1. Starts in fullscreen mode. Press Esc to minimize.
2. Places 3 equally spaced out SUMM colored dots on screen.
3. Places a 4th black starting dot anywhere on screen.
4. Every 10 seconds a random color is picked, and a new dot is placed halfway between the last dot and the original dot of the chosen color. It takes on the same color.
5. Pressing the spacebar/USB button bypasses the timer and adds a new dot as described in Step 3.

IDE Set Up:
Windows:
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

Linux:
1. Navigate to electron to grant permissions:  
        cd node_modules/electron/dist
2. Set owner:  
        sudo chown root:root chrome-sandbox
3. Enable SUID permissions:  
        sudo chmod 4755 chrome-sandbox
4. Check with:  
        ls -l chrome-sandbox  
   Should output something similar to:  
        -rwsr-xr-x 1 root root...
