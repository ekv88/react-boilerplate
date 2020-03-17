⚠ THIS IS WORK IN PROGRESS: You can use it but it's not done yet! ⚠
---
# ReactJS Boilerplate ⚛ 
*This is boilerplate code made to support scalability and everything you would need in SPA*

[![dependencies Status](https://img.shields.io/circleci/build/github/ekv88/react-boilerplate/master.svg)](https://circleci.com/gh/ekv88/react-boilerplate)
[![dependencies Status](https://david-dm.org/ekv88/react-boilerplate/master/status.svg)](https://david-dm.org/ekv88/react-boilerplate/master)
[![devDependencies Status](https://david-dm.org/ekv88/react-boilerplate/master/dev-status.svg)](https://david-dm.org/ekv88/react-boilerplate/master?type=dev)

### Let's get started 🚀
*If you are new to ReactJS and SPA world, all you need to do is to clone repo, navigate to folder and install dependencies using npm or yarn:*
#### Using npm
```shell script
git clone https://github.com/ekv88/react-boilerplate.git
cd react-boilerplate
npm install
```
#### Using yarn
```shell script
git clone https://github.com/ekv88/react-boilerplate.git
cd react-boilerplate
yarn install
```
----
### Available scripts ⚡
*There are few available scripts that u can use, this boilerplate dose not support test yet, but there's plan for that as well, or feel free to create pull request*

**Using npm**
* `npm start` - Starts development server
* `npm run build` - Builds production version of 
* `npm run styleguide` - Start styleguidist
* `npm run styleguide:build` - Build styleguidist components preview

**Using yarn**
* `yarn start` - Starts development server
* `yran run build` - Builds production version of 
* `yarn run styleguide` - Start styleguidist
* `yarn run styleguide:build` - Build styleguidist components preview

---

### Project tree 🌳
*If you are wondering about folder structure, here is brief intro to every file and what is used for*
 * [public](./public) - *Assets folder*
   * [index.html](./public/index.html) - *App entry server-side rendered point*
 * [src](./src) - *Everything related to app is here*
   * [components](./src/components) - *Custom components in app*
     * [CommonComponent](./src/components/CommonComponent) - *Example component*
     * [Layout](./src/components/Layout) - *Layout layer component*
     * [SideMenu](./src/components/SideMenu) - *Side menu component*
     * [index.js](./src/components/index.js) - *Export all components here*
   * [pages](./src/pages) - *Application pages*
     * [AboutPage](./src/pages/AboutPage) - *About us page*
     * [AboutPage](./src/pages/AboutPage) - *Home a.k.a. index page*
     * [UtilPages](./src/pages/UtilPages) - *Error and common pages*
     * [index.js](./src/pages/index.js) - *Export all pages here*
   * [redux](./src/redux)
     * [redux](./src/redux/doggos) - *Example of redux*
     * [api.js](./src/redux/api.js) - *All api points go here*
     * [history.js](./src/redux/history.js) - *History configuration*
     * [reducerInjector.js](./src/redux/reducerInjector.js) - *All api points go here*
     * [index.js](./src/redux/index.js) - **Import redux here! (Don't forget to!)**
   * [util](./src/util)
     * [Container.js](./src/util/Container.js) - *Append api in redux actions*
     * [Action.js](./src/util/Action.js) - *Util methods related to redux actions*
     * [Redux.js](./src/util/Redux.js) - *Util methods related to redux*
     * [Type.js](./src/util/Type.js) - *Util methods related to redux types*
     * [http.js](./src/util/http.js) - *Utils related to http methods*
     * [util.js](./src/util/util.js) - *Util methods*
   * [store.js](./src/store.js) - *Exporting redux store*
   * [configureStore.js](./src/configureStore.js) - *Redux store configuration*
   * [Root.js](./src/Root.js) - *App Routes*
   * [setupProxy.js](./src/setupProxy.js) - *App development proxy*
   * [index.js](./src/index.js) - *App entry point*
   
   
---

### Redux 🔄

**Todo this one**

---

### Dependencies 📦
| Name                  |Version    | What for?    |
|-----------------------|-----------| -------------|
|@material-ui/core      |version    |TODO          |
|@material-ui/icons     |version    |TODO          |
|connected-react-router |version    |TODO          |
|history                |version    |TODO          |
|react                  |version    |TODO          |
|react-dom              |version    |TODO          |
|react-redux            |version    |TODO          |
|react-router           |version    |TODO          |
|react-router-dom       |version    |TODO          |
|react-scripts          |version    |TODO          |
|redux                  |version    |TODO          |
|redux-thunk            |version    |TODO          |
|reselect               |version    |TODO          |


--- 

### Dev. Dependencies 📦
| Name                    | Version   | What for?    |
|-------------------------|-----------| -------------|
|http-proxy-middleware    |version    |TODO          |
|node-sass                |version    |TODO          |
|redux-devtools-extension |version    |TODO          |
|react-styleguidist       |version    |TODO          |

---

### License

ReactJS Boilerplate is [MIT licensed](./LICENSE).