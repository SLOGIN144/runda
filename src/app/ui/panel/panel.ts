import { Component, input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel {
  naslov = input('');
}
