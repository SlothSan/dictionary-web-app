import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsComponent } from './shared/icons/icons.component';
import { HeaderComponent } from './core/header/header.component';
import { FontChangerComponent } from './core/components/font-changer/font-changer.component';
import { ThemeToggleComponent } from './core/components/theme-toggle/theme-toggle.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
