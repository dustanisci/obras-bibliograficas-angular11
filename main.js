(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repositorios\angular\obras-bibliograficas-angular11\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IcuT":
/*!**************************************************************!*\
  !*** ./src/app/shared/pipes/format-name/format-name.pipe.ts ***!
  \**************************************************************/
/*! exports provided: FormatNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNamePipe", function() { return FormatNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FormatNamePipe {
    transform(value) {
        value = value.replace(/[\u0300-\u036f]/g, '');
        value = this.capitalize(value);
        let names = this.separateNames(value);
        if (names.length === 1) {
            return this.firstName(names).toUpperCase();
        }
        names = this.checkLastPartName(names);
        value = this.formatName(names);
        return this.nameToLowerCase(value);
    }
    capitalize(name) {
        return name
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    lastName(names) {
        return (names.slice(-1)[0]);
    }
    penultimateName(names) {
        return (names.slice(-2)[0]);
    }
    firstName(names) {
        return names[0];
    }
    separateNames(separateNames) {
        return separateNames.split(' ');
    }
    checkLastPartName(names) {
        if ((this.lastName(names).toLowerCase() === 'filho' ||
            this.lastName(names).toLowerCase() === 'filha' ||
            this.lastName(names).toLowerCase() === 'neto' ||
            this.lastName(names).toLowerCase() === 'neta' ||
            this.lastName(names).toLowerCase() === 'sobrinho' ||
            this.lastName(names).toLowerCase() === 'sobrinha' ||
            this.lastName(names).toLowerCase() === 'junior')
            && names.length > 2) {
            names.unshift(this.lastName(names).toUpperCase() + ',');
            names.pop();
            return names;
        }
        // Insere a vírgula no último elemento da posição e deixa em letras maísculas.
        names.slice(-1)[0] = this.lastName(names).toUpperCase() + ',';
        return names;
    }
    formatName(names) {
        // Adiciona a vírgula caso não exista.
        let lastName = this.lastName(names).toUpperCase();
        if (!names.join(' ').includes(',')) {
            lastName += ',';
        }
        names.unshift(lastName);
        names.pop();
        return names.join(' ');
    }
    nameToLowerCase(name) {
        const auxName = name;
        name = '';
        this.separateNames(auxName).map((word) => {
            if (word === 'De' || word === 'Da' || word === 'Do' || word === 'Das' || word === 'Dos') {
                name += ' ' + word.toLowerCase();
            }
            else {
                name += ' ' + word;
            }
        }).join(' ');
        // Elimina o espaço na frente do primeiro caractere
        return name.substring(1);
    }
}
FormatNamePipe.ɵfac = function FormatNamePipe_Factory(t) { return new (t || FormatNamePipe)(); };
FormatNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatName", type: FormatNamePipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_only_letters_only_letters_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/pipes/only-letters/only-letters.pipe */ "z98p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/input-number/input-number.component */ "lKnz");
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/input-text/input-text.component */ "wd5q");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_pipes_format_name_format_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/format-name/format-name.pipe */ "IcuT");









