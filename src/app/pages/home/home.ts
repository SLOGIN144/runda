import { Component } from '@angular/core';
import { Button } from '../../ui/button/button';
import { Panel } from '../../ui/panel/panel';
import { Badge } from '../../ui/badge/badge';
import { TextInput } from '../../ui/text-input/text-input';
import { StatCard } from '../../ui/stat-card/stat-card';

@Component({
  selector: 'app-home',
  imports: [Button, Panel, Badge, TextInput, StatCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
