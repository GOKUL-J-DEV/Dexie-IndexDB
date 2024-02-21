import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Route } from '@angular/router';
import { DexieService } from 'src/app/services/dexie.service';

@Component({
  selector: 'app-demo-methods',
  templateUrl: './demo-methods.component.html',
  styleUrls: ['./demo-methods.component.css']
})
export class DemoMethodsComponent {
  public empForm!: FormGroup;
  public empData: [] = [];
  public canEdit!:boolean;

  @Input() empName = '';

  constructor(private dx: DexieService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.empForm = this.fb.group({
      name: [''],
      role: [''],
      age: [''],
      date: ['']
    })
    if(this.empName){
      this.canEdit = true;
      this.getEmployeeById(this.empName)
    }else{
      this.retrieveEmpData();
    }

  }

  public addEmployee() {
    const recordData = this.empForm.value
    this.dx.storeEmployeeData({ ...recordData }).then((data) => {
      this.retrieveEmpData();
      this.empForm.reset();
    })
  }

  public deleteEmployee(petId: string) {
    this.dx.deleteEmployeeData(petId).then((data) => {
      this.retrieveEmpData();
    })
  }

  public retrieveEmpData() {
    this.dx.getEmployeeData().then((data: any) => {
      this.empData = data;
    }
    )
  }

  public resetEmpData() {
    this.dx.resetEmployeeData().then((data: any) => {
      this.retrieveEmpData()
    })
  }

  public getEmployeeById(empName:string){
    console.log(empName)
    this.dx.getEmployeeByName(empName).then((data:any)=>{
      console.log(data)
      this.empForm.patchValue({
        ...data[0]
      })
    })
  }

  public editEmployee() {
    const recordData = this.empForm.value
    this.dx.editEmployeeData(this.empName,{ ...recordData }).then((data) => {
    })
  }
}
