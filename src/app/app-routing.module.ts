import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {EventComponent} from './event/event.component';
import {UserComponent} from './user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const ROUTES: Routes=[
  {path:'home',component: HomeComponent},
  {path:'product',component: ProductComponent},
  {path:'event',component: EventComponent},
  {path:'user',component: UserComponent},
  {path:'',component: HomeComponent},
  {path:'**',component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
