import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
//Services
import { LayoutService } from '../layout.service';
import { GlobalService } from '../../shared/services/global.service'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public layoutS: LayoutService,
    public globalS: GlobalService
  ) { }

  ngOnInit() {
  }
}
