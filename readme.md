#Electron Boilerplate

Electron uses `chromium` and `nodejs` therefore `Common JS` modules are allowed as well as 99% of `ES6` (all but `import`) and Node's `process` are available. As this app will be runtime, there is no need to concatenate / transpile the `JS` as for a normal web build. 


_Prerequisites_

On **OSX** [`wine`](https://www.davidbaumgold.com/tutorials/wine-mac/) (see all dependencies in link) must be installed (to be able to build a **windows** exe)

##### Dependencies

	npm install

##### Development

	npm start
	
##### Build Application

	npm run build
	

##### Config

See `package.json` for build config. `electron.js` is the main application wrapper.

##### Enviroments

There is currently no hotloading in this boilerplate. Nor constructive enviroments have been setup. If a local server is created, and a bundled app is built, then it is possible to serve up an `index.html` to the master application (see line 24 of `electron.js`) whereupon hotloading will be possible. However The `JS` will need to be concatenated and all `node_modules` used will need to be included otherwise the app will not be able to find the path to the `node_modules` directory. Unless it is hardwired - find it via `__dirname`.

---

#### Frontend

`Jade` is being used as a template lang for `HTML`.

`Stylus` is preprocessing the `CSS`.

`js/main.js` is the target for the web application. `Vue` has been selected as the render layer library. Any frontend framework is good to go as an alternative from this point - but please note that the `npm` scripts are setup to watch and build for a vue-like component system.

---

#### TODO's

* The `--ignore` flag in the `electron-packager` build script has been ommitted. Currently a lot of development _junk_ is being unneccessarily included; albeit, harmless.
* Build / Development Enviroments enhancements.

#### BTW

`electron-packager` at this release does some annoying permission stuff to packaged folders, whereby one cannot delete them on OSX. Remedy this with: 
    
    chmod 7 dirname
    sudo rm -R dirname
