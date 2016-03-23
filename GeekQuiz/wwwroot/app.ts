import {bootstrap, Component, View, NgFor, NgClass, AfterViewInit, Inject} from
'angular2/angular2';
import {Http, HTTP_BINDINGS, Headers} from 'angular2/http';
@Component({
    selector: 'geekquiz-app',
    viewBindings: [HTTP_BINDINGS]
})
class AppComponent {
    public answered = false;
    public title = "loading question...";
    public options = [];
    public correctAnswer = false;
    public working = false;
    constructor( @Inject(Http) private http: Http) {
    }
    answer() {
        return this.correctAnswer ? 'correct' : 'incorrect';
    }
}
bootstrap(AppComponent);