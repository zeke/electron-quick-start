// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {BrowserWindow} = require('electron').remote
const parentBrowserWindow = BrowserWindow.getAllWindows()[0]

const child = new BrowserWindow({
  parent: parentBrowserWindow,
  // show: false
})
