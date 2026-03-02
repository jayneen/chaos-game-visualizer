// importing app and gui functions
import { app, BrowserWindow } from 'electron';

// reference to main window
let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
}

// creates window when electron is initialized
app.on('ready', createWindow);