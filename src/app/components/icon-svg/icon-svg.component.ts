import {Component, Input, OnInit} from '@angular/core';
import {Icon} from "./icons";
import {Color} from "../../app.component";

@Component({
  selector: 'app-icon-svg',
  templateUrl: './icon-svg.component.svg',
  styleUrls: ['./icon-svg.component.scss']
})
export class IconSvgComponent implements OnInit {
  @Input() icon: Icon = {} as Icon;
  @Input() color!: Color;
  constructor() { }

  ngOnInit(): void {
  }

}
