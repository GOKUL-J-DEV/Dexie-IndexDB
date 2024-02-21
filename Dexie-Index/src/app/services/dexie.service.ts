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
    this.dx = new Dexie('dexie-db');
    this.dx.version(1).stores({
      employee : '++id,name,age,joiningDate'
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

  public async getEmployeeData(){
    const employeeData = await this.dx.table('employee').toArray();
    return employeeData
  }

  public async storeEmployeeData(empData:any){
    await this.dx.table('employee').add(empData);
  }

  public async deleteEmployeeData(empId:string){
    await this.dx.table('employee').delete(empId)
  }

  public async resetEmployeeData(){
    await this.dx.table('employee').clear();
  }

  public async getEmployeeByName(empName:string){
   const empData =  await this.dx.table('employee').where('name').equalsIgnoreCase(empName).toArray();
   return empData
  }

  }
  
