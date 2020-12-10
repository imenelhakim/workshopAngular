import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {EventComponent} from './event/event.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {DisplayListProductComponent} from './display-list-product/display-list-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {DisplayListEventComponent} from './display-list-event/display-list-event.component';
import {AddEventComponent} from './add-event/add-event.component';
import {DisplayDetailEventComponent} from './display-detail-event/display-detail-event.component';
import {HttpClientModule} from '@angular/common/http';
import { DisplayDetailProductComponent } from './display-detail-product/display-detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    EventComponent,
    PageNotFoundComponent,
    FooterComponent,
    DisplayListProductComponent,
    AddProductComponent,
    DisplayListEventComponent,
    AddEventComponent,
    DisplayDetailEventComponent,
    DisplayDetailProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent] //composant de démarrage
})
export class AppModule {
}
