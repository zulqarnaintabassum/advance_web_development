import { Component } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-counter-display-one',
  standalone: false,
  templateUrl: './counter-display-one.html',
  styleUrl: './counter-display-one.css'
})
export class CounterDisplayOneComponent {
  constructor(public counterService: CounterService) {}
}
