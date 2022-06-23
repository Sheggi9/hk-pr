import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from "angular-gridster2";
import {GridsterItemComponentInterface} from "angular-gridster2/lib/gridsterItem.interface";
import {Icon, iconName, iconNames, icons, IconsStore} from "./components/icon-svg/icons";

export type TextPosition = 'top_left' | 'top_center' | 'top_right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
export type Color = '#000000' | '#FFFFFF' | '#69FDC3' | '#3F9875' | '#8104B3'  | '#4D026B' | '#00000000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'new-builder';
  options: GridsterConfig;
  dashboard: GridsterItem[];
  textPosition: TextPosition = 'bottom_left';
  selectedFontSize: string = '16px';
  isEditMode: boolean = true;
  iconNames = iconNames;
  iconsStore = icons;
  isShowTemplates = true
  isPaletteSettings = false

  wrapperW = 1280;
  wrapperH = 800;
  maxCols = 8;
  maxRows = 5;

  activeGridCardIndex: number| null = null;
  activeCard: GridsterItem | null = null;
  text: string = '';
  isNewCard =  false;

  colors: [Color, Color?][] = [
    ['#000000'],
    ['#FFFFFF'],
    ['#69FDC3'],
    ['#3F9875'],
    ['#8104B3'],
    ['#4D026B'],
    ['#00000000'],
    ['#000000', '#FFFFFF'],
    ['#FFFFFF', '#000000'],
    ['#69FDC3', '#8104B3'],
    ['#3F9875', '#4D026B'],
    ['#8104B3', '#69FDC3'],
    ['#4D026B', '#3F9875'],
    ['#000000', '#00000000'],
    ['#FFFFFF', '#00000000'],
    ['#69FDC3', '#00000000'],
    ['#3F9875', '#00000000'],
    ['#8104B3', '#00000000'],
    ['#4D026B', '#00000000'],
    ['#00000000', '#000000'],
    ['#00000000', '#FFFFFF'],
    ['#00000000', '#69FDC3'],
    ['#00000000', '#3F9875'],
    ['#00000000', '#8104B3'],
    ['#00000000', '#4D026B']
  ];
  contentColors: [Color][] = [
    ['#000000'],
    ['#FFFFFF'],
  ];
  fontSizes: string[] = [
    '16px', '20px', '24px', '28px', '32px', '36px', '40px'
  ]
  positions: TextPosition[] = [
    'top_left' , 'top_center' , 'top_right' , 'bottom_left' , 'bottom_center' , 'bottom_right'
  ]

  constructor() {
    this.options = {
      itemChangeCallback: this.itemChange,
      // itemResizeCallback: this.itemResize,
      // gridType: GridType.Fixed,
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      displayGrid: DisplayGrid.OnDragAndResize,
      disableScrollHorizontal: true,
      disableScrollVertical: true,
      // Margins
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      minCols: 1,
      maxCols: this.maxCols,
      minRows: 1,
      maxRows: this.maxRows,
      minItemCols: 1,
      maxItemCols: 8,
      minItemRows: 1,
      maxItemRows: 8,
      minItemArea: 1,
      maxItemArea: 40,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 160,
      fixedRowHeight: 160,
      allowMultiLayer: true,
      defaultLayerIndex: 1,
      baseLayerIndex: 3,
      maxLayerIndex: 3,
      itemInitCallback: this.itemInit,
      draggable: {
        enabled: true // true
      },
      resizable: {
        enabled: true // true
      },
      pushItems: false,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: true,
      enableOccupiedCellDrop: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50
    };
    this.dashboard = [
      // {x:0, y:0, rows: 1, cols: 1, layerIndex: 2, contentColor: ['#FFFFFF'], textFontSize: '16px'}
    ];
  }

  ngOnInit(): void {
  }

  itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemChanged', item, itemComponent);
    // this.activeGridCardIndex = this.dashboard.indexOf(item as GridCard);
    // this.activeCard = item as GridCard;
  }

  // itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
  //   console.info('itemResized', item, itemComponent);
  // }
  emptyCellClick(event: MouseEvent, item: GridsterItem): void {
    if(this.options.pushItems) {
      console.info('empty cell click', event, item);
      this.dashboard.push({...item, layerIndex: 1, contentColor: ['#FFFFFF']});
      this.activeGridCardIndex = this.dashboard.length - 1
      this.activeCard = this.dashboard[this.activeGridCardIndex]
      this.isEditMode = false;
      this.isNewCard = true;
      this.text = '';
      this.selectedFontSize = '16px';
    }
  }
  itemInit(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface
  ): void {
    console.info('itemInitialized', item, itemComponent);
    console.log(this.dashboard)
  }

  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.isEditMode = false
    this.isNewCard = false
  }

  editItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.activeCard === item && this.isEditMode && !this.isNewCard) {
      this.activeCard = null;
      this.activeGridCardIndex = null;
      this.isEditMode = true
      this.isNewCard = false
    } else {
      this.activeGridCardIndex = this.dashboard.indexOf(item);
      this.activeCard = item;
      this.textPosition = this.activeCard['textPosition'] ? this.activeCard['textPosition'] : "top_left";
      this.isEditMode = true;
      this.isNewCard = false
    }
  }

  // setTextPosition(position: TextPosition): void {
  //   this.textPosition = position;
  //   const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{textPosition: this.textPosition}) as GridsterItem);
  //   const newGridCards: GridsterItem[] = [...this.dashboard];
  //   if(newGridCards[this.activeGridCardIndex!]) {
  //     newGridCards[this.activeGridCardIndex!] = newGridCard;
  //   }
  //   this.dashboard = [...newGridCards]
  //   this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
  //   this.activeCard = newGridCard;
  // }

  setTextPosition(position: any): void {
    this.textPosition = position;
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{textPosition: position.value}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setText() {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{text: this.text}) as GridsterItem);
    console.log(newGridCard);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setColor(color: [Color, Color?]): void {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{color: color}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setLayer(i: number): void {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{layerIndex: i}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setContentColor(color: [Color, Color?]): void {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{contentColor: color}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setFontSize(fs: any): void {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{textFontSize: fs.value}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  setIcon(iName: iconName): void {
    const newGridCard: GridsterItem = (Object.assign({...this.activeCard},{iconName: iName}) as GridsterItem);
    const newGridCards: GridsterItem[] = [...this.dashboard];
    if(newGridCards[this.activeGridCardIndex!]) {
      newGridCards[this.activeGridCardIndex!] = newGridCard;
    }
    this.dashboard = [...newGridCards]
    this.activeGridCardIndex = this.dashboard.indexOf(newGridCard);
    this.activeCard = newGridCard;
  }

  getIcon(iconName: any): Icon {
    return  this.iconsStore[(iconName as iconName)];
  }

  addAccessToPalette() {
    this.isShowTemplates = false;
    this.isPaletteSettings = true;
  }
  addAccess() {
    this.isPaletteSettings = false;
    this.isShowTemplates = false;
    this.options.pushItems = true;
  }
}
