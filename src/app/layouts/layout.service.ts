import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public sidebarActive: boolean = true;
  public toolbarActive: boolean = true;
  public miniSidebar = false
  public loading = false
  public routeactual: any = { breadcrumb: '', title: '' };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //Control tamanos de pantalla
    window.addEventListener('resize', this.handleWindowResize.bind(this));
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        let layoutData = route.snapshot.data ?? {}
        this.routeactual = layoutData;
        let keys = Object.keys(layoutData);
        this.sidebarActive = keys.includes("sidebar") ? layoutData.sidebar : true
        this.toolbarActive = keys.includes("toolbar") ? layoutData.toolbar : true
      })
  }
  private handleWindowResize() {
    var screenWidth = window.innerWidth;
    // console.log('tamano pantalla', screenWidth);
    if (screenWidth < 1600) {
      this.sidebarActive = false;
    } else {
      this.sidebarActive = true;
    }
    // Realiza las acciones necesarias según el tamaño de la pantalla
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
}
