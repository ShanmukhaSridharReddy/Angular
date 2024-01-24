import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { NOTE_ICON, REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, TRASH_ICON, SEARCH_ICON, SETTING_ICON, REFRESH_ICON, LIST_VIEW_ICON, MENU_ICON, TICK_ICON, IMG_ICON, BRUSH_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
  host:{
    class: 'app-sidenavbar-cnt'
  }
})
export class SidenavbarComponent implements OnInit,OnDestroy {
  sideBarState!:boolean;
    subscription!:Subscription
  constructor(private  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router, public dataService:DataService) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription=this.dataService.currSideBarState.subscribe(state => this.sideBarState=state)
  }
  handelIconClick(route:string){
    this.router.navigate(['/dashboard'+route])
  }

}
