import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { A11yModule } from "@angular/cdk/a11y";
import { LayoutModule, BreakpointObserver, MediaMatcher } from "@angular/cdk/layout";
import { MatCommonModule }  from '@angular/material/core';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTopBar } from "./top-bar";
import { HostListener } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        A11yModule,
        LayoutModule,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatCommonModule
        
    ],
    providers: [
        BreakpointObserver,
        MediaMatcher,
        HostListener
    ],
    exports: [ 
        MatTopBar, MatCommonModule        
    ],
    declarations: [
        MatTopBar
    ]
})
export class MatTopBarModule {}