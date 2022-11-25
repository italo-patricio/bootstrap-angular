import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    NotFoundComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
