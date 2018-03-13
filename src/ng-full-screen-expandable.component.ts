import {Component, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'ng-full-screen-expandable',
    animations: [
        trigger('screen', [
            state('default', style({
                transform: 'scale(1)'
            })),
            state('full', style({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
            })),
            transition('default => full', animate('100ms ease-in')),
            transition('full => default', animate('100ms ease-out'))
        ])
    ],
    template: `
        <ng-content></ng-content>
    `
})
export class NgFullScreenExpandableComponent implements OnChanges {

    @HostBinding('@screen') public screen = 'default';

    @Input('expanded') public expanded = false;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('expanded')) {
            this.screen = changes['expanded'].currentValue ? 'full' : 'default';
        }
    }

}
