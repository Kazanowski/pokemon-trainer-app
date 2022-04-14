/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Raleway\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #2f2f2f;\n  background-color: #ffffff;\n}\n\nh1,\nh2 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  line-height: 1.25;\n  color: #2f2f2f;\n}\nh1 .heading-primary,\nh2 .heading-primary {\n  color: #feca1b;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n@media screen and (min-width: 576px) {\n  h1 {\n    font-size: 2.5rem;\n  }\n\n  h2 {\n    font-size: 1.75rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n}\n.card {\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  padding: 1rem;\n}\n\n.form-nickname input[type=submit], .btn, .field input {\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.75rem 1rem;\n  border-radius: 0.25rem;\n  width: 100%;\n}\n\n.field {\n  position: relative;\n  width: 100%;\n  padding-bottom: 32px;\n}\n.field label {\n  display: inline-block;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #2f2f2f;\n  margin-bottom: 0.25rem;\n}\n.field input {\n  line-height: 1.5rem;\n  border: 0.125rem solid #d5d5d5;\n  transition: border-color 350ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.field input:hover, .field input:focus {\n  border-color: #2f2f2f;\n}\n.field .helper-text {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  bottom: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  line-height: 1rem;\n}\n.field--error input,\n.field--error input:hover,\n.field--error input:focus {\n  border-color: #ef5350;\n}\n.field--error .helper-text {\n  color: #ef5350;\n}\n\n.btn {\n  cursor: pointer;\n  line-height: 1.75rem;\n  border: none;\n}\n.btn--primary {\n  color: #2f2f2f;\n  background-color: #feca1b;\n}\n.btn--primary:hover {\n  background-color: #fed64e;\n}\n\n@media screen and (min-width: 576px) {\n  .card {\n    max-width: 480px;\n  }\n\n  .btn,\n.field input,\n.field label {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  .card {\n    max-width: 540px;\n  }\n}\n.app-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 1440px;\n  padding: 0 1rem;\n  margin: 1rem auto;\n}\n\n.page-home,\n.page-hello {\n  margin: 0 auto;\n}\n\n.form-nickname {\n  margin-top: 3rem;\n}\n.form-nickname input[type=submit] {\n  cursor: pointer;\n  line-height: 1.75rem;\n  border: none;\n}\n\n.page-hello h1,\n.page-hello h2 {\n  margin-bottom: 2rem;\n}\n.page-hello .btn-catch {\n  max-width: calc(540px - 2rem);\n  align-self: center;\n}\n\n.pokemons-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.pokemons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.pokemons .pokemon {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: #eff1f0;\n}\n.pokemons .pokemon img {\n  width: 100%;\n}\n.pokemons .pokemon figcaption {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n@media screen and (min-width: 420px) {\n  .pokemons .pokemon {\n    width: calc((100% - 1.25rem) / 2);\n  }\n}\n@media screen and (min-width: 576px) {\n  .form-nickname {\n    margin-top: 4rem;\n  }\n  .form-nickname input[type=submit] {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 1 * 1.25rem) / 2);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 2 * 1.25rem) / 3);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 3 * 1.25rem) / 4);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 4 * 1.25rem) / 5);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 2.5rem) / 3);\n  }\n}\n@media screen and (min-width: 992px) {\n  .pokemons .pokemon {\n    width: calc((100% - 3.75rem) / 4);\n  }\n}\n@media screen and (min-width: 1400px) {\n  .btn-catch {\n    margin-top: 2rem;\n  }\n\n  .pokemons .pokemon {\n    width: calc((100% - 5rem) / 5);\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/_base.scss","webpack://./src/scss/_main.scss","webpack://./src/scss/_components.scss","webpack://./src/scss/_layout.scss"],"names":[],"mappings":"AAmBA;EACE,sBAAA;EACA,eAAA;AClBF;;ADqBA;;;EAGE,mBAAA;EACA,SAAA;EACA,UAAA;AClBF;;ADqBA;EACE,kCAzBU;EA0BV,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAlCW;EAmCX,yBAjCY;ACed;;ADqBA;;EAEE,kCApCa;EAqCb,gBAAA;EACA,iBAAA;EACA,cA3CW;ACyBb;ADoBE;;EACE,cAjDY;ACgChB;;ADqBA;EACE,eAAA;AClBF;;ADoBA;EACE,iBAAA;ACjBF;;ADoBA;EACE;IACE,iBAAA;ECjBF;;EDmBA;IACE,kBAAA;EChBF;AACF;ADmBA;EACE;IACE,eAAA;ECjBF;;EDmBA;IACE,eAAA;EChBF;AACF;AC3DA;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;AD6DF;;AC1DA;EACE,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;AD6DF;;AC1DA;EACE,kBAAA;EACA,WAAA;EACA,oBAAA;AD6DF;AC3DE;EACE,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,cFrBS;EEsBT,sBAAA;AD6DJ;AC1DE;EAEE,mBAAA;EACA,8BAAA;EACA,iEAAA;AD2DJ;ACzDI;EAEE,qBFjCO;AC2Fb;ACtDE;EACE,qBAAA;EACA,kBAAA;EACA,OAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;ADwDJ;ACpDI;;;EAGE,qBFpDS;AC0Gf;ACnDI;EACE,cFxDS;AC6Gf;;AChDA;EAEE,eAAA;EACA,oBAAA;EACA,YAAA;ADkDF;ACjDE;EACE,cFlES;EEmET,yBFtEY;ACyHhB;ACjDI;EACE,yBAAA;ADmDN;;AC9CA;EACE;IACE,gBAAA;EDiDF;;EC/CA;;;IAGE,kBAAA;EDkDF;AACF;AC/CA;EACE;IACE,gBAAA;EDiDF;AACF;AE7IA;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;AF+IF;;AE5IA;;EAEE,cAAA;AF+IF;;AE5IA;EACE,gBAAA;AF+IF;AE7IE;EAEE,eAAA;EACA,oBAAA;EACA,YAAA;AF8IJ;;AEzIE;;EAEE,mBAAA;AF4IJ;AEzIE;EACE,6BAAA;EACA,kBAAA;AF2IJ;;AEvIA;EACE,aAAA;EACA,sBAAA;AF0IF;;AEvIA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;AF0IF;AExIE;EACE,WAAA;EACA,aAAA;EACA,qBAAA;EACA,yBH/CU;ACyLd;AEzII;EACE,WAAA;AF2IN;AExII;EACE,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,yBAAA;AF0IN;;AErIA;EAEI;IACE,iCAAA;EFuIJ;AACF;AEnIA;EACE;IACE,gBAAA;EFqIF;EEnIE;IACE,kBAAA;EFqIJ;AACF;AEhIE;EAEI;IACE,qCAAA;EFiIN;AACF;AErIE;EAEI;IACE,qCAAA;EFsIN;AACF;AE1IE;EAEI;IACE,qCAAA;EF2IN;AACF;AE/IE;EAEI;IACE,qCAAA;EFgJN;AACF;AE3IA;EAEI;IACE,gCAAA;EF4IJ;AACF;AExIA;EAEI;IACE,iCAAA;EFyIJ;AACF;AErIA;EACE;IACE,gBAAA;EFuIF;;EEpIE;IACE,8BAAA;EFuIJ;AACF","sourcesContent":["$color-primary: #feca1b;\n$color-secondary: #3761a8;\n$color-danger: #ef5350;\n$color-dark: #2f2f2f;\n$color-light: #eff1f0;\n$color-white: #ffffff;\n\n$font-heading: \"Poppins\", sans-serif;\n$font-body: \"Raleway\", sans-serif;\n\n$breakpoints: (\n  xsm: 420px,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px,\n);\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: $font-body;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  color: $color-dark;\n  background-color: $color-white;\n}\n\nh1,\nh2 {\n  font-family: $font-heading;\n  font-weight: 700;\n  line-height: 1.25;\n  color: $color-dark;\n\n  .heading-primary {\n    color: $color-primary;\n  }\n}\n\nh1 {\n  font-size: 2rem;\n}\nh2 {\n  font-size: 1.5rem;\n}\n\n@media screen and (min-width: map-get($breakpoints, sm)) {\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.75rem;\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, lg)) {\n  h1 {\n    font-size: 3rem;\n  }\n  h2 {\n    font-size: 2rem;\n  }\n}\n","html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Raleway\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #2f2f2f;\n  background-color: #ffffff;\n}\n\nh1,\nh2 {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 700;\n  line-height: 1.25;\n  color: #2f2f2f;\n}\nh1 .heading-primary,\nh2 .heading-primary {\n  color: #feca1b;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n@media screen and (min-width: 576px) {\n  h1 {\n    font-size: 2.5rem;\n  }\n\n  h2 {\n    font-size: 1.75rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n}\n.card {\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  padding: 1rem;\n}\n\n.form-nickname input[type=submit], .btn, .field input {\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.75rem 1rem;\n  border-radius: 0.25rem;\n  width: 100%;\n}\n\n.field {\n  position: relative;\n  width: 100%;\n  padding-bottom: 32px;\n}\n.field label {\n  display: inline-block;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #2f2f2f;\n  margin-bottom: 0.25rem;\n}\n.field input {\n  line-height: 1.5rem;\n  border: 0.125rem solid #d5d5d5;\n  transition: border-color 350ms cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.field input:hover, .field input:focus {\n  border-color: #2f2f2f;\n}\n.field .helper-text {\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  bottom: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  line-height: 1rem;\n}\n.field--error input,\n.field--error input:hover,\n.field--error input:focus {\n  border-color: #ef5350;\n}\n.field--error .helper-text {\n  color: #ef5350;\n}\n\n.btn {\n  cursor: pointer;\n  line-height: 1.75rem;\n  border: none;\n}\n.btn--primary {\n  color: #2f2f2f;\n  background-color: #feca1b;\n}\n.btn--primary:hover {\n  background-color: #fed64e;\n}\n\n@media screen and (min-width: 576px) {\n  .card {\n    max-width: 480px;\n  }\n\n  .btn,\n.field input,\n.field label {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  .card {\n    max-width: 540px;\n  }\n}\n.app-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 1440px;\n  padding: 0 1rem;\n  margin: 1rem auto;\n}\n\n.page-home,\n.page-hello {\n  margin: 0 auto;\n}\n\n.form-nickname {\n  margin-top: 3rem;\n}\n.form-nickname input[type=submit] {\n  cursor: pointer;\n  line-height: 1.75rem;\n  border: none;\n}\n\n.page-hello h1,\n.page-hello h2 {\n  margin-bottom: 2rem;\n}\n.page-hello .btn-catch {\n  max-width: calc(540px - 2rem);\n  align-self: center;\n}\n\n.pokemons-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.pokemons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.pokemons .pokemon {\n  width: 100%;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: #eff1f0;\n}\n.pokemons .pokemon img {\n  width: 100%;\n}\n.pokemons .pokemon figcaption {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n@media screen and (min-width: 420px) {\n  .pokemons .pokemon {\n    width: calc((100% - 1.25rem) / 2);\n  }\n}\n@media screen and (min-width: 576px) {\n  .form-nickname {\n    margin-top: 4rem;\n  }\n  .form-nickname input[type=submit] {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 1 * 1.25rem) / 2);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 2 * 1.25rem) / 3);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 3 * 1.25rem) / 4);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 4 * 1.25rem) / 5);\n  }\n}\n@media screen and (min-width: 768px) {\n  .pokemons .pokemon {\n    width: calc((100% - 2.5rem) / 3);\n  }\n}\n@media screen and (min-width: 992px) {\n  .pokemons .pokemon {\n    width: calc((100% - 3.75rem) / 4);\n  }\n}\n@media screen and (min-width: 1400px) {\n  .btn-catch {\n    margin-top: 2rem;\n  }\n\n  .pokemons .pokemon {\n    width: calc((100% - 5rem) / 5);\n  }\n}",".card {\n  position: relative;\n  width: 100%;\n  max-width: 360px;\n  padding: 1rem;\n}\n\n%input {\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.75rem 1rem;\n  border-radius: 0.25rem;\n  width: 100%;\n}\n\n.field {\n  position: relative;\n  width: 100%;\n  padding-bottom: 32px;\n\n  label {\n    display: inline-block;\n    font-size: 1rem;\n    font-weight: bold;\n    color: $color-dark;\n    margin-bottom: 0.25rem;\n  }\n\n  input {\n    @extend %input;\n    line-height: 1.5rem;\n    border: 0.125rem solid lighten($color: $color-dark, $amount: 65);\n    transition: border-color 350ms cubic-bezier(0.165, 0.84, 0.44, 1);\n\n    &:hover,\n    &:focus {\n      border-color: $color-dark;\n    }\n  }\n\n  .helper-text {\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    bottom: 0.75rem;\n    font-size: 0.75rem;\n    font-weight: bold;\n    line-height: 1rem;\n  }\n\n  &--error {\n    input,\n    input:hover,\n    input:focus {\n      border-color: $color-danger;\n    }\n\n    .helper-text {\n      color: $color-danger;\n    }\n  }\n}\n\n.btn {\n  @extend %input;\n  cursor: pointer;\n  line-height: 1.75rem;\n  border: none;\n  &--primary {\n    color: $color-dark;\n    background-color: $color-primary;\n\n    &:hover {\n      background-color: lighten($color: $color-primary, $amount: 10);\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, sm)) {\n  .card {\n    max-width: 480px;\n  }\n  .btn,\n  .field input,\n  .field label {\n    font-size: 1.25rem;\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, lg)) {\n  .card {\n    max-width: 540px;\n  }\n}\n",".app-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 1440px;\n  padding: 0 1rem;\n  margin: 1rem auto;\n}\n\n.page-home,\n.page-hello {\n  margin: 0 auto;\n}\n\n.form-nickname {\n  margin-top: 3rem;\n\n  input[type=\"submit\"] {\n    @extend %input;\n    cursor: pointer;\n    line-height: 1.75rem;\n    border: none;\n  }\n}\n\n.page-hello {\n  h1,\n  h2 {\n    margin-bottom: 2rem;\n  }\n\n  .btn-catch {\n    max-width: calc(540px - 2rem);\n    align-self: center;\n  }\n}\n\n.pokemons-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.pokemons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n\n  .pokemon {\n    width: 100%;\n    padding: 1rem;\n    border-radius: 0.5rem;\n    background-color: $color-light;\n    img {\n      width: 100%;\n    }\n\n    figcaption {\n      text-align: center;\n      font-size: 1.5rem;\n      font-weight: bold;\n      text-transform: uppercase;\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, xsm)) {\n  .pokemons {\n    .pokemon {\n      width: calc((100% - 1.25rem) / 2);\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, sm)) {\n  .form-nickname {\n    margin-top: 4rem;\n\n    input[type=\"submit\"] {\n      font-size: 1.25rem;\n    }\n  }\n}\n\n@for $i from 1 through 4 {\n  @media screen and (min-width: map-get($breakpoints, md)) {\n    .pokemons {\n      .pokemon {\n        width: calc((100% - #{$i} * 1.25rem) / #{$i + 1});\n      }\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, md)) {\n  .pokemons {\n    .pokemon {\n      width: calc((100% - 2 * 1.25rem) / 3);\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, lg)) {\n  .pokemons {\n    .pokemon {\n      width: calc((100% - 3 * 1.25rem) / 4);\n    }\n  }\n}\n\n@media screen and (min-width: map-get($breakpoints, xxl)) {\n  .btn-catch {\n    margin-top: 2rem;\n  }\n  .pokemons {\n    .pokemon {\n      width: calc((100% - 4 * 1.25rem) / 5);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/_main.scss":
/*!*****************************!*\
  !*** ./src/scss/_main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/_main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ts/Components/Field.ts":
/*!************************************!*\
  !*** ./src/ts/Components/Field.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Field {
    constructor(data) {
        this.name = data.name;
        this.label = data.label || this.name;
        this.type = data.type || "text";
        this.isRequired = data.isRequired || false;
        this.regexp = data.regexp || null;
        this.fieldElement = document.createElement("div");
        this.inputElement = this.createInput();
        this.inputElement.addEventListener("focusout", this.handleFocusout.bind(this));
    }
    get value() {
        return this.inputElement.value;
    }
    handleFocusout(event) {
        event.preventDefault();
        this.validation();
    }
    createInput() {
        const input = document.createElement("input");
        input.type = this.type;
        input.id = this.name;
        input.autocomplete = "off";
        return input;
    }
    render() {
        const labelHTML = `<label for="${this.name}">${this.label}</label>`;
        this.fieldElement.classList.add("field");
        this.fieldElement.insertAdjacentHTML("afterbegin", labelHTML);
        this.fieldElement.insertAdjacentElement("beforeend", this.inputElement);
        return this.fieldElement;
    }
    validation() {
        let helperMessage = "";
        if (this.isRequired && !this.value) {
            helperMessage = "This field is Required!";
        }
        if (this.value && this.regexp && !this.regexp.test(this.value)) {
            helperMessage = `Invalid ${this.name} format!`;
        }
        if (helperMessage) {
            this.setHelperText(helperMessage);
            return false;
        }
        this.removeHelperText();
        return true;
    }
    setHelperText(text = "", type = "error") {
        const className = `helper-text`;
        if (this.fieldElement.querySelector(`.${className}`)) {
            this.fieldElement.classList.remove("field--error", "field--success");
            this.fieldElement.querySelector(`.${className}`).textContent = text;
        }
        else {
            this.fieldElement.insertAdjacentHTML("beforeend", `<span class="${className}">${text}</span>`);
        }
        this.fieldElement.classList.add(`field--${type}`);
    }
    removeHelperText() {
        const className = `helper-text`;
        if (this.fieldElement.querySelector(`.${className}`)) {
            this.fieldElement.querySelector(`.${className}`).remove();
            this.fieldElement.classList.remove("field--error", "field--success");
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);


/***/ }),

