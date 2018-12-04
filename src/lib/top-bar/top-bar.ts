import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'mat-top-bar',
    exportAs: 'matTopBar',
    templateUrl: 'top-bar.html',
    styleUrls: ['top-bar.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatTopBar {

}