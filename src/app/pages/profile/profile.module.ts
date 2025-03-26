import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../material.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class ProfileModule { }