/***/ "./src/ts/Controllers/Controllers.ts":
/*!*******************************************!*\
  !*** ./src/ts/Controllers/Controllers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _Views_HomeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Views/HomeView */ "./src/ts/Views/HomeView.ts");
/* harmony import */ var _Views_HelloView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Views/HelloView */ "./src/ts/Views/HelloView.ts");
/* harmony import */ var _Models_PokemonModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Models/PokemonModel */ "./src/ts/Models/PokemonModel.ts");
/* harmony import */ var _Models_State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Models/State */ "./src/ts/Models/State.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const homePageController = () => {
    _Views_HomeView__WEBPACK_IMPORTED_MODULE_0__["default"].render();
};
const catchPokemonsController = () => {
    const catchedPokemons = _Models_PokemonModel__WEBPACK_IMPORTED_MODULE_2__["default"].getCatchedPokemons();
    console.log({
        nickname: _Models_State__WEBPACK_IMPORTED_MODULE_3__["default"].nicknameValue,
        pokemons: catchedPokemons,
    });
};
const loadPokemonsController = (nickname) => __awaiter(void 0, void 0, void 0, function* () {
    _Models_State__WEBPACK_IMPORTED_MODULE_3__["default"].nicknameValue = nickname;
    const offset = _Models_State__WEBPACK_IMPORTED_MODULE_3__["default"].nicknameValue.length * 10;
    yield _Models_PokemonModel__WEBPACK_IMPORTED_MODULE_2__["default"].load(5, offset);
    _Views_HelloView__WEBPACK_IMPORTED_MODULE_1__["default"].render(_Models_State__WEBPACK_IMPORTED_MODULE_3__["default"].nicknameValue, _Models_PokemonModel__WEBPACK_IMPORTED_MODULE_2__["default"].getPokemonsData());
});
const init = () => {
    _Views_HomeView__WEBPACK_IMPORTED_MODULE_0__["default"].addHandlerRender(homePageController);
    _Views_HomeView__WEBPACK_IMPORTED_MODULE_0__["default"].addhandlerSubmit(loadPokemonsController);
    _Views_HelloView__WEBPACK_IMPORTED_MODULE_1__["default"].addHandlerCatchPokemons(catchPokemonsController);
};


