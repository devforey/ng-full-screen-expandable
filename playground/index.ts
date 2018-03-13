/**
 * This is only for local test
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {SampleModule} from 'ng-full-screen-expandable';

@Component({
    selector: 'app',
    styles: [
            `
            .expandable {
                position: absolute;
                height: 50px;
                width: 50px;
                top: 50px;
                left: 100px;
            }
        `
    ],
    template: `
        <ng-full-screen-expandable class="expandable"></ng-full-screen-expandable>`
})
class AppComponent {
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, SampleModule]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
