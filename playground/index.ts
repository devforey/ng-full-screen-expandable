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
                background: blue;
                position: absolute;
                height: 50px;
                width: 50px;
                top: 50px;
                left: 100px;
            }
        `
    ],
    template: `
        <ng-full-screen-expandable (click)="expanded = !expanded"
                                   [expanded]="expanded"
                                   class="expandable">
            What is up
        </ng-full-screen-expandable>`
})
class AppComponent {
    public expanded = false;
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, SampleModule]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
