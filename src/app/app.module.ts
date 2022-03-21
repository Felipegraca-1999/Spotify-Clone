import { FooterComponent } from './shared/components/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './shared/components/menu-lateral/menu-lateral.component';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'ng2-tooltip-directive';
import { HeaderComponent } from './shared/components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
