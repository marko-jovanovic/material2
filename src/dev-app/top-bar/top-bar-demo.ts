import { Component } from "@angular/core";
import { MatBasicTopBar, TopBarMenuAction } from "@angular/material/top-bar";

@Component({
    moduleId: module.id,
    selector: 'top-bar-demo',
    templateUrl: 'top-bar-demo.html',
    styleUrls: ['top-bar-demo.css']
})
export class TopBarDemo {
    menuActions: TopBarMenuAction[];
    overflowMenuActions: TopBarMenuAction[];
    contextualActionBar: MatBasicTopBar;

    constructor () {
        this.contextualActionBar = {
            menuActions: [
                {
                    matIcon: 'delete',
                    menuText: 'Delete Action',
                    onClick: () => { console.log('Delete button clicked'); }
                },
                {
                    matIcon: 'edit',
                    menuText: 'Edit',
                    onClick: () => { console.log('Edit button clicked'); }
                }
            ],
            menuTitle: 'Action Menu',
            overflowMenuActions: [
                {
                    matIcon: 'insert_photo',
                    menuText: 'Go to Gallery',
                    onClick: () => { console.log('Go to Gallery button clicked'); }
                },
                {
                    matIcon: 'insert_comment',
                    menuText: 'Comment',
                    onClick: () => { console.log('Comment button clicked'); }
                }
            ]
        }

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