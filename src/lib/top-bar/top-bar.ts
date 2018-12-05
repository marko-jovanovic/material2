import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
import { CanColor, ThemePalette } from "@angular/material/core";

/** Default color palette for top bar to primary */
const DEFAULT_TOP_BAR_COLOR: ThemePalette = 'primary';

/** Default top bar type to regular */
const DEFAULT_TOP_BAR_TYPE: TopBarType = 'regular';

export type TopBarType = 'regular' | 'prominent' | 'dense' | 'prominent-dense';

interface TopBarTheme extends CanColor {
    type: TopBarType;
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
    @Input() color: ThemePalette = DEFAULT_TOP_BAR_COLOR;
    @Input() type: TopBarType    = DEFAULT_TOP_BAR_TYPE;

    constructor () {}

    _setTopBarClasses() {
        let topBarClasses: any = {};
        topBarClasses[`mat-${this.color}`] = true;
        topBarClasses[`mat-top-bar-${this.type}`] = true;

        return topBarClasses;
    }
}