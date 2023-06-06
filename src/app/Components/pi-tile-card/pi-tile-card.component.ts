import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pi-tile-card',
  templateUrl: './pi-tile-card.component.html',
  styleUrls: ['./pi-tile-card.component.scss'],
})
export class PiTileCardComponent {
  @Input() date!: string;
  @Input() day!: string;
  @Input() task!: string;
  @Input() assignedTo!: string;
}
