import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutService } from '../../layout.service';
import { GlobalService } from '../../../shared/services/global.service';
//Animation
import { fadeInOutAnimation } from './sidebar.animations';
//Modelo
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInOutAnimation],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public routes: any = [];
  selected: any;
  //Menu Variables
  public subMenuActive: any = null;

  constructor(
    private router: Router, 
    public globalS: GlobalService,
    public layoutS: LayoutService
    ) {

  }

  // Función para alternar el estado del submenú
  toggleSubMenu(menu: string): void {
    console.log('toggleSubMenu', menu);
    if (this.subMenuActive === menu) {
      this.subMenuActive = null;
    } else {
      this.subMenuActive = menu;
    }
  }


}
