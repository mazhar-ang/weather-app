import { Injectable } from '@angular/core';
import { Store } from '../model/store.model';
import { Observable, of } from 'rxjs'; // ✅ Make sure 'of' is imported

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[] = [
    {
      id: 1,
      name: 'Al Noor Store',
      company: 'Techmart LLC',
      contact: '+971 50 123 4567',
      address: 'Al Barsha, Dubai',
      createdOn: new Date('2024-01-10'),
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/768px-Google-flutter-logo.svg.png'
    },
    
    {
      id: 2,
      name: 'Blue Mart',
      company: 'Blue Chain Group',
      contact: '+971 55 234 5678',
      address: 'Khalidiya, Abu Dhabi',
      createdOn: new Date('2024-02-05'),
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/768px-Google-flutter-logo.svg.png'
    },
    {
      id: 3,
      name: 'Fresh One',
      company: 'Grocery Global',
      contact: '+971 56 789 1234',
      address: 'Al Ain Central, Al Ain',
      createdOn: new Date('2024-03-22'),
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/768px-Google-flutter-logo.svg.png'
    }
  ];
  

  getStores(): Observable<Store[]> {
    return of([...this.stores]);
  }

  getStoreById(id: number): Store | undefined {
    return this.stores.find(s => s.id === id);
  }
}
