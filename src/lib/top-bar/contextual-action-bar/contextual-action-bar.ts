import { ViewEncapsulation, Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { MatBasicTopBar } from "../top-bar";

@Component({
    moduleId: module.id,
    selector: 'mat-contextual-action-bar',
    exportAs: 'matContextualActionBar',
    templateUrl: 'contextual-action-bar.html',
    styleUrls: ['contextual-action-bar.css'],
    inputs: [ 'menuTitle', 'menuActions', 'overflowMenuActions' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatContextualActionBar extends MatBasicTopBar implements OnInit {
    
    constructor () {
        super();
    }

    ngOnInit() {
        console.log("MatContextualActionBar");
    }
}