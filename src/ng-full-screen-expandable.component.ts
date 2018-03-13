import {Component, OnInit} from '@angular/core';
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
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('full', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('default => full', animate('100ms ease-in')),
            transition('full => default', animate('100ms ease-out'))
        ])
    ],
    template: `
        <div [@screen]="screen"><h1>Hi</h1></div>`
})
export class NgFullScreenExpandableComponent implements OnInit {

    public screen = 'default';

    public ngOnInit(): void {
        setTimeout(() => {
            this.screen = 'full';
        }, 2000);
    }

}
