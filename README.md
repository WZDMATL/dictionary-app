# Dictionary App made with React

<img alt="react dictionary app" src="https://infallible-archimedes-8c04df.netlify.app/images/dictionaryapp.png" />

## Description

This is a [dictionary](https://sleepy-austin-9f9a8c.netlify.app/) that provides multiple defintiions and uses of terms, generates photos associated with terms, and provides the pronunciation of terms. 

## How it's built

### Table of Contents
∙ [public](https://github.com/WZDMATL/dictionary-app/tree/main/public)
<br />
  a. [index.html](https://github.com/WZDMATL/dictionary-app/blob/main/public/index.html)
  <br />
  b. [manifest.json](https://github.com/WZDMATL/dictionary-app/blob/main/public/manifest.json)
  <br />
∙ [src](https://github.com/WZDMATL/dictionary-app/tree/main/src)
<br />
  -App-
  <br />
  a. [app.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/App.css)
  <br />
  b. [app.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/App.js)
  <br />
  c. [app.test.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/App.test.js)
  <br />
  -Dictionary-
  <br />
  a. [dictionary.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Dictionary.css)
  <br />
  b. [dictionary.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Dictionary.js)
  <br />
  -Meaning-
  <br />
  a. [meaning.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Meaning.css)
  <br />
  b. [meaning.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Meaning.js)
  <br />
  -Phonetic-
  <br />
  a. [phonetic.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Phonetic.css)
  <br />
  b. [phonetic.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Phonetic.js)
  <br />
  -Photos-
  <br />
  a. [photos.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Photos.css)
  <br />
  b. [photos.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Photos.js)
  <br />
  -Results-
  <br />
  a. [results.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Results.css)
  <br />
  b. [results.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Results.js)
  <br />
  -Synonyms-
  <br />
  a. [synonyms.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/Synonyms.css)
  <br />
  b. [synonyms.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/Synonyms.js)
  <br />
  -Logo-
  <br />
  a. [dictionaryapplogo.png](https://github.com/WZDMATL/dictionary-app/blob/main/src/dictionaryapplogo.png)
  <br />
  -Index-
  <br />
  a. [index.css](https://github.com/WZDMATL/dictionary-app/blob/main/src/index.css)
  <br />
  b. [index.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/index.js)
  <br />
  -reportWebVitals-
  <br />
  a. [reportWebVitals.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/reportWebVitals.js)
  <br />
  -setupTests-
  <br />
  a. [setupTests.js](https://github.com/WZDMATL/dictionary-app/blob/main/src/setupTests.js)
  <br />
∙ [package-lock.json](https://github.com/WZDMATL/dictionary-app/blob/main/package-lock.json)
<br />
∙ [package.json](https://github.com/WZDMATL/dictionary-app/blob/main/package.json)

### Data
A majority of the website's page content is stored in the /data/ directory in HTML or MD files. I started with HTML but soon decided that Markdown would be more future proof as it could easily be ported between websites without much work. It allows also the viewing of the content on GitHub in a pretty way.

## Instructions

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
