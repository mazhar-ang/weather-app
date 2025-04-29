import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Store } from 'src/app/model/store.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent {
  @ViewChild('dt') table: any;
  stores: any[] = [];
  searchText = '';

  constructor(private storeService: StoreService, private confirmationService: ConfirmationService, private router: Router) {}

  ngOnInit(): void {
    this.storeService.getStores().subscribe((data) => {
      this.stores = data;
    });
    
  }

  getMenuItems(store: Store): MenuItem[] {
    return [
      {
        label: 'View Store',
        icon: 'pi pi-eye',
        command: () => this.viewStore(store)
      },
      {
        label: 'Edit Store',
        icon: 'pi pi-pencil',
        command: () => this.editStore(store)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.confirmDelete(store)
      }
    ];
  }
  

  viewStore(store: any) {}
  editStore(store: any) {}
  deleteStore(store: any) {}

  filterStores() {
    this.table.filterGlobal(this.searchText, 'contains');
  }

  onAddStore() {
    this.router.navigate(['stores/add-store']);
  }

  confirmDelete(store: Store) {
    this.confirmationService.confirm({
      message: `Are you sure you want to “<strong>Delete</strong>” this store group ”<strong>${store.name}</strong>” ?`,
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.stores = this.stores.filter(s => s.id !== store.id);
      }
    });
  }
  
}