/***/ }),

/***/ "./src/ts/Models/PokemonModel.ts":
/*!***************************************!*\
  !*** ./src/ts/Models/PokemonModel.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pokemon": () => (/* binding */ Pokemon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ "./src/ts/Models/State.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Pokemon {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }
    display() {
        return this.pokemon;
    }
    catch(percentageOfChances = 50) {
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        if (randomNumber <= percentageOfChances) {
            return this.pokemon;
        }
        return false;
    }
}
class PokemonModel {
    constructor() {
        this.pokemonURL = `https://pokeapi.co/api/v2/pokemon`;
        this.limit = 5;
        this.load = (limit = this.limit, offset) => __awaiter(this, void 0, void 0, function* () {
            try {
                const links = (yield this.loadLinks(limit, offset)) || [];
                for (const link of links) {
                    yield this.loadPokemon(link);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
        this.loadLinks = (limit, offset) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetch(`${this.pokemonURL}?limit=${limit}&offset=${offset}`);
                const data = yield result.json();
                const links = data.results.map((result) => result.url);
                if (links)
                    return links;
                throw new Error("Something was wrong");
            }
            catch (error) {
                console.log(error);
            }
        });
        this.loadPokemon = (url) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetch(url);
                const data = yield result.json();
                const pokemon = new Pokemon({
                    name: data.name,
                    atwork: data.sprites.other["official-artwork"].front_default,
                    stats: data.stats.map((stat) => {
                        return { name: stat.stat.name, value: stat.base_stat };
                    }),
                });
                if (pokemon) {
                    _State__WEBPACK_IMPORTED_MODULE_0__["default"].addPokemon(pokemon);
                }
                else {
                    throw new Error("Something was wrong!");
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getPokemonsData() {
        const pokemons = _State__WEBPACK_IMPORTED_MODULE_0__["default"].getPokemons();
        return pokemons.map((pokemon) => pokemon.display());
    }
    getCatchedPokemons() {
        const pokemons = _State__WEBPACK_IMPORTED_MODULE_0__["default"].getPokemons();
        let catchedPokemons = [];
        pokemons.map((pokemon) => {
            const catchedPokemon = pokemon.catch();
            if (catchedPokemon)
                catchedPokemons.push(catchedPokemon);
        });
        return catchedPokemons;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PokemonModel());


/***/ }),

/***/ "./src/ts/Models/State.ts":
/*!********************************!*\
  !*** ./src/ts/Models/State.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class State {
    constructor() {
        this.getPokemons = () => this.pokemons;
        this.nickname = "";
        this.pokemons = [];
    }
    set nicknameValue(nickname) {
        this.nickname = nickname;
    }
    get nicknameValue() {
        return this.nickname;
    }
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new State());


/***/ }),

