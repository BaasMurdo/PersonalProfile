import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { TabsBarComponent } from './components/tabs-bar/tabs-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    TopNavComponent,
    SideBarComponent,
    ExplorerComponent,
    TabsBarComponent,
    BottomBarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
