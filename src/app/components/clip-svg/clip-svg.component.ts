import {Component, Input, OnInit} from '@angular/core';
import {GridsterItem} from "angular-gridster2";
import {Color} from "../../app.component";

@Component({
  selector: 'app-clip-svg',
  templateUrl: './clip-svg.component.svg',
  styleUrls: ['./clip-svg.component.scss']
})
export class ClipSvgComponent implements OnInit {
  @Input() polygons: GridsterItem[] = [];

  margin = 10;

  constructor() { }

  ngOnInit(): void {
  }
  showPoligon(polygon: GridsterItem): boolean {
    console.log();
    if(!polygon['color']) {
        return true;
    }
    const colors: [Color, Color?] = polygon['color'];
    return polygon['color'].length === 1 && polygon['color'][0] === '#00000000'
      || colors.length > 1 && (colors[0] === '#00000000' || colors[1] === '#00000000');
  }
}
