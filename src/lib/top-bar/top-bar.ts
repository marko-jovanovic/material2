import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    HostListener,
    OnInit
} from "@angular/core";
import {
    CanColor,
    ThemePalette
} from "@angular/material/core";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

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

@Component({
    moduleId: module.id,
    selector: 'mat-top-bar',
    exportAs: 'matTopBar',
    templateUrl: 'top-bar.html',
    styleUrls: ['top-bar.css'],
    inputs: ['type'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTopBar implements TopBarTheme, OnInit {
    _headerStyling: any = {};
    _sidebarSize = {};
    _currentPosition = 0;

    @Input() menuTitle: string = '';
    @Input() color: ThemePalette = DEFAULT_TOP_BAR_COLOR;
    @Input() type: TopBarType = DEFAULT_TOP_BAR_TYPE;
    @Input() menuActions: TopBarMenuAction[] = [];
    @Input() overflowMenuActions: TopBarMenuAction[] = [];
    @Input() sideMenuActions: TopBarMenuAction[] = [];
    @Input() hideable: boolean = false;
    @Input() prominent: boolean = false;

    constructor() {}

    ngOnInit() {
        this._setupTopBarClasses();
    }

    _toggleTopBarMenu(opened: boolean) {
        let openedSidebar = {
            'width': '100%',
            'height': '100%',
            'background-color': 'transparent'
        };

        let closedSidebar = {
            'width': '0%',
            'height': '0%'
        };

        this._sidebarSize = opened ? openedSidebar : closedSidebar;
    }

    _setupTopBarClasses() {
        this._headerStyling[`mat-${this.color}`] = true;
        this._headerStyling[`mat-top-bar-${this.type}`] = true;
        this._headerStyling['mat-top-bar-container-hideable'] = this.hideable;
        this._headerStyling['mat-top-bar-prominent'] = this.prominent;
    }

    @HostListener('window:scroll') checkScroll() {
        const scrollPosition = window.pageYOffset;

        this._headerStyling['mat-top-bar-container-hideable--hidden'] = this.hideable && scrollPosition > this._currentPosition;
        this._currentPosition = scrollPosition;
    }
}