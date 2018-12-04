import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";
import { A11yModule } from "@angular/cdk/a11y";
import { LayoutModule } from "@angular/cdk/layout";
import { MatCommonModule }  from '@angular/material/core';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatTopBar } from "./top-bar";

@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        LayoutModule,
        PortalModule,
        MatSidenavModule,
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