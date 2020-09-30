import { UserRole } from "../helpers/authHelper";

/*
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = 'menu-default';

export const subHiddenBreakpoint = 1400;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = 'en';
export const localeOptions = [
  { id: 'en', name: 'English - LTR', direction: 'ltr' },
  { id: 'es', name: 'Español', direction: 'ltr' },
  { id: 'enrtl', name: 'English - RTL', direction: 'rtl' },
];

export const firebaseConfig = {
  apiKey: "AIzaSyAneOI_qA83Ojg9x7yQcDoz_56EETY1sNU",
  authDomain: "gogo-ebcc7.firebaseapp.com",
  databaseURL: "https://gogo-ebcc7.firebaseio.com",
  projectId: "gogo-ebcc7",
  storageBucket: "gogo-ebcc7.appspot.com",
  messagingSenderId: "139486879162",
  appId: "1:139486879162:web:b4b12ca0202679f4e71183",
  measurementId: "G-2NBYNQ4WCL"
};

export const currentUser = {
  id: 1,
  title: 'Ishita Jain',
  img: '/assets/img/profiles/l-1.jpg',
  date: 'Last seen today 15:24',
  role: UserRole.Admin
}


export const adminRoot = '/app';
export const buyUrl = 'https://1.envato.market/k4z0';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const servicePath = 'https://api.coloredstrategies.com';

export const themeColorStorageKey = '__theme_selected_color';
export const isMultiColorActive = true;
export const defaultColor = 'light.purplemonster';
export const isDarkSwitchActive = true;
export const defaultDirection = 'ltr';
export const themeRadiusStorageKey = '__theme_radius';
export const isAuthGuardActive = true;
export const colors = [
  'bluenavy',
  'blueyale',
  'blueolympic',
  'greenmoss',
  'greenlime',
  'purplemonster',
  'orangecarrot',
  'redruby',
  'yellowgranola',
  'greysteel',
];
