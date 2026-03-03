import { app, BrowserWindow } from 'electron'; // app and gui

// reference to main window
let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
  });

  mainWindow.loadFile('../src/index.html');
}

// creates window when electron is initialized
app.whenReady().then(createWindow);