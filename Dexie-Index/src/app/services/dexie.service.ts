import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  private dx!: Dexie

  constructor() { 
    super("DexieDB");
    this.initDatabase();
  }

   /**
   * Inits database
   */

   
   private initDatabase() {
    // Define your database schema
    this.dx = new Dexie('pets-db');
    this.dx.version(1).stores({
      pets : '++id,color,breed'
    })

    this.dx.open()
    .then(data => console.log("DB Opened"))
    .catch(err => console.log(err.message));
  }

  public async getPetsData(){
    const petsData = await this.dx.table('pets').toArray();
    return petsData
  }

  public async storePetData(petData:any){
    await this.dx.table('pets').add(petData);
  }

  public async deletePetData(petId:string){
    await this.dx.table('pets').delete(petId)
  }

  public async resetPetData(){
    await this.dx.table('pets').clear();
  }

  }
  
