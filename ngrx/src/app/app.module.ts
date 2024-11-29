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
import { HooksComponent } from './counter-with-ngrx/hooks/hooks.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { AppReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterCustomInputComponent,
    HooksComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // StoreModule.forRoot({counter: counterReducer}),
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
