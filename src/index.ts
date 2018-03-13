import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SampleComponent} from './sample.component';
import {SampleDirective} from './sample.directive';
import {SamplePipe} from './sample.pipe';
import {SampleService} from './sample.service';
import {NgFullScreenExpandableComponent} from './ng-full-screen-expandable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        NgFullScreenExpandableComponent,
        SampleComponent,
        SampleDirective,
        SamplePipe
    ],
    exports: [
        NgFullScreenExpandableComponent,
        SampleComponent,
        SampleDirective,
        SamplePipe
    ]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    }
}
