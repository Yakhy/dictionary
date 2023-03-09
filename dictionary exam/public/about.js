/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.body\r\nconst darkBtn = document.querySelector('.dark-btn')\r\n\r\nconst sans = document.querySelector('.sans')\r\nconst serif = document.querySelector('.serif')\r\nconst mono = document.querySelector('.mono')\r\nconst dropbtn = document.querySelector('.dropbtn')\r\n// const modeLocal = localStorage.getItem('mode')\r\n// if(modeLocal){\r\n//   body.classList.add('dark-mode')\r\n//   darkBtn.classList.toggle('hidden')\r\n//   lightBtn.classList.toggle('hidden')\r\n// }\r\nconst local = localStorage.getItem('mode') \r\nif(local) {\r\n  body.classList.toggle('dark-mode')\r\n  body.classList.toggle('white')\r\n  plan.classList.toggle('white')\r\n  dropbtn.classList.toggle('white')\r\n\r\n}\r\n\r\ndarkBtn.addEventListener('click', ()=> {\r\n  body.classList.toggle('dark-mode')\r\n  body.classList.toggle('white')\r\n  plan.classList.toggle('white')\r\n  \r\n  if(body.classList.contains('dark-mode')){\r\n    localStorage.setItem('mode', 'dark-mode')\r\n    \r\n  } else {\r\n    localStorage.setItem('mode', '')\r\n  }\r\n\r\n})\r\n\r\nsans.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Inter'\r\n  dropbtn.textContent = 'Sans-serif'\r\n})\r\n\r\nserif.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Lora'\r\n  dropbtn.textContent = 'Serif'\r\n})\r\n\r\nmono.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Inconsolata'\r\n  dropbtn.textContent = 'Mono'\r\n})\n\n//# sourceURL=webpack://webpack/./src/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/about.js"]();
/******/ 	
/******/ })()
;