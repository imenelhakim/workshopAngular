import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DisplayListProductComponent} from './display-list-product/display-list-product.component';
import {DisplayListEventComponent} from './display-list-event/display-list-event.component';
import {DisplayDetailEventComponent} from './display-detail-event/display-detail-event.component';
import {DisplayDetailProductComponent} from './display-detail-product/display-detail-product.component';


const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: DisplayListProductComponent},
  {path: 'event', component: DisplayListEventComponent},
  {path: 'event/:id', component: DisplayDetailEventComponent},
  {path: 'product/:id', component: DisplayDetailProductComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES) //parcours du tableau
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
