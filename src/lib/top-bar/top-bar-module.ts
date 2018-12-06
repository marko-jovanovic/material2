import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { A11yModule } from "@angular/cdk/a11y";
import { LayoutModule } from "@angular/cdk/layout";
import { MatCommonModule }  from '@angular/material/core';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTopBar } from "./top-bar";

@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        LayoutModule,
        LayoutModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatCommonModule,
    ],
    exports: [ 
        MatTopBar, MatCommonModule
    ],
    declarations: [
        MatTopBar
    ]
})
export class MatTopBarModule {}