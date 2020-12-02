import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
// import {EventComponent} from './event/event.component';
import {UserComponent} from './user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DisplayListProductComponent} from './display-list-product/display-list-product.component';
import {DisplayListEventComponent} from './display-list-event/display-list-event.component';
// import {AddProductComponent} from './add-product/add-product.component';


const ROUTES: Routes=[
  {path:'home',component: HomeComponent},
  {path:'product',component: DisplayListProductComponent},
  // {path:'addproduct',component: AddProductComponent },
  {path:'event',component: DisplayListEventComponent},
  {path:'user',component: UserComponent},
  {path:'',component: HomeComponent},
  {path:'**',component: PageNotFoundComponent}
];

//
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
