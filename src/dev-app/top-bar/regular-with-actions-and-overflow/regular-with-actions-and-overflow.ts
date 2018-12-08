import { Component } from "@angular/core";
import { TopBarMenuAction } from "@angular/material/top-bar";

@Component({
    moduleId: module.id,
    selector: 'regular-with-actions-and-overflow',
    templateUrl: 'regular-with-actions-and-overflow.html',
    styleUrls: ['regular-with-actions-and-overflow.css']
})
export class RegularTopBarWithOverflowAndActionButtonsDemo {
    menuActions: TopBarMenuAction[];
    overflowMenuActions: TopBarMenuAction[];

    constructor () {
        this.menuActions = [
            {
                matIcon: 'search',
                menuText: 'Search for User',
                onClick: () => { console.log('Search button clicked'); }
            },
            {
                matIcon: 'person',
                menuText: 'Account',
                onClick: () => { console.log('Account button clicked'); }
            }
        ];

        this.overflowMenuActions = [
            {
                matIcon: 'autorenew',
                menuText: 'Refresh',
                onClick: () => { console.log('Refresh button clicked'); }
            },
            {
                matIcon: 'credit_card',
                menuText: 'Payment Details',
                onClick: () => { console.log('Payment Details button clicked'); }
            }
        ];
    }
}