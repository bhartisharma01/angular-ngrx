import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent implements OnInit {
  value:number
  constructor(private store:Store<{counter: CounterState}>) { }

  ngOnInit(): void {
    console.log("text called");
    
  }
  customIncrement(){
    this.store.dispatch(customIncrement({value: +this.value}))
  }


}
