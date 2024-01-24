import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { NOTE_ICON, SEARCH_ICON, SETTING_ICON, REFRESH_ICON, LIST_VIEW_ICON, MENU_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit,OnDestroy {
  subscription!: Subscription
  crrState!:boolean
  constructor(private  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router,public dataService:DataService) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral('search-icon',sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("setting-icon",sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon",sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("listview-icon",sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("menu-icon",sanitizer.bypassSecurityTrustHtml(MENU_ICON))

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription=this.dataService.currSideBarState.subscribe(state=>this.crrState=state)
  }
  handleSidebar(){
    this.dataService.toggleSidebar(!this.crrState)
  }

}
