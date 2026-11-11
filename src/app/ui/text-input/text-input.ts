import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss'
})
export class TextInput {
  oznaka = input('');
  tip = input('text');      // text, password, email
  namig = input('');        // placeholder
}
