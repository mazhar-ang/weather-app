import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent {
  requestForm!: FormGroup;

  companies = [
    { name: 'Company A', code: 'A' },
    { name: 'Company B', code: 'B' }
  ];
  

  constructor(private storeService: StoreService, private fb: FormBuilder, private location: Location) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      company: [null, Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: [''],
      contactName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      srDirector: [null, Validators.required],
      director: [null, Validators.required],
      supervisor: [null, Validators.required],
      generalManager: [null, Validators.required],
    });
  }

  goBack() {
    this.location.back();
  }


 
  
}
