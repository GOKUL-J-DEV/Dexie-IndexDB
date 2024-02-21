import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './projects/pets/pets.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
  path:'pets', component : PetsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
