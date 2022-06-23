import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GridsterItem} from "angular-gridster2";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  @Output() sendTemplate: EventEmitter<GridsterItem> = new EventEmitter();
  templates!: GridsterItem[];

  constructor() { }

  ngOnInit(): void {
    this.templates = [

    ]
  }

  setTemplate(index: number): void {
    this.sendTemplate.emit(this.templates[index])
  }
}
