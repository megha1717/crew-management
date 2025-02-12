import { Component, Signal, computed, effect, signal } from '@angular/core';


@Component({
  selector: 'app-signal',
  // standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor(){
    effect(() => {
      console.log("Count Updated", this.count())
    });
  }

  increment(){
    this.count.update(value => value + 1);
  }

}
