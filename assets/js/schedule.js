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

/***/ "./src/client/js/schedule.js":
/*!***********************************!*\
  !*** ./src/client/js/schedule.js ***!
  \***********************************/
/***/ (() => {

eval("const form = document.getElementById(\"kokuForm\");\n\nconst handleSubmit = async event => {\n  event.preventDefault();\n  const weekdayNick = form.querySelector(\"#nickname\");\n  const weekdayChecked = form.querySelectorAll(\".weekday-chk\");\n  const weekdayStart = form.querySelectorAll(\".weekday-start\");\n  const weekdayEnd = form.querySelectorAll(\".weekday-end\");\n  const weekdayEtc = form.querySelector(\".weekday-etc\");\n  let weekday = [];\n  let start = [];\n  let end = [];\n  weekdayChecked.forEach(element => {\n    if (element.checked === true) {\n      weekday.push(1);\n    } else {\n      weekday.push(0);\n    }\n  });\n  weekdayStart.forEach(element => {\n    start.push(element.value);\n  });\n  weekdayEnd.forEach(element => {\n    end.push(element.value);\n  });\n  const nickname = weekdayNick.value;\n  let etc = \" \";\n\n  if (weekdayEtc.value) {\n    etc = weekdayEtc.value;\n  }\n\n  const response = await fetch(\"/additem\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      nickname,\n      weekday,\n      start,\n      end,\n      etc\n    })\n  });\n\n  if (response.status === 200) {\n    alert(\"성공\");\n  }\n};\n\nform.addEventListener(\"submit\", handleSubmit);\n\n//# sourceURL=webpack://drunkenbeepoll/./src/client/js/schedule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/schedule.js"]();
/******/ 	
/******/ })()
;