function AppComponent_ng_container_1_ng_container_5_ng_container_4_app_input_text_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-input-text", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function AppComponent_ng_container_1_ng_container_5_ng_container_4_app_input_text_1_Template_app_input_text_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r9.checkTypedInputText(_r8.value, "author" + (i_r6 + 1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", i_r6 + 1 + "\u00BA autor")("id", i_r6 + 1 + "-author")("formControlName", "author" + (i_r6 + 1))("error", ctx_r7.hasErrorInputText(i_r6));
} }
function AppComponent_ng_container_1_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_1_ng_container_5_ng_container_4_app_input_text_1_Template, 2, 4, "app-input-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.authorForm.value.totalAuthors > 0);
} }
const _c0 = function () { return []; };
function AppComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "2. preencha os nomes dos autores");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_container_1_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0).constructor(ctx_r2.authorForm.value.totalAuthors));
} }
function AppComponent_ng_container_1_app_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_1_app_button_6_Template_app_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.sendData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " formatar nomes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.authorForm.invalid);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "obras bibliogr\u00E1ficas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-input-number", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("subtractBtn", function AppComponent_ng_container_1_Template_app_input_number_subtractBtn_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.removeControlFormGroup(); })("addBtn", function AppComponent_ng_container_1_Template_app_input_number_addBtn_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.addControlFormGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_container_1_ng_container_5_Template, 5, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_ng_container_1_app_button_6_Template, 2, 1, "app-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.authorForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("error", ctx_r0.hasErrorInputNumber());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.authorForm.value.totalAuthors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.authorForm.value.totalAuthors);
} }
function AppComponent_ng_container_2_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "formatName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r20 + 1 + ". " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, item_r19), " ");
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "nomes formatados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_ng_container_2_label_4_Template, 3, 3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_app_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "voltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.namesPrint);
} }
class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.authorForm = this.fb.group({
            totalAuthors: [0, [this.isTotalAuthorValid]],
        });
        this.onlyNumber = new _shared_pipes_only_letters_only_letters_pipe__WEBPACK_IMPORTED_MODULE_1__["OnlyLettersPipe"]();
        this.showFormattedNames = false;
        this.namesPrint = [];
    }
    addControlFormGroup() {
        if (this.authorForm.value.totalAuthors > 50) {
            this.authorForm.controls.totalAuthors.setValue(50);
        }
        else {
            this.authorForm.addControl('author' + this.authorForm.value.totalAuthors, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
        }
    }
    removeControlFormGroup() {
        this.authorForm.removeControl('author' + this.authorForm.value.totalAuthors);
    }
    isTotalAuthorValid(control) {
        return control.value === 0 || control.value === null ? { invalid: true } : null;
    }
    hasErrorInputNumber() {
        return this.authorForm.controls.totalAuthors.invalid &&
            (this.authorForm.controls.totalAuthors.touched ||
                this.authorForm.controls.totalAuthors.dirty) ? true : false;
    }
    hasErrorInputText(index) {
        return this.authorForm.controls['author' + (index + 1)] &&
            this.authorForm.controls['author' + (index + 1)].invalid &&
            (this.authorForm.controls['author' + (index + 1)].touched ||
                this.authorForm.controls['author' + (index + 1)].dirty) ? true : false;
    }
    checkTypedInputText(value, controlName) {
        this.authorForm.controls[controlName].setValue(this.onlyNumber.transform(value));
    }
    sendData() {
        this.namesPrint = [];
        Object.keys(this.authorForm.controls)
            .filter((author) => author.includes('author'))
            .map((author) => {
            this.namesPrint.push(this.authorForm.controls[author].value);
        });
        this.showFormattedNames = true;
    }
    reset() {
        this.authorForm.reset();
        this.authorForm.controls.totalAuthors.setValue(0);
        Object.keys(this.authorForm.controls)
            .filter((author) => author.includes('author'))
            .map((author) => {
            this.authorForm.removeControl(author);
        });
        this.showFormattedNames = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [3, "formGroup"], ["formControlName", "totalAuthors", "label", "1. marque a quantidade de autores", 3, "error", "subtractBtn", "addBtn"], [3, "disabled", "click", 4, "ngIf"], [1, "container-authors-input"], [4, "ngFor", "ngForOf"], [3, "label", "id", "formControlName", "error", "keyup", 4, "ngIf"], [3, "label", "id", "formControlName", "error", "keyup"], ["inputText", ""], [3, "disabled", "click"], [1, "container-formatted-names"], ["class", "container-formatted-names__label", 4, "ngFor", "ngForOf"], [3, "click"], [1, "container-formatted-names__label"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 7, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 7, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showFormattedNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showFormattedNames);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__["InputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], pipes: [_shared_pipes_format_name_format_name_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatNamePipe"]], styles: ["main[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 50%;\n}\n@media only screen and (max-width: 700px) {\n  main[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\nmain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 34px;\n  font-weight: 100;\n  margin-bottom: 40px;\n  color: var(--dark-green);\n  background: var(--beige);\n  padding: 15px 0px;\n}\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-authors-input[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media only screen and (max-width: 600px) {\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-authors-input[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-authors-input[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%] {\n  margin: 0px 40px 15px 0px;\n  display: inline-block;\n}\n@media only screen and (max-width: 600px) {\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .container-authors-input[_ngcontent-%COMP%]   app-input-text[_ngcontent-%COMP%] {\n    margin: 0px auto 15px auto;\n    width: 100%;\n  }\n}\nmain[_ngcontent-%COMP%]   .container-formatted-names__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  margin-bottom: 15px;\n  font-family: \"inter\";\n}\nmain[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  display: block;\n}\n@media only screen and (max-width: 600px) {\n  main[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksVUFBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRE47QUFHTTtFQUpGO0lBS0ksMEJBQUE7RUFBTjtBQUNGO0FBRU07RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFUTtFQUpGO0lBS0ksMEJBQUE7SUFDQSxXQUFBO0VBQ1I7QUFDRjtBQUtJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSE47QUFPRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUxKO0FBT0k7RUFKRjtJQUtJLGtCQUFBO0VBSko7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZWlnZSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLWF1dGhvcnMtaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFwcC1pbnB1dC10ZXh0IHtcclxuICAgICAgICBtYXJnaW46IDBweCA0MHB4IDE1cHggMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxNXB4IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZm9ybWF0dGVkLW5hbWVze1xyXG4gICAgJl9fbGFiZWx7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnaW50ZXInO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "VkHG":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "btn--disabled": a0 }; };
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.disabled = false;
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { disabled: "disabled" }, ngContentSelectors: _c1, decls: 2, vars: 4, consts: [[1, "btn", 3, "ngClass", "disabled"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.disabled))("disabled", ctx.disabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".btn[_ngcontent-%COMP%] {\n  width: 133px;\n  min-height: 37px;\n  padding: 10px;\n  font-weight: bold;\n  border: none;\n  border-radius: 7px;\n  transition: 0.4s all;\n  font-size: 18px;\n  word-wrap: break-word;\n  color: #FFF;\n  background: var(--dark-green);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  filter: contrast(1.5);\n  cursor: pointer;\n}\n.btn--disabled[_ngcontent-%COMP%] {\n  background: var(--light-purple);\n  color: var(--black);\n  border: 2px solid var(--black);\n  opacity: 0.3;\n}\n.btn--disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  filter: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFGSjtBQUlJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBRk4iLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgd2lkdGg6IDEzM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDM3cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmVlbik7XHJcblxyXG5cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLS1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1wdXJwbGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgZmlsdGVyOiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/button/button.component */ "VkHG");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/input-number/input-number.component */ "lKnz");
/* harmony import */ var _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/input-text/input-text.component */ "wd5q");
/* harmony import */ var _shared_pipes_format_name_format_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/pipes/format-name/format-name.pipe */ "IcuT");
/* harmony import */ var _shared_pipes_only_letters_only_letters_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/only-letters/only-letters.pipe */ "z98p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"],
        _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__["InputNumberComponent"],
        _shared_components_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_5__["InputTextComponent"],
        _shared_pipes_format_name_format_name_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatNamePipe"],
        _shared_pipes_only_letters_only_letters_pipe__WEBPACK_IMPORTED_MODULE_7__["OnlyLettersPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "lKnz":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "container-input__counter-label--invalid": a0 }; };
class InputNumberComponent {
    constructor() {
        this.error = false;
        this.label = '';
        this.subtractBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addBtn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.counter = 0;
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
    }
    writeValue(counter) {
        this.counter = counter;
    }
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    add() {
        this.counter++;
        this.onChangeCb(this.counter);
        this.onTouchedCb(this.counter);
        this.addBtn.emit();
    }
    subtract() {
        this.counter--;
        this.onChangeCb(this.counter);
        this.onTouchedCb(this.counter);
        this.subtractBtn.emit();
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); };
InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], inputs: { error: "error", label: "label" }, outputs: { subtractBtn: "subtractBtn", addBtn: "addBtn" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputNumberComponent),
                multi: true,
            },
        ])], decls: 13, vars: 6, consts: [[1, "container-input"], [1, "container-input__label"], [1, "container-input__btns", "flex-center"], [1, "container-input__btn", "flex-center-center", 3, "disabled", "click"], [1, "container-input__counter"], [1, "container-input__counter-label", "flex-center-center", 3, "ngClass"], [1, "container-input__btn", "flex-center-center", 3, "click"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumberComponent_Template_button_click_4_listener() { return ctx.subtract(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputNumberComponent_Template_button_click_10_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.error));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.counter, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 4px;\n}\n\n.container-input__label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n\n.container-input__btns[_ngcontent-%COMP%]   .container-input__btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  font-size: 34px;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s all;\n  border: 2px solid var(--dark-green);\n  background: var(--dark-purple);\n  color: var(--white);\n}\n\n.container-input__btns[_ngcontent-%COMP%]   .container-input__btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  top: -2px;\n  position: relative;\n}\n\n.container-input__btns[_ngcontent-%COMP%]   .container-input__btn[_ngcontent-%COMP%]:disabled {\n  background: var(--disabled);\n  opacity: 0.5;\n  color: var(--black);\n}\n\n.container-input__counter[_ngcontent-%COMP%] {\n  top: 0;\n  margin: 0 8px;\n  color: #071723;\n  vertical-align: top;\n}\n\n.container-input__counter[_ngcontent-%COMP%]   .container-input__counter-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0;\n  transition: 0.2s all;\n  width: 60px;\n  height: 41px;\n  text-align: center;\n  -moz-appearance: textfield;\n  border: 2px solid var(--dark-green);\n  background: var(--white);\n}\n\n.container-input__counter[_ngcontent-%COMP%]   .container-input__counter-label--invalid[_ngcontent-%COMP%] {\n  background: var(--invalid);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUlNO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBRlI7O0FBS007RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhSOztBQVFFO0VBQ0UsTUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0FBTk47O0FBUU07RUFDRSwwQkFBQTtBQU5SIiwiZmlsZSI6ImlucHV0LW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1pbnB1dCB7XHJcbiAgJl9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnRucyB7XHJcbiAgICAuY29udGFpbmVyLWlucHV0X19idG4ge1xyXG4gICAgICB3aWR0aDogNDJweDtcclxuICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstcHVycGxlKTtcclxuICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb3VudGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICBjb2xvcjogIzA3MTcyMztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgLmNvbnRhaW5lci1pbnB1dF9fY291bnRlci1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICAgICAmLS1pbnZhbGlkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnZhbGlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "wd5q":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/input-text/input-text.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a0) { return { "invalid": a0 }; };
class InputTextComponent {
    constructor() {
        this.label = '';
        this.id = '';
        this.error = false;
        this.value = '';
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    typedValue(value) {
        this.value = value;
        this.onChangeCb(this.value);
        this.onTouchedCb(this.value);
    }
}
InputTextComponent.ɵfac = function InputTextComponent_Factory(t) { return new (t || InputTextComponent)(); };
InputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputTextComponent, selectors: [["app-input-text"]], inputs: { label: "label", id: "id", error: "error" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputTextComponent),
                multi: true,
            },
        ])], decls: 3, vars: 8, consts: [[3, "for"], ["type", "text", 3, "ngModel", "id", "name", "ngClass", "ngModelChange"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputTextComponent_Template_input_ngModelChange_2_listener($event) { return ctx.typedValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("id", ctx.id)("name", ctx.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.error));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  color: var(--dark-green);\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 40px;\n  padding: 5px;\n  margin-top: 5px;\n  border: 2px solid;\n  border-color: var(--dark-green);\n  transition: 0.4s all;\n  font-size: 20px;\n  width: 100%;\n}\n\ninput.invalid[_ngcontent-%COMP%] {\n  border-color: var(--invalid);\n}\n\ninput[_ngcontent-%COMP%]:hover:not(.invalid), input[_ngcontent-%COMP%]:focus:not(.invalid) {\n  border-color: var(--light-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDRTtFQUNFLDRCQUFBO0FBQ0o7O0FBRUU7RUFFRSxnQ0FBQTtBQURKIiwiZmlsZSI6ImlucHV0LXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgYWxsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi5pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW52YWxpZCk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOm5vdCguaW52YWxpZCksXHJcbiAgJjpmb2N1czpub3QoLmludmFsaWQpIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "z98p":
/*!****************************************************************!*\
  !*** ./src/app/shared/pipes/only-letters/only-letters.pipe.ts ***!
  \****************************************************************/
/*! exports provided: OnlyLettersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLettersPipe", function() { return OnlyLettersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OnlyLettersPipe {
    transform(value) {
        return value.replace(/[^a-zA-Z\u00C0-\u00FF ]+/g, '');
    }
}
OnlyLettersPipe.ɵfac = function OnlyLettersPipe_Factory(t) { return new (t || OnlyLettersPipe)(); };
OnlyLettersPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "onlyLetters", type: OnlyLettersPipe, pure: true });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map