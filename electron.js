const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')()

let master
let config = require('./config')
let index = `file://${__dirname}/index.html`

// if (process.env.NODE_ENV === 'development') {
//   config = require('../config')
//   config.url = `http://localhost:${config.port}`
// }

function init () {
    master = new BrowserWindow({
        height: config.app.width,,
        width: config.app.height
    })

    master.loadURL(index)
    /**
    * TODO:
    * debugging 
    * dev | prod modes using npm | build .. "NODE_ENV=production node ./app"
    * see https://github.com/SimulatedGREG/electron-vue/blob/master/template/config.js
    */
    if(config.app.fullscreen) master.setFullScreen(true)
    master.on('closed', () => master = null)
}

app.on('ready', init)
app.on('window-all-closed', () => { if(process.platform !== 'darwin') app.quit() })
app.on('activate', () => { if(master === null) init() })
