import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './projects/pets/pets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMethodsComponent } from './learning/demo-methods/demo-methods.component';

const routes: Routes = [
  {
  path:'pets', component : PetsComponent,
  },
  {
    path:'methods', component : DemoMethodsComponent,
  },
  {
    path:'methods/:empName', component : DemoMethodsComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
