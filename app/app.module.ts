import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WorkoutRunnerComponent } from './workout-runner.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WorkoutRunnerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
