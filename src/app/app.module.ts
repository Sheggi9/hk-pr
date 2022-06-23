import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GridsterModule} from "angular-gridster2";
import { ClipSvgComponent } from './components/clip-svg/clip-svg.component';
import {FormsModule} from "@angular/forms";
import { IconSvgComponent } from './components/icon-svg/icon-svg.component';
import { TemplatesComponent } from './components/templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    ClipSvgComponent,
    IconSvgComponent,
    TemplatesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GridsterModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
