import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter-with-ngrx/counter/counter.component';
import { CounterButtonsComponent } from './counter-with-ngrx/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-with-ngrx/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-with-ngrx/state/counter.reducer';
import { CounterCustomInputComponent } from './counter-with-ngrx/counter-custom-input/counter-custom-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterCustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
