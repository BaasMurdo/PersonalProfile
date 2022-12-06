import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent,
    GithubComponent,
    HomeComponent,
    SettingsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
