import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { AddStoreComponent } from './add-store/add-store.component';

const routes: Routes = [
  { path: '', component: StoreListComponent },
  { path: 'add-store', component: AddStoreComponent },
  { path: ':id', component: StoreViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
