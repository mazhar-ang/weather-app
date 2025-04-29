import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { SharedModule } from '../shared/shared.module';
import { AddStoreComponent } from './add-store/add-store.component';


@NgModule({
  declarations: [
    StoreListComponent,
    StoreViewComponent,
    AddStoreComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule
  ]
})
export class StoresModule { }
