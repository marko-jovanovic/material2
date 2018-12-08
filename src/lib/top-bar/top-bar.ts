import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, AfterViewInit } from "@angular/core";
import { CanColor, ThemePalette } from "@angular/material/core";
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver, Breakpoints, MediaMatcher } from "@angular/cdk/layout";
import { HostListener } from "@angular/core";
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
export class MatTopBar implements TopBarTheme, AfterViewInit {

    @Input() menuTitle: string = '';
    @Input() color: ThemePalette = DEFAULT_TOP_BAR_COLOR;
    @Input() type: TopBarType = DEFAULT_TOP_BAR_TYPE;
    @Input() menuActions: TopBarMenuAction[] = [];
    @Input() overflowMenuActions: TopBarMenuAction[] = [];
    @Input() sideMenuActions: TopBarMenuAction[] = [];
    @HostListener('window:resize', ['$event'])
    onResize(event?: any) {
        event = event;
        this._windowResized();
    }

    _sidebarSize = {};
    _overflowMenuSize: number;
    _menuSize: number;
    _lastChangedPx = 0;
    constructor() {

    }
    ngAfterViewInit() {
        this._overflowMenuSize = this.overflowMenuActions.length;
        this._menuSize = this.menuActions.length;
        this.onResize(2);
    }

    _windowResized() {

        if (this._isSmallestScreen()) {
            this._giveAllButtonsToOverflowMenu();
        } else if (this._isSmallScreen()) {
            this._resetButtons();
            this._giveAllButOneButtonsToOverflowMenu();
        } else if (this._isMediumScreen()) {
            this._resetButtons();
            this._giveOneButtonToOverflowMenu();
        } else {
            this._resetButtons();
        }
    }

    _resetButtons() {
        while (this.overflowMenuActions.length != this._overflowMenuSize) {
            this._setLastChangedPX();
            this.menuActions.splice(0, 0, this.overflowMenuActions[0]);
            this.overflowMenuActions.splice(0, 1);
        }
    }

    _giveAllButtonsToOverflowMenu() {

        while (this.menuActions.length > 0) {
            this._giveButtonToMenu();
        }
    }

    _giveOneButtonToOverflowMenu() {

        if (this.menuActions.length > 0 && this._lastChangedPx != window.innerWidth) {
            this._giveButtonToMenu();
        }
    }

    _giveAllButOneButtonsToOverflowMenu() {
        while (this.menuActions.length > 1) {
           this._giveButtonToMenu();
        }
    }

    _giveButtonToMenu(){
        this._setLastChangedPX();
        this.overflowMenuActions.splice(0, 0, this.menuActions[0]);
        this.menuActions.splice(0, 1);
    }

    _isSmallestScreen() {
        return (window.innerWidth < 450);
    }
    _isMediumScreen() {
        return (window.innerWidth > 768 && window.innerWidth < 1023)
    }
    _isSmallScreen() {
        return (window.innerWidth > 426 && window.innerWidth < 769);
    }
    _setLastChangedPX() {
        this._lastChangedPx = window.innerWidth;
    }


      /*giveOneButtonToMenu() {

        if (this.overflowMenuActions.length > 0 && this.overflowMenuActions.length != this._overflowMenuSize && this._lastChangedPx != window.innerWidth) {
            this._setLastChangedPX();
            this.menuActions.splice(0, 0, this.overflowMenuActions[0]);
            this.overflowMenuActions.splice(0, 1);
        }
    }
*/

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
        let topBarClasses: any = {};
        topBarClasses[`mat-${this.color}`] = true;
        topBarClasses[`mat-top-bar-${this.type}`] = true;

        return topBarClasses;
    }
}
