import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navegación',
    main: [
      {
        state: 'mis-causas',
        short_label: 'M',
        name: 'Mis causas',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'consulta-causas',
        short_label: 'C',
        name: 'Consulta causas',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'resumen-migracion',
        short_label: 'D',
        name: 'Migración de datos',
        type: 'link',
        icon: 'ti-home'
      }
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
