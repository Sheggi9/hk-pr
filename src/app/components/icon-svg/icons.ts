export interface Icon {
  width: number;
  height: number;
  viewBox: string;
  dots: string[];
  name: string
}

export type IconsStore = {
  [key in iconName]: Icon
}
const HDMI: Icon = {
  name: 'HDMI',
  width: 50,
  height: 70,
  viewBox: "0 0 50 70",
  dots: ["M45.7 17.7501V7.39995C45.7 7.30239 45.6979 " +
    "7.20538 45.6939 7.10836V0.5H4.31457V7.11587C4.3" +
    "0492 7.21342 4.29983 7.30829 4.29983 7.39995V17" +
    ".7501H0.849854V38.45L11.1998 59.1503V69.5H38.80" +
    "01V59.1503L49.15 38.45V17.7501H45.7ZM11.1998 7.3" +
    "9995H38.8001V17.7501H31.8999V10.8502H28.4499V17" +
    ".7501H21.55V10.8502H18.1V17.7501H11.1998V7.39995Z"]
}
const LIGHT: Icon = {
  name: 'Light',
  width: 70,
  height: 70,
  viewBox: "0 0 70 70",
  dots: ["M60.0909 31.8636H69.5V38.1364H60.0909V31.8636ZM0" +
    ".5 31.8636H9.90909V38.1364H0.5V31.8636ZM38.1364 0.5V9" +
    ".90909H31.8636V0.5H38.1364ZM12.7945 8.34091L19.475 1" +
    "5.0527L15.0214 19.475L8.34091 12.8259L12.7945 8.34091" +
    "ZM50.525 15.0214L57.1741 8.34091L61.6591 12.8259L54.9" +
    "786 19.475L50.525 15.0214ZM35 16.1818C39.9909 16.1818" +
    " 44.7774 18.1644 48.3065 21.6935C51.8356 25.2226 53.8182" +
    " 30.0091 53.8182 35C53.8182 41.9627 50.0232 48.0473 44." +
    "4091 51.3091V56.9545C44.4091 57.7864 44.0787 58.5841 43" +
    ".4905 59.1723C42.9023 59.7605 42.1045 60.0909 41.2727 6" +
    "0.0909H28.7273C27.8955 60.0909 27.0977 59.7605 26.5095" +
    " 59.1723C25.9213 58.5841 25.5909 57.7864 25.5909 56.9545" +
    "V51.3091C19.9768 48.0473 16.1818 41.9627 16.1818 35C16." +
    "1818 30.0091 18.1644 25.2226 21.6935 21.6935C25.2226 18" +
    ".1644 30.0091 16.1818 35 16.1818ZM41.2727 63.2273V66.363" +
    "6C41.2727 67.1955 40.9423 67.9932 40.3541 68.5814C39.765" +
    "9 69.1696 38.9682 69.5 38.1364 69.5H31.8636C31.0318 69.5 30" +
    ".2341 69.1696 29.6459 68.5814C29.0577 67.9932 28.7273 67.1" +
    "955 28.7273 66.3636V63.2273H41.2727Z"]
}
const NEXT: Icon = {
  name: 'Next',
  width: 36,
  height: 70,
  viewBox: "0 0 50 70",
  dots: ["M0.75 69.5L35.25 35L0.750001 0.5L0.75 69.5Z"]
}
const PANEL: Icon = {
  name: 'Panel',
  width: 44,
  height: 70,
  viewBox: "0 0 44 70",
  dots: [
    "M18.8571 16.1429L18.8571 35H0L0 16.1429H6.28571L6.28571 3.57145C" +
    "6.28571 1.84287 7.7 0.428589 9.42857 0.428589C11.1571 0.428589 " +
    "12.5714 1.84287 12.5714 3.57145L12.5714 16.1429L18.8571 16.1429ZM0 4" +
    "1.2857L0 47.5714C0 51.6571 2.64 55.1143 6.28571 56.4343L6.28571 69.5" +
    "714H12.5714L12.5714 56.4343C16.2171 55.1143 18.8571 51.6571 18.8571 4" +
    "7.5714V41.2857H0ZM37.7143 16.1429V3.57145C37.7143 1.84287 36.3 0.4285" +
    "89 34.5714 0.428589C32.8429 0.428589 31.4286 1.84287 31.4286 3.57145L31" +
    ".4286 16.1429L25.1429 16.1429L25.1429 35H44L44 16.1429H37.7143ZM25.1429 4" +
    "1.2857V47.5714C25.1429 51.6571 27.7829 55.1143 31.4286 56.4343V69.5714" +
    "H37.7143L37.7143 56.4343C41.36 55.1143 44 51.6571 44 47.5714V41.2857H25.1429Z"
  ]
}
const PAUSE: Icon = {
  name: 'Pause',
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  dots: [
    "M25.7142 17.1428H21.4285V42.8571H25.7142V17.1428ZM38.5713 17.1428H34.2856V42.8571H38.5713V17.1428Z",
    "M30 4.28571C35.0858 4.28571 40.0574 5.79383 44.2861 8.61935C48.5148 11.4449 51.810" +
    "6 15.4609 53.7569 20.1596C55.7032 24.8582 56.2124 30.0285 55.2202 35.0166C54.228" +
    " 40.0047 51.779 44.5865 48.1827 48.1827C44.5865 51.7789 40.0047 54.228 35.0166 55" +
    ".2202C30.0285 56.2124 24.8582 55.7031 20.1596 53.7569C15.4609 51.8106 11.4449 48.5148 8" +
    ".61936 44.2861C5.79384 40.0574 4.28573 35.0858 4.28573 30C4.28573 23.1801 6.9949 16.6396" +
    " 11.8173 11.8173C16.6396 6.99489 23.1802 4.28571 30 4.28571V4.28571ZM30 0C24.0666 0" +
    " 18.2664 1.75947 13.3329 5.05591C8.39943 8.35235 4.55426 13.0377 2.28363 18.5195C0" +
    ".0129985 24.0013 -0.581101 30.0333 0.576455 35.8527C1.73401 41.6721 4.59123 47.0176 8" +
    ".78681 51.2132C12.9824 55.4088 18.3279 58.266 24.1473 59.4235C29.9667 60.5811 35.998" +
    "7 59.987 41.4805 57.7164C46.9623 55.4457 51.6476 51.6006 54.9441 46.6671C58.2405 41.733" +
    "6 60 35.9334 60 30C60 22.0435 56.8393 14.4129 51.2132 8.78679C45.5871 3.1607 37.9565 0 " +
    "30 0V0Z"
  ]
}
const PLAY: Icon = {
  name: 'Play',
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  dots: [
    "M30 4.28571C35.0858 4.28571 40.0574 5.79383 44.2861 8.61" +
    "935C48.5148 11.4449 51.8106 15.4609 53.7569 20.1596C55.703" +
    "2 24.8582 56.2124 30.0285 55.2202 35.0166C54.228 40.0047 51" +
    ".779 44.5865 48.1827 48.1827C44.5865 51.7789 40.0047 54.228" +
    " 35.0166 55.2202C30.0285 56.2124 24.8582 55.7031 20.1596 53." +
    "7569C15.4609 51.8106 11.4449 48.5148 8.61936 44.2861C5.79384" +
    " 40.0574 4.28573 35.0858 4.28573 30C4.28573 23.1801 6.9949 16." +
    "6396 11.8173 11.8173C16.6396 6.99489 23.1802 4.28571 30 4.28571" +
    "ZM30 0C24.0666 0 18.2664 1.75947 13.3329 5.05591C8.39943 8.35235" +
    " 4.55426 13.0377 2.28363 18.5195C0.0129986 24.0013 -0.581101 30." +
    "0333 0.576455 35.8527C1.73401 41.6721 4.59123 47.0176 8.78681 51.2" +
    "132C12.9824 55.4088 18.3279 58.266 24.1473 59.4235C29.9667 60.58" +
    "11 35.9987 59.987 41.4805 57.7164C46.9623 55.4457 51.6476 51.60" +
    "06 54.9441 46.6671C58.2405 41.7336 60 35.9334 60 30C60 22.0435 56.8" +
    "393 14.4129 51.2132 8.78679C45.5871 3.1607 37.9565 0 30 0Z",
    "M23.2731 42.8597V17.1436L40.4172 30.0016L23.2731 42.8597Z"
  ]
}
// const PLUS: Icon = {
//   name: 'Add item',
//   width: 60,
//   height: 60,
//   viewBox: "0 0 60 60",
//   dots: [
//     "M30 60C46.5686 60 60 46.5687 60 30C60 13.4313 46.5686 0 30 0C13.4314 0 0 13.4313 0 30C0 46.5687 13.4314 60 30 60ZM34.1202 33.7339H50.6009V25.4936H34.1202V9.01288H25.8798V25.4936H9.39914V33.7339H25.8798V50.2146H34.1202V33.7339Z"
//   ]
// }
const POWER: Icon = {
  name: 'Power',
  width: 68,
  height: 68,
  viewBox: "0 0 68 68",
  dots: [
    "M37.7222 0.5H30.2778V37.7222H37.7222V0.5ZM55.7006 8.57722L50" +
    ".415 13.8628C56.2961 18.59 60.0556 25.8483 60.0556 34C60.055" +
    "6 48.405 48.405 60.0556 34 60.0556C19.595 60.0556 7.94444 48" +
    ".405 7.94444 34C7.94444 25.8483 11.7039 18.59 17.5478 13.8256" +
    "L12.2994 8.57722C5.07833 14.7189 0.5 23.8011 0.5 34C0.5 52.49" +
    "94 15.5006 67.5 34 67.5C52.4994 67.5 67.5 52.4994 67.5 34C67." +
    "5 23.8011 62.9217 14.7189 55.7006 8.57722Z"
  ]
}
const SCREEN: Icon = {
  name: 'Screen',
  width: 74,
  height: 60,
  viewBox: "0 0 74 60",
  dots: [
    "M73.6666 0H0.333252V53.3333H23.6666V60H50.3333V53.3333H73.6666V0Z" +
    "M66.9999 46.6667H6.99992V6.66667H66.9999V46.6667ZM50.3333 23.3333V" +
    "30H40.3333V40H33.6666V30H23.6666V23.3333H33.6666V13.3333H40.3333V" +
    "23.3333H50.3333Z"
  ]
}
const SETTINGS: Icon = {
  name: 'Settings',
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  dots: [
    "M0 46.6667V53.3333H20V46.6667H0ZM0 6.66667V13.3333H33.3333V6.66667" +
    "H0ZM33.3333 60V53.3333H60V46.6667H33.3333V40H26.6667V60H33.3333ZM13" +
    ".3333 20V26.6667H0V33.3333H13.3333V40H20V20H13.3333ZM60 33.3333V26.6" +
    "667H26.6667V33.3333H60ZM40 20H46.6667V13.3333H60V6.66667H46.6667V0H40V20Z"
  ]
}
const STOP: Icon = {
  name: 'Stop',
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  dots: [
    "M38.7728 20.247H20.4395V39.7544H38.7728V20.247Z",
    "M30 4.28571C35.0858 4.28571 40.0574 5.79383 44.28" +
    "61 8.61935C48.5148 11.4449 51.8106 15.4609 53.7569" +
    " 20.1596C55.7032 24.8582 56.2124 30.0285 55.2202 3" +
    "5.0166C54.228 40.0047 51.7789 44.5865 48.1827 48.18" +
    "27C44.5865 51.7789 40.0047 54.228 35.0166 55.2202" +
    "C30.0285 56.2124 24.8582 55.7031 20.1596 53.7569C15" +
    ".4609 51.8106 11.4449 48.5148 8.61936 44.2861C5.79384 4" +
    "0.0574 4.28573 35.0858 4.28573 30C4.28573 23.1801 6.9" +
    "949 16.6396 11.8173 11.8173C16.6396 6.99489 23.1802 4." +
    "28571 30 4.28571ZM30 0C24.0666 0 18.2664 1.75947 13.3329" +
    " 5.05591C8.39943 8.35235 4.55426 13.0377 2.28363 18.5195" +
    "C0.0129985 24.0013 -0.581101 30.0333 0.576455 35.8527C1.7" +
    "3401 41.6721 4.59123 47.0176 8.78681 51.2132C12.9824 55.40" +
    "88 18.3279 58.266 24.1473 59.4235C29.9667 60.5811 35.9987 " +
    "59.987 41.4805 57.7164C46.9623 55.4457 51.6476 51.6006 54." +
    "9441 46.6671C58.2405 41.7336 60 35.9334 60 30C60 22.0435 56" +
    ".8393 14.4129 51.2132 8.78679C45.5871 3.1607 37.9565 0 30 0Z"
  ]
}
const USB: Icon = {
  name: 'USB',
  width: 48,
  height: 70,
  viewBox: "0 0 48 70",
  dots: [
    "M34.0897 20.0283V33.0472H37.3444V39.5566H27.5803V13.5189H" +
    "34.0897L24.3256 0.5L14.5614 13.5189H21.0708V39.5566H11.3067" +
    "V32.8193C13.585 31.6151 15.2124 29.3042 15.2124 26.5377C15" +
    ".2124 24.6387 14.458 22.8174 13.1151 21.4746C11.7723 20.13" +
    "18 9.95103 19.3774 8.05198 19.3774C4.08122 19.3774 0.891602" +
    " 22.567 0.891602 26.5377C0.891602 29.3042 2.51896 31.6151 4." +
    "79726 32.8193V39.5566C4.79726 41.283 5.48307 42.9387 6.70383" +
    " 44.1595C7.92458 45.3802 9.58029 46.066 11.3067 46.066H21.0708" +
    "V55.9929C18.76 57.1646 17.1652 59.5731 17.1652 62.3396C17.1652" +
    " 64.2387 17.9196 66.0599 19.2624 67.4028C20.6052 68.7456 22.4" +
    "265 69.5 24.3256 69.5C26.2246 69.5 28.0459 68.7456 29.3887 6" +
    "7.4028C30.7315 66.0599 31.4859 64.2387 31.4859 62.3396C31.4859" +
    " 59.5731 29.8911 57.1646 27.5803 55.9929V46.066H37.3444C39.0708" +
    " 46.066 40.7265 45.3802 41.9473 44.1595C43.168 42.9387 43.8539 " +
    "41.283 43.8539 39.5566V33.0472H47.1086V20.0283H34.0897Z"
  ]
}
const VIA: Icon = {
  name: 'VIA',
  width: 98,
  height: 30,
  viewBox: "0 0 98 30",
  dots: [
    "M9.58208 0.454529L15.548 20.9659H15.7753L21.7412 0.45" +
    "4529H30.6616L21.0594 29.5454H10.2639L0.661621 0.454529H9.58208Z",
    'M52.9612 0.454529V29.5454H45.0635V0.454529H52.9612Z',
    'M75.8609 29.5454H67.3382L76.9405 0.454529H87.7359L97.3' +
    '382 29.5454H88.8155L82.4518 8.46589H82.2245L75.8609 29.' +
    '5454ZM74.27 18.0682H90.2927V23.9773H74.27V18.0682Z'
  ]
}
const VIDEO: Icon = {
  name: 'Video',
  width: 76,
  height: 50,
  viewBox: "0 0 76 50",
  dots: [
    'M58.8333 18.75V0H0.5V50H58.8333V31.25L75.5 47.9167V2.08333L58.8333 18.75Z'
  ]
}
const WHITEBOARD: Icon = {
  name: 'Whiteboard',
  width: 78,
  height: 58,
  viewBox: "0 0 78 58",
  dots: [
    'M70.2201 37.0617V5.99582C70.2186 4.40611 69.603 2.88198 68.5084 1.' +
    '75789C67.4138 0.633797 65.9297 0.00158732 64.3817 0H5.99737C4.4493' +
    '9 0.00158732 2.96526 0.633797 1.87068 1.75789C0.776097 2.88198 0.' +
    '160481 4.40611 0.158936 5.99582V47.9665C0.160481 49.5562 0.776097 5' +
    '1.0804 1.87068 52.2044C2.96526 53.3285 4.44939 53.9607 5.99737 53.9' +
    '623H23.5267V47.9665H5.99737V5.99582H64.3817V37.0617H70.2201Z',
    'M40.0219 43.8166L32.3016 47.75C29.9678 48.939 29.9788 52.2771 32.' +
    '3204 53.4507L40.7215 57.6615C41.1657 57.8841 41.6557 58 42.1525 58' +
    'H74.6472C76.411 58 77.8409 56.5701 77.8409 54.8063V46.6622C77.8409 4' +
    '4.8984 76.411 43.4686 74.6472 43.4686H41.4717C40.9677 43.4686 40.470' +
    '9 43.5878 40.0219 43.8166Z'
  ]
}
const WIFI: Icon = {
  name: 'WiFi',
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  dots: [
    'M52.5915 42.1142C54.9403 41.1413 57.4577 40.6406 60 40.6406V33.4406C56.5122 33.4406 53.0585 34.1275 49.8362 35.4623C46.6138 36.797 43.6859 38.7533 41.2197 41.2196C38.7534 43.6859 36.7971 46.6138 35.4623 49.8361C34.1276 53.0584 33.4406 56.5121 33.4406 59.9999H40.6406C40.6406 57.4576 41.1414 54.9402 42.1143 52.5914C43.0872 50.2426 44.5132 48.1085 46.3109 46.3108C48.1085 44.5131 50.2427 43.0871 52.5915 42.1142Z',
    'M60.0001 54.825C60.0001 57.683 57.6832 60 54.8251 60C51.9671 60 49.6501 57.683 49.6501 54.825C49.6501 51.9669 51.9671 49.65 54.8251 49.65C57.6832 49.65 60.0001 51.9669 60.0001 54.825Z',
    'M39.7943 11.2192C46.2003 8.56571 53.0662 7.2 60 7.2V0C52.1207 0 44.3185 1.55195 37.039 4.56723C29.7595 7.58251 23.1451 12.0021 17.5736 17.5736C12.0021 23.1451 7.58252 29.7595 4.56723 37.039C1.55195 44.3185 0 52.1207 0 60H7.2C7.2 53.0662 8.56571 46.2003 11.2192 39.7943C13.8726 33.3883 17.7618 27.5677 22.6648 22.6648C27.5677 17.7618 33.3883 13.8726 39.7943 11.2192Z',
    'M46.1086 26.4632C50.5127 24.6389 55.233 23.7 60 23.7V16.5C54.2875 16.5 48.6309 17.6252 43.3533 19.8112C38.0756 21.9973 33.2802 25.2015 29.2408 29.2409C25.2015 33.2802 21.9973 38.0756 19.8112 43.3533C17.6252 48.6309 16.5 54.2875 16.5 60H23.7C23.7 55.233 24.6389 50.5127 26.4632 46.1086C28.2874 41.7045 30.9613 37.7028 34.332 34.332C37.7028 30.9613 41.7045 28.2874 46.1086 26.4632Z'
  ]
}
export const icons: IconsStore = {
  HDMI,
  LIGHT,
  NEXT,
  PANEL,
  PAUSE,
  PLAY,
  // PLUS,
  POWER,
  SCREEN,
  SETTINGS,
  STOP,
  USB,
  VIA,
  VIDEO,
  WHITEBOARD,
  WIFI
}

export type iconName = 'HDMI' | 'LIGHT' | 'NEXT'| 'PANEL' | 'PAUSE' | 'PLAY' | 'POWER' | 'SCREEN' | 'SETTINGS' | 'STOP' | 'USB' | 'VIA' | 'VIDEO' | 'WHITEBOARD' | 'WIFI';
export const iconNames: iconName[] = ['HDMI' , 'LIGHT' , 'NEXT', 'PANEL' , 'PAUSE' , 'PLAY' , 'POWER' , 'SCREEN' , 'SETTINGS' , 'STOP' , 'USB' , 'VIA' , 'VIDEO' , 'WHITEBOARD' , 'WIFI'];
