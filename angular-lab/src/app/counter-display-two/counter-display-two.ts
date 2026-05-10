import { Component } from '@angular/core';
import { CounterService } from '../counter';

@Component({
  selector: 'app-counter-display-two',
  standalone: false,
  templateUrl: './counter-display-two.html',
  styleUrl: './counter-display-two.css'
})
export class CounterDisplayTwoComponent {
  constructor(public counterService: CounterService) {}
}
