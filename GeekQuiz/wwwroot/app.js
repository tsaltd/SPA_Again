var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.answered = false;
        this.title = "loading question...";
        this.options = [];
        this.correctAnswer = false;
        this.working = false;
    }
    AppComponent.prototype.answer = function () {
        return this.correctAnswer ? 'correct' : 'incorrect';
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'geekquiz-app',
            viewBindings: [http_1.HTTP_BINDINGS]
        }),
        __param(0, angular2_1.Inject(http_1.Http))
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
