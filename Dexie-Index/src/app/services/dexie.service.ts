import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService {
  private dx!: Dexie

  constructor() { 
    this.initDatabase();
  }

   /**
   * Inits database
   */

   
   private initDatabase() {
    // Define your database schema
    this.dx = new Dexie('Pets-DB');
    this.dx.version(1).stores({
      pets : '++id,color,breed'
    })
  }
}
