import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter } from "@angular/core";
import { CanColor, ThemePalette } from "@angular/material/core";
import { MatSidenav } from"@angular/material/sidenav";

/** Default color palette for top bar to primary */
const DEFAULT_TOP_BAR_COLOR: ThemePalette = 'primary';

/** Default top bar type to regular */
const DEFAULT_TOP_BAR_TYPE: TopBarType = 'regular';

export type TopBarType = 'regular' | 'prominent' | 'dense' | 'prominent-dense';

export interface TopBarTheme extends CanColor {
    type: TopBarType;
}

export interface TopBarMenuAction {
    matIcon: string;
    menuText: string;
    onClick: Function;
}

export abstract class MatBasicTopBar {
    menuTitle: string = '';
    menuActions: TopBarMenuAction[];
    overflowMenuActions: TopBarMenuAction[];
}

@Component({
    moduleId: module.id,
    selector: 'mat-top-bar',
    exportAs: 'matTopBar',
    templateUrl: 'top-bar.html',
    styleUrls: ['top-bar.css'],
    inputs: [ 'menuTitle', 'menuActions', 'overflowMenuActions' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTopBar extends MatBasicTopBar implements TopBarTheme {
    @Input() color: ThemePalette = DEFAULT_TOP_BAR_COLOR;
    @Input() type: TopBarType    = DEFAULT_TOP_BAR_TYPE;
    @Input() sideMenuActions: TopBarMenuAction[] = [];
    @Input() contextualActionBar: MatBasicTopBar;

    _sidebarSize = {};
    
    constructor () {
        super();
    }
    
    _toggleTopBarMenu(opened: boolean) {
        let openedSidebar = {
            'width':  '100%',
            'height': '100%',
            'background-color': 'transparent'
        };

        let closedSidebar = {
            'width':  '0%',
            'height': '0%'
        };

        this._sidebarSize = opened ? openedSidebar : closedSidebar;
    }

    _setupTopBarClasses() {
        let topBarClasses: any = {};
        topBarClasses[`mat-${this.color}`] = true;
        topBarClasses[`mat-top-bar-${this.type}`] = true;

        return topBarClasses;
    }
}