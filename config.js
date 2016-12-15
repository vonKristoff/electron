'use strict'

const env = 'DEVELOPMENT';
const path = require('path')
const pkg = require('./package.json')

let config = {
    name: pkg.name,
    port: 9080,
    env: env,
    // electron-packager options
    building: {
        'app-version': pkg.version,
        arch: 'x64',
        asar: true,
        dir: path.join(__dirname, 'app'),
        icon: path.join(__dirname, 'app/icons/icon'),
        ignore: /node_modules|src|main.ejs|icons/,
        out: path.join(__dirname, 'builds'),
        overwrite: true,
        platform: process.env.PLATFORM_TARGET || 'all'
    },
     app: {
        width: 1920,
        height: 1080
    }
}

config.building.name = config.name

module.exports = config