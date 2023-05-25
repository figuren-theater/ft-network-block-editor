/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@figuren.theater/logos/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@figuren.theater/logos/index.js ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (23:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \n| export default () => (\n>     <Icon\n|         icon={ () => (\n|             <svg");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _figuren_theater_logos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @figuren.theater/logos */ "./node_modules/@figuren.theater/logos/index.js");
/* harmony import */ var _figuren_theater_logos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_figuren_theater_logos__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


// 1st add dependenciy strings
// to our index.asset.php
// so in this case 'wp-data'

// 2nd - extract arguments
// const { select, dispatch } = wp.data;


// import { store as preferencesStore } from '@wordpress/preferences';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

// import icon from './shared/js/icon';


/**
 * 1. figuren.theater Block-Collection
 *
 * all blocks within the namespace of
 * 'figurentheater' will be wrapped
 * under this collection in the block-inspector
 *
 * @see https://make.wordpress.org/core/2020/02/27/block-collections/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockCollection)('figurentheater', {
  title: 'figuren.theater',
  icon: _figuren_theater_logos__WEBPACK_IMPORTED_MODULE_4__.icon
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockCollection)('theatrebase', {
  title: 'Theater',
  icon: _figuren_theater_logos__WEBPACK_IMPORTED_MODULE_4__.icon
});

/**
 * 2. disable fullscreen
 *
 * permanently disable fullscreen mode by default
 * @see https://make.wordpress.org/core/2020/03/03/fullscreen-mode-enabled-by-default-in-the-editor/
 *
 * maybe, nicer Alternative at:
 * @see https://plugins.trac.wordpress.org/browser/blockeditor-fullscreen-mode-control/trunk/assets/js/fullscreen.js
window.onload = function() {
	const isFullscreenMode = select( editPostStore ).isFeatureActive( 'fullscreenMode' );
	if ( isFullscreenMode ) {
		dispatch( editPostStore ).toggleFeature( 'fullscreenMode' ); }
}
 */

/// window.onload stopped working for some un-researched reason
/// wp.domReady is WORKING

// https://github.com/WordPress/gutenberg/issues/13811#issuecomment-500930584
wp.domReady(function () {
  const isFullscreenMode = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.store).isFeatureActive('fullscreenMode');
  if (isFullscreenMode) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.store).toggleFeature('fullscreenMode');
  }
});

/**
 * 3.
 */
// import './block-styles/core-columns/newspack';

// 4.
// 
// TEMP deactivated, for not beeing finished
// and doing this mess here
// sorry to everybody reading this
// 
// I promise to do better!
// 
// import './block-styles/core-group/copy-2-clipboard';

/**
 * 5. Hide some Blocks from the inserter, but keep them working
 *    a kinda house-keeping as 'unregisterBlockLight' ;)
 *
 *    some helping code examples on hideBlockTypes()
 *    https://github.com/WordPress/gutenberg/issues/14139#issuecomment-480261866
 */

window.onload = function () {
  // remove stuff that is not for 'typical' users
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.store).hideBlockTypes(['core/freeform', 'core/html', 'core/shortcode']);
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map