/***/ "./src/ts/Views/HelloView.ts":
/*!***********************************!*\
  !*** ./src/ts/Views/HelloView.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PokemonCardView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokemonCardView */ "./src/ts/Views/PokemonCardView.ts");

class HelloView {
    constructor() {
        this.parentElement = document.querySelector(".app-wrapper");
        this.btnCatch = document.createElement("button");
    }
    addHandlerCatchPokemons(handler) {
        this.btnCatch.addEventListener("click", handler);
    }
    generateMarkup(nickname, pokemons) {
        const wrapperElement = document.createElement("div");
        wrapperElement.classList.add("page-hello");
        const headingHTML = `<h1>Hello, <span class="heading-primary">${nickname}</span></h1>`;
        wrapperElement.insertAdjacentHTML("afterbegin", headingHTML);
        const pokemonsWrapperElement = document.createElement("div");
        pokemonsWrapperElement.classList.add("pokemons-wrapper");
        const pokemonsWrapperHTML = `
      <h2>You have a chance to catch them!</h2>
      <div class="pokemons">${pokemons
            .map((pokemon) => _PokemonCardView__WEBPACK_IMPORTED_MODULE_0__["default"].render(pokemon))
            .join("")}</div>`;
        pokemonsWrapperElement.insertAdjacentHTML("beforeend", pokemonsWrapperHTML);
        this.btnCatch.classList.add("btn", "btn--primary", "btn-catch");
        this.btnCatch.textContent = "Catch'em";
        pokemonsWrapperElement.insertAdjacentElement("beforeend", this.btnCatch);
        wrapperElement.insertAdjacentElement("beforeend", pokemonsWrapperElement);
        return wrapperElement;
    }
    render(nickname, pokemons) {
        this.clearParentElement();
        this.parentElement.insertAdjacentElement("beforeend", this.generateMarkup(nickname, pokemons));
    }
    clearParentElement() {
        this.parentElement.innerHTML = "";
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HelloView());


/***/ }),

/***/ "./src/ts/Views/HomeView.ts":
/*!**********************************!*\
  !*** ./src/ts/Views/HomeView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Field */ "./src/ts/Components/Field.ts");

const nicknameRegexp = /[^"]{2,100}/;
class HomeView {
    constructor() {
        this.parentElement = document.querySelector(".app-wrapper");
        this.formElement = document.createElement("form");
        this.nicknameFieldInstance = new _Components_Field__WEBPACK_IMPORTED_MODULE_0__["default"]({
            name: "nickname",
            label: "Enter your nickname",
            type: "text",
            isRequired: true,
            regexp: nicknameRegexp,
        });
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    addhandlerSubmit(handler) {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this.nicknameFieldInstance.validation()) {
                handler(this.nicknameFieldInstance.value);
            }
        });
    }
    generateMurkup() {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card", "page-hello");
        this.formElement.id = "form-nickname";
        this.formElement.classList.add("form-nickname");
        const headingHTML = `<h1>Welcome in <br/> <span class="heading-primary">Pokemon Trainer App</span></h1>`;
        const submitButtomHTML = `<input type="submit" value="Continue" class="btn--primary" />`;
        this.formElement.insertAdjacentElement("afterbegin", this.nicknameFieldInstance.render());
        this.formElement.insertAdjacentHTML("beforeend", submitButtomHTML);
        cardElement.insertAdjacentHTML("afterbegin", headingHTML);
        cardElement.insertAdjacentElement("beforeend", this.formElement);
        return cardElement;
    }
    render() {
        this.clearParentElement();
        this.parentElement.insertAdjacentElement("beforeend", this.generateMurkup());
    }
    clearParentElement() {
        this.parentElement.innerHTML = "";
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new HomeView());


/***/ }),

/***/ "./src/ts/Views/PokemonCardView.ts":
/*!*****************************************!*\
  !*** ./src/ts/Views/PokemonCardView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PokemonCardView {
    render(pokemon) {
        const name = pokemon.name.split("-").join(" ");
        const atwork = pokemon.atwork;
        return `
      <figure class="pokemon">
        <img
          src="${atwork}"
          alt="${name}"
        />
        <figcaption>${name}</figcaption>
      </figure>`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PokemonCardView());


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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/_main.scss */ "./src/scss/_main.scss");
/* harmony import */ var _Controllers_Controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/Controllers */ "./src/ts/Controllers/Controllers.ts");


