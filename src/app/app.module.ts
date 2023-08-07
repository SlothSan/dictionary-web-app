import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsComponent } from './shared/icons/icons.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FontChangerComponent } from './core/components/header/font-changer/font-changer.component';
import { ThemeToggleComponent } from './core/components/header/theme-toggle/theme-toggle.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    HeaderComponent,
    FontChangerComponent,
    ThemeToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
