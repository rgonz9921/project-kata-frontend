import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProfileModule} from "./pages/profile/profile.module";
import {HomeModule} from "./pages/home/home.module";
import {EventModule} from "./pages/event/event.module";
import {AdminModule} from "./pages/admin/admin.module";
import {HomeComponent} from "./pages/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProfileModule,
    HomeModule,
    EventModule,
    AdminModule,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
