import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
  vrsta = input('mild');   // mild, spicy, extreme, javna, zasebna
}
