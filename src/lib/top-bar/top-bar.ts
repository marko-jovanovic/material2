import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
import { CanColor, ThemePalette } from "@angular/material/core";

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
    inputs: [ 'type' ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTopBar implements TopBarTheme {
    @Input() title: string = '';
    @Input() color: ThemePalette = DEFAULT_TOP_BAR_COLOR;
    @Input() type: TopBarType    = DEFAULT_TOP_BAR_TYPE;
    @Input() menuActions: TopBarMenuAction[] = [];

    constructor () {}

    _setupTopBarClasses() {
        let topBarClasses: any = {};
        topBarClasses[`mat-${this.color}`] = true;
        topBarClasses[`mat-top-bar-${this.type}`] = true;

        return topBarClasses;
    }
}