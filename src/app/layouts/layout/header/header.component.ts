
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//Services
import { LayoutService } from '../../layout.service';
import { GlobalService } from '../../../shared/services/global.service'
import { BusquedaService } from '../../../shared/services/busqueda.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    public layoutS: LayoutService,
    public globalS: GlobalService,
    public busquedaS: BusquedaService
  ) { }

  ngOnInit() {

  }



  //Busquedas

  buscar(busqueda: any): void {
    console.log("Buscando", busqueda.target.value);
    var bus = busqueda.target.value;
    this.busquedaS.setBusqueda(bus);
  }


  // signOut(){
  //   this.authS.SignOut().then(()=>{
  //     window.location.reload();
  //   })
  // }


}
