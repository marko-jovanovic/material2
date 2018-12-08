import { Component } from "@angular/core";
import { TopBarMenuAction } from "@angular/material/top-bar";

@Component({
    moduleId: module.id,
    selector: 'prominent',
    templateUrl: 'prominent.html',
    styleUrls: ['prominent.css']
})
export class ProminentTopBarDemo {
    menuActions: TopBarMenuAction[];
    overflowMenuActions: TopBarMenuAction[];
    sideMenuMainActions: TopBarMenuAction[];
    sideMenuExtraActions: TopBarMenuAction[];

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

        this.sideMenuMainActions = [
            {
                matIcon: 'home',
                menuText: 'Home',
                onClick: () => { console.log('Home button clicked'); }
            },
            {
                matIcon: 'mood',
                menuText: 'I am Happy',
                onClick: () => { console.log('Wee I am Happy!'); }
            }
        ];

        this.sideMenuExtraActions = [
            {
                matIcon: 'notifications',
                menuText: 'Notifications',
                onClick: () => { console.log('Notification button clicked'); }
            },
            {
                matIcon: 'person',
                menuText: 'My Account',
                onClick: () => { console.log('My account button clicked'); }
            }
        ];
    }
}