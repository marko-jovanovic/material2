import { Component } from "@angular/core";
import { TopBarMenuAction } from "@angular/material/top-bar";

@Component({
    moduleId: module.id,
    selector: 'top-bar-demo',
    templateUrl: 'top-bar-demo.html',
    styleUrls: ['top-bar-demo.css']
})
export class TopBarDemo {
    menuActions: TopBarMenuAction[];

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
    }
}