import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from "./pages/event/event.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event-detail/:id', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: false, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
