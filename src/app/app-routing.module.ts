import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ShoppingComponent
  },
  {
    path:"sell",
    component:SellComponent
  },
  {
    path: "**",
    component: ShoppingComponent
    // TODO: 建立 NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
