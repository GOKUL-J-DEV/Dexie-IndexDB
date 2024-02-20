import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DexieService } from 'src/app/services/dexie.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {
  public petsForm!: FormGroup;
  public petsArray: [] = [];

  constructor(private dx: DexieService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.petsForm = this.fb.group({
      breed: [''],
      color: ['']
    })
    this.retrievePets();
  }

  public addPet() {
    const recordData = this.petsForm.value
    this.dx.storePetData({ color: recordData.color, breed: recordData.breed }).then((data)=>{
      this.retrievePets();
      this.petsForm.reset();
    })
  }

  public deletePet(petId: string) {
    this.dx.deletePetData(petId).then((data)=>{
      this.retrievePets();
    })
  }

  public retrievePets(){
    this.dx.getPetsData().then((data: any) => {
      this.petsArray = data;
      console.log(this.petsArray)
    }
    )
  }

  public resetPetData(){
    this.dx.resetPetData().then((data:any)=>{
      this.retrievePets()
    })
  }
}
