import { Component } from '@angular/core';
import { MessageService } from "./messages/message.service";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    providers: [MessageService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return []; };
    return AppComponent;
}());
export { AppComponent };
