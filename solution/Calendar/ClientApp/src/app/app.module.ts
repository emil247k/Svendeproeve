import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
    ]),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
