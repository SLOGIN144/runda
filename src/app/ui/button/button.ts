import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  vrsta = input('glavni');   // 'glavni', 'opeka' ali 'obroba'
}