(0,_Controllers_Controllers__WEBPACK_IMPORTED_MODULE_1__.init)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ21CO0FBRWpELDhEQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9zcmMvc2Nzcy9fbWFpbi5zY3NzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLXRyYWluZXItYXBwLy4vc3JjL3Njc3MvX21haW4uc2Nzcz8zODcyIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLXRyYWluZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLXRyYWluZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL3NyYy90cy9Db21wb25lbnRzL0ZpZWxkLnRzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9zcmMvdHMvQ29udHJvbGxlcnMvQ29udHJvbGxlcnMudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL3NyYy90cy9Nb2RlbHMvUG9rZW1vbk1vZGVsLnRzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9zcmMvdHMvTW9kZWxzL1N0YXRlLnRzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9zcmMvdHMvVmlld3MvSGVsbG9WaWV3LnRzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvLi9zcmMvdHMvVmlld3MvSG9tZVZpZXcudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL3NyYy90cy9WaWV3cy9Qb2tlbW9uQ2FyZFZpZXcudHMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2tlbW9uLXRyYWluZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bva2Vtb24tdHJhaW5lci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb2tlbW9uLXRyYWluZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9rZW1vbi10cmFpbmVyLWFwcC8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAjMmYyZjJmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGNvbG9yOiAjMmYyZjJmO1xcbn1cXG5oMSAuaGVhZGluZy1wcmltYXJ5LFxcbmgyIC5oZWFkaW5nLXByaW1hcnkge1xcbiAgY29sb3I6ICNmZWNhMWI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG4uY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzYwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1uaWNrbmFtZSBpbnB1dFt0eXBlPXN1Ym1pdF0sIC5idG4sIC5maWVsZCBpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcbi5maWVsZCBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMmYyZjJmO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLmZpZWxkIGlucHV0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkICNkNWQ1ZDU7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMzUwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcXG59XFxuLmZpZWxkIGlucHV0OmhvdmVyLCAuZmllbGQgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmYyZjJmO1xcbn1cXG4uZmllbGQgLmhlbHBlci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDAuNzVyZW07XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZmllbGQtLWVycm9yIGlucHV0LFxcbi5maWVsZC0tZXJyb3IgaW5wdXQ6aG92ZXIsXFxuLmZpZWxkLS1lcnJvciBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNlZjUzNTA7XFxufVxcbi5maWVsZC0tZXJyb3IgLmhlbHBlci10ZXh0IHtcXG4gIGNvbG9yOiAjZWY1MzUwO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uYnRuLS1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjMmYyZjJmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlY2ExYjtcXG59XFxuLmJ0bi0tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkNjRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgfVxcblxcbiAgLmJ0bixcXG4uZmllbGQgaW5wdXQsXFxuLmZpZWxkIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgfVxcbn1cXG4uYXBwLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbn1cXG5cXG4ucGFnZS1ob21lLFxcbi5wYWdlLWhlbGxvIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9ybS1uaWNrbmFtZSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG4uZm9ybS1uaWNrbmFtZSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wYWdlLWhlbGxvIGgxLFxcbi5wYWdlLWhlbGxvIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5wYWdlLWhlbGxvIC5idG4tY2F0Y2gge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDU0MHB4IC0gMnJlbSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wb2tlbW9ucy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9rZW1vbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMWYwO1xcbn1cXG4ucG9rZW1vbnMgLnBva2Vtb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9rZW1vbnMgLnBva2Vtb24gZmlnY2FwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDIwcHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMS4yNXJlbSkgLyAyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIC5mb3JtLW5pY2tuYW1lIHtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIH1cXG4gIC5mb3JtLW5pY2tuYW1lIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMSAqIDEuMjVyZW0pIC8gMik7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9rZW1vbnMgLnBva2Vtb24ge1xcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDIgKiAxLjI1cmVtKSAvIDMpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzICogMS4yNXJlbSkgLyA0KTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNCAqIDEuMjVyZW0pIC8gNSk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9rZW1vbnMgLnBva2Vtb24ge1xcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDIuNXJlbSkgLyAzKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMy43NXJlbSkgLyA0KTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAuYnRuLWNhdGNoIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIH1cXG5cXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNXJlbSkgLyA1KTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbXBvbmVudHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX2xheW91dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1CQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ2xCRjs7QURxQkE7OztF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IiRjb2xvci1wcmltYXJ5OiAjZmVjYTFiO1xcbiRjb2xvci1zZWNvbmRhcnk6ICMzNzYxYTg7XFxuJGNvbG9yLWRhbmdlcjogI2VmNTM1MDtcXG4kY29sb3ItZGFyazogIzJmMmYyZjtcXG4kY29sb3ItbGlnaHQ6ICNlZmYxZjA7XFxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcblxcbiRmb250LWhlYWRpbmc6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4kZm9udC1ib2R5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuJGJyZWFrcG9pbnRzOiAoXFxuICB4c206IDQyMHB4LFxcbiAgc206IDU3NnB4LFxcbiAgbWQ6IDc2OHB4LFxcbiAgbGc6IDk5MnB4LFxcbiAgeGw6IDEyMDBweCxcXG4gIHh4bDogMTQwMHB4LFxcbik7XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWJvZHk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAkY29sb3ItZGFyaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6ICRmb250LWhlYWRpbmc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBjb2xvcjogJGNvbG9yLWRhcms7XFxuXFxuICAuaGVhZGluZy1wcmltYXJ5IHtcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcbiAgfVxcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgc20pKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBsZykpIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblwiLFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICMyZjJmMmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgY29sb3I6ICMyZjJmMmY7XFxufVxcbmgxIC5oZWFkaW5nLXByaW1hcnksXFxuaDIgLmhlYWRpbmctcHJpbWFyeSB7XFxuICBjb2xvcjogI2ZlY2ExYjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzNjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb3JtLW5pY2tuYW1lIGlucHV0W3R5cGU9c3VibWl0XSwgLmJ0biwgLmZpZWxkIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZmllbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuLmZpZWxkIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMyZjJmMmY7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4uZmllbGQgaW5wdXQge1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgI2Q1ZDVkNTtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAzNTBtcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xcbn1cXG4uZmllbGQgaW5wdXQ6aG92ZXIsIC5maWVsZCBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMyZjJmMmY7XFxufVxcbi5maWVsZCAuaGVscGVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMC43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5maWVsZC0tZXJyb3IgaW5wdXQsXFxuLmZpZWxkLS1lcnJvciBpbnB1dDpob3ZlcixcXG4uZmllbGQtLWVycm9yIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2VmNTM1MDtcXG59XFxuLmZpZWxkLS1lcnJvciAuaGVscGVyLXRleHQge1xcbiAgY29sb3I6ICNlZjUzNTA7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5idG4tLXByaW1hcnkge1xcbiAgY29sb3I6ICMyZjJmMmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVjYTFiO1xcbn1cXG4uYnRuLS1wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWQ2NGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuICAuY2FyZCB7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICB9XFxuXFxuICAuYnRuLFxcbi5maWVsZCBpbnB1dCxcXG4uZmllbGQgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAuY2FyZCB7XFxuICAgIG1heC13aWR0aDogNTQwcHg7XFxuICB9XFxufVxcbi5hcHAtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcblxcbi5wYWdlLWhvbWUsXFxuLnBhZ2UtaGVsbG8ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtLW5pY2tuYW1lIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcbi5mb3JtLW5pY2tuYW1lIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnBhZ2UtaGVsbG8gaDEsXFxuLnBhZ2UtaGVsbG8gaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLnBhZ2UtaGVsbG8gLmJ0bi1jYXRjaCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoNTQwcHggLSAycmVtKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBva2Vtb25zLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb2tlbW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjA7XFxufVxcbi5wb2tlbW9ucyAucG9rZW1vbiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wb2tlbW9ucyAucG9rZW1vbiBmaWdjYXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjBweCkge1xcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxLjI1cmVtKSAvIDIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmZvcm0tbmlja25hbWUge1xcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgfVxcbiAgLmZvcm0tbmlja25hbWUgaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxICogMS4yNXJlbSkgLyAyKTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMiAqIDEuMjVyZW0pIC8gMyk7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAucG9rZW1vbnMgLnBva2Vtb24ge1xcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMgKiAxLjI1cmVtKSAvIDQpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0ICogMS4yNXJlbSkgLyA1KTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5wb2tlbW9ucyAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMi41cmVtKSAvIDMpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzLjc1cmVtKSAvIDQpO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5idG4tY2F0Y2gge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgfVxcblxcbiAgLnBva2Vtb25zIC5wb2tlbW9uIHtcXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1cmVtKSAvIDUpO1xcbiAgfVxcbn1cIixcIi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzNjBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiVpbnB1dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpZWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxuXFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICRjb2xvci1kYXJrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBAZXh0ZW5kICVpbnB1dDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCBsaWdodGVuKCRjb2xvcjogJGNvbG9yLWRhcmssICRhbW91bnQ6IDY1KTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDM1MG1zIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XFxuXFxuICAgICY6aG92ZXIsXFxuICAgICY6Zm9jdXMge1xcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLWRhcms7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5oZWxwZXItdGV4dCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDAuNzVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgJi0tZXJyb3Ige1xcbiAgICBpbnB1dCxcXG4gICAgaW5wdXQ6aG92ZXIsXFxuICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvci1kYW5nZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlbHBlci10ZXh0IHtcXG4gICAgICBjb2xvcjogJGNvbG9yLWRhbmdlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG4gIEBleHRlbmQgJWlucHV0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICAmLS1wcmltYXJ5IHtcXG4gICAgY29sb3I6ICRjb2xvci1kYXJrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICRjb2xvci1wcmltYXJ5LCAkYW1vdW50OiAxMCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIHNtKSkge1xcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgfVxcbiAgLmJ0bixcXG4gIC5maWVsZCBpbnB1dCxcXG4gIC5maWVsZCBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsIGxnKSkge1xcbiAgLmNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgfVxcbn1cXG5cIixcIi5hcHAtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxufVxcblxcbi5wYWdlLWhvbWUsXFxuLnBhZ2UtaGVsbG8ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtLW5pY2tuYW1lIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuXFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIEBleHRlbmQgJWlucHV0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbi5wYWdlLWhlbGxvIHtcXG4gIGgxLFxcbiAgaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLmJ0bi1jYXRjaCB7XFxuICAgIG1heC13aWR0aDogY2FsYyg1NDBweCAtIDJyZW0pO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5wb2tlbW9ucy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9rZW1vbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuICAucG9rZW1vbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBmaWdjYXB0aW9uIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgeHNtKSkge1xcbiAgLnBva2Vtb25zIHtcXG4gICAgLnBva2Vtb24ge1xcbiAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMS4yNXJlbSkgLyAyKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgc20pKSB7XFxuICAuZm9ybS1uaWNrbmFtZSB7XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCBtZCkpIHtcXG4gICAgLnBva2Vtb25zIHtcXG4gICAgICAucG9rZW1vbiB7XFxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGl9ICogMS4yNXJlbSkgLyAjeyRpICsgMX0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgbWQpKSB7XFxuICAucG9rZW1vbnMge1xcbiAgICAucG9rZW1vbiB7XFxuICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyICogMS4yNXJlbSkgLyAzKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgbGcpKSB7XFxuICAucG9rZW1vbnMge1xcbiAgICAucG9rZW1vbiB7XFxuICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzICogMS4yNXJlbSkgLyA0KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgeHhsKSkge1xcbiAgLmJ0bi1jYXRjaCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICB9XFxuICAucG9rZW1vbnMge1xcbiAgICAucG9rZW1vbiB7XFxuICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0ICogMS4yNXJlbSkgLyA1KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vX21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbnRlcmZhY2UgRmllbGRJbnRlcmZhY2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBpc1JlcXVpcmVkPzogYm9vbGVhbjtcbiAgcmVnZXhwPzogUmVnRXhwO1xufVxuXG5jbGFzcyBGaWVsZCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBpc1JlcXVpcmVkOiBib29sZWFuO1xuICByZWdleHA6IFJlZ0V4cCB8IG51bGw7XG4gIGZpZWxkRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBGaWVsZEludGVyZmFjZSkge1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmxhYmVsID0gZGF0YS5sYWJlbCB8fCB0aGlzLm5hbWU7XG4gICAgdGhpcy50eXBlID0gZGF0YS50eXBlIHx8IFwidGV4dFwiO1xuICAgIHRoaXMuaXNSZXF1aXJlZCA9IGRhdGEuaXNSZXF1aXJlZCB8fCBmYWxzZTtcbiAgICB0aGlzLnJlZ2V4cCA9IGRhdGEucmVnZXhwIHx8IG51bGw7XG4gICAgdGhpcy5maWVsZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy5jcmVhdGVJbnB1dCgpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImZvY3Vzb3V0XCIsXG4gICAgICB0aGlzLmhhbmRsZUZvY3Vzb3V0LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUZvY3Vzb3V0KGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGNyZWF0ZUlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgaW5wdXQuaWQgPSB0aGlzLm5hbWU7XG4gICAgaW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcblxuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJlbmRlcigpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgbGFiZWxIVE1MID0gYDxsYWJlbCBmb3I9XCIke3RoaXMubmFtZX1cIj4ke3RoaXMubGFiZWx9PC9sYWJlbD5gO1xuXG4gICAgdGhpcy5maWVsZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZpZWxkXCIpO1xuICAgIHRoaXMuZmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbGFiZWxIVE1MKTtcbiAgICB0aGlzLmZpZWxkRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhpcy5pbnB1dEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXMuZmllbGRFbGVtZW50O1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBsZXQgaGVscGVyTWVzc2FnZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGlmICh0aGlzLmlzUmVxdWlyZWQgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgIGhlbHBlck1lc3NhZ2UgPSBcIlRoaXMgZmllbGQgaXMgUmVxdWlyZWQhXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgdGhpcy5yZWdleHAgJiYgIXRoaXMucmVnZXhwLnRlc3QodGhpcy52YWx1ZSkpIHtcbiAgICAgIGhlbHBlck1lc3NhZ2UgPSBgSW52YWxpZCAke3RoaXMubmFtZX0gZm9ybWF0IWA7XG4gICAgfVxuXG4gICAgaWYgKGhlbHBlck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0SGVscGVyVGV4dChoZWxwZXJNZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUhlbHBlclRleHQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldEhlbHBlclRleHQodGV4dCA9IFwiXCIsIHR5cGUgPSBcImVycm9yXCIpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgaGVscGVyLXRleHRgO1xuXG4gICAgaWYgKHRoaXMuZmllbGRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKSkge1xuICAgICAgdGhpcy5maWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZpZWxkLS1lcnJvclwiLCBcImZpZWxkLS1zdWNjZXNzXCIpO1xuICAgICAgdGhpcy5maWVsZEVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApIS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmllbGRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0ZXh0fTwvc3Bhbj5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmZpZWxkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGBmaWVsZC0tJHt0eXBlfWApO1xuICB9XG5cbiAgcmVtb3ZlSGVscGVyVGV4dCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgaGVscGVyLXRleHRgO1xuICAgIGlmICh0aGlzLmZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCkhKSB7XG4gICAgICB0aGlzLmZpZWxkRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCkhLnJlbW92ZSgpO1xuICAgICAgdGhpcy5maWVsZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZpZWxkLS1lcnJvclwiLCBcImZpZWxkLS1zdWNjZXNzXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZDtcbiIsImltcG9ydCBIb21lVmlldyBmcm9tIFwiLi8uLi9WaWV3cy9Ib21lVmlld1wiO1xuaW1wb3J0IEhlbGxvVmlldyBmcm9tIFwiLi8uLi9WaWV3cy9IZWxsb1ZpZXdcIjtcblxuaW1wb3J0IFBva2Vtb25Nb2RlbCBmcm9tIFwiLi8uLi9Nb2RlbHMvUG9rZW1vbk1vZGVsXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4vLi4vTW9kZWxzL1N0YXRlXCI7XG5cbmNvbnN0IGhvbWVQYWdlQ29udHJvbGxlciA9ICgpID0+IHtcbiAgSG9tZVZpZXcucmVuZGVyKCk7XG59O1xuXG5jb25zdCBjYXRjaFBva2Vtb25zQ29udHJvbGxlciA9ICgpID0+IHtcbiAgY29uc3QgY2F0Y2hlZFBva2Vtb25zID0gUG9rZW1vbk1vZGVsLmdldENhdGNoZWRQb2tlbW9ucygpO1xuXG4gIGNvbnNvbGUubG9nKHtcbiAgICBuaWNrbmFtZTogU3RhdGUubmlja25hbWVWYWx1ZSxcbiAgICBwb2tlbW9uczogY2F0Y2hlZFBva2Vtb25zLFxuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRQb2tlbW9uc0NvbnRyb2xsZXIgPSBhc3luYyAobmlja25hbWU6IHN0cmluZykgPT4ge1xuICBTdGF0ZS5uaWNrbmFtZVZhbHVlID0gbmlja25hbWU7XG5cbiAgY29uc3Qgb2Zmc2V0ID0gU3RhdGUubmlja25hbWVWYWx1ZS5sZW5ndGggKiAxMDtcbiAgYXdhaXQgUG9rZW1vbk1vZGVsLmxvYWQoNSwgb2Zmc2V0KTtcblxuICBIZWxsb1ZpZXcucmVuZGVyKFN0YXRlLm5pY2tuYW1lVmFsdWUsIFBva2Vtb25Nb2RlbC5nZXRQb2tlbW9uc0RhdGEoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgSG9tZVZpZXcuYWRkSGFuZGxlclJlbmRlcihob21lUGFnZUNvbnRyb2xsZXIpO1xuICBIb21lVmlldy5hZGRoYW5kbGVyU3VibWl0KGxvYWRQb2tlbW9uc0NvbnRyb2xsZXIpO1xuICBIZWxsb1ZpZXcuYWRkSGFuZGxlckNhdGNoUG9rZW1vbnMoY2F0Y2hQb2tlbW9uc0NvbnRyb2xsZXIpO1xufTtcbiIsImltcG9ydCBTdGF0ZSBmcm9tIFwiLi9TdGF0ZVwiO1xuXG5pbnRlcmZhY2UgU3RhdEludGVyZmFjZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uSW50ZXJmYWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhdHdvcms6IHN0cmluZztcbiAgc3RhdHM6IFN0YXRJbnRlcmZhY2VbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFBva2Vtb24ge1xuICBwb2tlbW9uOiBQb2tlbW9uSW50ZXJmYWNlO1xuICBjb25zdHJ1Y3Rvcihwb2tlbW9uOiBQb2tlbW9uSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5wb2tlbW9uID0gcG9rZW1vbjtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9rZW1vbjtcbiAgfVxuXG4gIGNhdGNoKHBlcmNlbnRhZ2VPZkNoYW5jZXM6IG51bWJlciA9IDUwKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMSk7XG4gICAgaWYgKHJhbmRvbU51bWJlciA8PSBwZXJjZW50YWdlT2ZDaGFuY2VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2tlbW9uO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuY2xhc3MgUG9rZW1vbk1vZGVsIHtcbiAgcG9rZW1vblVSTDogc3RyaW5nID0gYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbmA7XG4gIGxpbWl0OiBudW1iZXIgPSA1O1xuXG4gIGxvYWQgPSBhc3luYyAobGltaXQ6IG51bWJlciA9IHRoaXMubGltaXQsIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxpbmtzID0gKGF3YWl0IHRoaXMubG9hZExpbmtzKGxpbWl0LCBvZmZzZXQpKSB8fCBbXTtcblxuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFBva2Vtb24obGluayk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZExpbmtzID0gYXN5bmMgKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHt0aGlzLnBva2Vtb25VUkx9P2xpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH1gXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICAgIGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IGRhdGEucmVzdWx0cy5tYXAoXG4gICAgICAgIChyZXN1bHQ6IHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9KSA9PiByZXN1bHQudXJsXG4gICAgICApO1xuXG4gICAgICBpZiAobGlua3MpIHJldHVybiBsaW5rcztcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3YXMgd3JvbmdcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZFBva2Vtb24gPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXG4gICAgICBjb25zdCBwb2tlbW9uID0gbmV3IFBva2Vtb24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIGF0d29yazogZGF0YS5zcHJpdGVzLm90aGVyW1wib2ZmaWNpYWwtYXJ0d29ya1wiXS5mcm9udF9kZWZhdWx0LFxuICAgICAgICBzdGF0czogZGF0YS5zdGF0cy5tYXAoKHN0YXQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IG5hbWU6IHN0YXQuc3RhdC5uYW1lLCB2YWx1ZTogc3RhdC5iYXNlX3N0YXQgfTtcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHBva2Vtb24pIHtcbiAgICAgICAgU3RhdGUuYWRkUG9rZW1vbihwb2tlbW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3YXMgd3JvbmchXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGdldFBva2Vtb25zRGF0YSgpIHtcbiAgICBjb25zdCBwb2tlbW9uczogUG9rZW1vbltdID0gU3RhdGUuZ2V0UG9rZW1vbnMoKTtcbiAgICByZXR1cm4gcG9rZW1vbnMubWFwKChwb2tlbW9uOiBQb2tlbW9uKSA9PiBwb2tlbW9uLmRpc3BsYXkoKSk7XG4gIH1cblxuICBnZXRDYXRjaGVkUG9rZW1vbnMoKSB7XG4gICAgY29uc3QgcG9rZW1vbnM6IFBva2Vtb25bXSA9IFN0YXRlLmdldFBva2Vtb25zKCk7XG4gICAgbGV0IGNhdGNoZWRQb2tlbW9uczogYW55ID0gW107XG5cbiAgICBwb2tlbW9ucy5tYXAoKHBva2Vtb246IFBva2Vtb24pID0+IHtcbiAgICAgIGNvbnN0IGNhdGNoZWRQb2tlbW9uID0gcG9rZW1vbi5jYXRjaCgpO1xuICAgICAgaWYgKGNhdGNoZWRQb2tlbW9uKSBjYXRjaGVkUG9rZW1vbnMucHVzaChjYXRjaGVkUG9rZW1vbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2F0Y2hlZFBva2Vtb25zO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb2tlbW9uTW9kZWwoKTtcbiIsImltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi9Qb2tlbW9uTW9kZWxcIjtcblxuY2xhc3MgU3RhdGUge1xuICBwcml2YXRlIG5pY2tuYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcG9rZW1vbnM6IFBva2Vtb25bXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XG4gICAgdGhpcy5wb2tlbW9ucyA9IFtdO1xuICB9XG5cbiAgc2V0IG5pY2tuYW1lVmFsdWUobmlja25hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcbiAgfVxuXG4gIGdldCBuaWNrbmFtZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm5pY2tuYW1lO1xuICB9XG5cbiAgZ2V0UG9rZW1vbnMgPSAoKSA9PiB0aGlzLnBva2Vtb25zO1xuXG4gIGFkZFBva2Vtb24ocG9rZW1vbjogUG9rZW1vbikge1xuICAgIHRoaXMucG9rZW1vbnMucHVzaChwb2tlbW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RhdGUoKTtcbiIsImltcG9ydCBQb2tlbW9uQ2FyZFZpZXcgZnJvbSBcIi4vUG9rZW1vbkNhcmRWaWV3XCI7XG5cbmludGVyZmFjZSBQb2tlbW9uRGF0YUludGVyZmFjZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgYXR3b3JrOiBzdHJpbmc7XG59XG5cbmNsYXNzIEhlbGxvVmlldyB7XG4gIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtd3JhcHBlclwiKSE7XG4gIGJ0bkNhdGNoOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkSGFuZGxlckNhdGNoUG9rZW1vbnMoaGFuZGxlcjogYW55KSB7XG4gICAgdGhpcy5idG5DYXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4gIH1cblxuICBnZW5lcmF0ZU1hcmt1cChcbiAgICBuaWNrbmFtZTogc3RyaW5nLFxuICAgIHBva2Vtb25zOiBQb2tlbW9uRGF0YUludGVyZmFjZVtdXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB3cmFwcGVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwYWdlLWhlbGxvXCIpO1xuXG4gICAgY29uc3QgaGVhZGluZ0hUTUwgPSBgPGgxPkhlbGxvLCA8c3BhbiBjbGFzcz1cImhlYWRpbmctcHJpbWFyeVwiPiR7bmlja25hbWV9PC9zcGFuPjwvaDE+YDtcbiAgICB3cmFwcGVyRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhlYWRpbmdIVE1MKTtcblxuICAgIGNvbnN0IHBva2Vtb25zV3JhcHBlckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50ID1cbiAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9rZW1vbnNXcmFwcGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9rZW1vbnMtd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHBva2Vtb25zV3JhcHBlckhUTUwgPSBgXG4gICAgICA8aDI+WW91IGhhdmUgYSBjaGFuY2UgdG8gY2F0Y2ggdGhlbSE8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb25zXCI+JHtwb2tlbW9uc1xuICAgICAgICAubWFwKChwb2tlbW9uOiBQb2tlbW9uRGF0YUludGVyZmFjZSkgPT4gUG9rZW1vbkNhcmRWaWV3LnJlbmRlcihwb2tlbW9uKSlcbiAgICAgICAgLmpvaW4oXCJcIil9PC9kaXY+YDtcblxuICAgIHBva2Vtb25zV3JhcHBlckVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHBva2Vtb25zV3JhcHBlckhUTUwpO1xuXG4gICAgdGhpcy5idG5DYXRjaC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiYnRuLS1wcmltYXJ5XCIsIFwiYnRuLWNhdGNoXCIpO1xuICAgIHRoaXMuYnRuQ2F0Y2gudGV4dENvbnRlbnQgPSBcIkNhdGNoJ2VtXCI7XG5cbiAgICBwb2tlbW9uc1dyYXBwZXJFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB0aGlzLmJ0bkNhdGNoKTtcblxuICAgIHdyYXBwZXJFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBwb2tlbW9uc1dyYXBwZXJFbGVtZW50KTtcblxuICAgIHJldHVybiB3cmFwcGVyRWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlcihuaWNrbmFtZTogc3RyaW5nLCBwb2tlbW9uczogUG9rZW1vbkRhdGFJbnRlcmZhY2VbXSkge1xuICAgIHRoaXMuY2xlYXJQYXJlbnRFbGVtZW50KCk7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgICB0aGlzLmdlbmVyYXRlTWFya3VwKG5pY2tuYW1lLCBwb2tlbW9ucylcbiAgICApO1xuICB9XG5cbiAgY2xlYXJQYXJlbnRFbGVtZW50KCkge1xuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxsb1ZpZXcoKTtcbiIsImltcG9ydCBGaWVsZCBmcm9tIFwiLi4vQ29tcG9uZW50cy9GaWVsZFwiO1xuXG5jb25zdCBuaWNrbmFtZVJlZ2V4cDogUmVnRXhwID0gL1teXCJdezIsMTAwfS87XG5cbmNsYXNzIEhvbWVWaWV3IHtcbiAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC13cmFwcGVyXCIpITtcbiAgZm9ybUVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBuaWNrbmFtZUZpZWxkSW5zdGFuY2UgPSBuZXcgRmllbGQoe1xuICAgIG5hbWU6IFwibmlja25hbWVcIixcbiAgICBsYWJlbDogXCJFbnRlciB5b3VyIG5pY2tuYW1lXCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgaXNSZXF1aXJlZDogdHJ1ZSxcbiAgICByZWdleHA6IG5pY2tuYW1lUmVnZXhwLFxuICB9KTtcblxuICBhZGRIYW5kbGVyUmVuZGVyKGhhbmRsZXI6IGFueSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZGhhbmRsZXJTdWJtaXQoaGFuZGxlcjogYW55KSB7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLm5pY2tuYW1lRmllbGRJbnN0YW5jZS52YWxpZGF0aW9uKCkpIHtcbiAgICAgICAgaGFuZGxlcih0aGlzLm5pY2tuYW1lRmllbGRJbnN0YW5jZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZU11cmt1cCgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJwYWdlLWhlbGxvXCIpO1xuICAgIHRoaXMuZm9ybUVsZW1lbnQuaWQgPSBcImZvcm0tbmlja25hbWVcIjtcbiAgICB0aGlzLmZvcm1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLW5pY2tuYW1lXCIpO1xuICAgIGNvbnN0IGhlYWRpbmdIVE1MID0gYDxoMT5XZWxjb21lIGluIDxici8+IDxzcGFuIGNsYXNzPVwiaGVhZGluZy1wcmltYXJ5XCI+UG9rZW1vbiBUcmFpbmVyIEFwcDwvc3Bhbj48L2gxPmA7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9tSFRNTCA9IGA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ29udGludWVcIiBjbGFzcz1cImJ0bi0tcHJpbWFyeVwiIC8+YDtcblxuICAgIHRoaXMuZm9ybUVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICB0aGlzLm5pY2tuYW1lRmllbGRJbnN0YW5jZS5yZW5kZXIoKVxuICAgICk7XG4gICAgdGhpcy5mb3JtRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgc3VibWl0QnV0dG9tSFRNTCk7XG5cbiAgICBjYXJkRWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhlYWRpbmdIVE1MKTtcbiAgICBjYXJkRWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGhpcy5mb3JtRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jbGVhclBhcmVudEVsZW1lbnQoKTtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIHRoaXMuZ2VuZXJhdGVNdXJrdXAoKVxuICAgICk7XG4gIH1cblxuICBjbGVhclBhcmVudEVsZW1lbnQoKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhvbWVWaWV3KCk7XG4iLCJjbGFzcyBQb2tlbW9uQ2FyZFZpZXcge1xuICByZW5kZXIocG9rZW1vbjogeyBuYW1lOiBzdHJpbmc7IGF0d29yazogc3RyaW5nIH0pIHtcbiAgICBjb25zdCBuYW1lID0gcG9rZW1vbi5uYW1lLnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBhdHdvcmsgPSBwb2tlbW9uLmF0d29yaztcblxuICAgIHJldHVybiBgXG4gICAgICA8ZmlndXJlIGNsYXNzPVwicG9rZW1vblwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiJHthdHdvcmt9XCJcbiAgICAgICAgICBhbHQ9XCIke25hbWV9XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGZpZ2NhcHRpb24+JHtuYW1lfTwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZmlndXJlPmA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBva2Vtb25DYXJkVmlldygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vLi4vc2Nzcy9fbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlcnNcIjtcblxuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9