import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counter$: Observable<CounterState>;
  constructor(private store: Store<{counter: CounterState}>){}
  ngOnInit(){
    this.counter$ = this.store.select('counter');
    console.log("counter calledd");
    
  }
}
