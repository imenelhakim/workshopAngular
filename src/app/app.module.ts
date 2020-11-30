import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    EventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
