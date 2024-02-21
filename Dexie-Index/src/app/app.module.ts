import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './projects/pets/pets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMethodsComponent } from './learning/demo-methods/demo-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    DemoMethodsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
