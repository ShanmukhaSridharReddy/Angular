import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NOTE_ICON, 
  REMINDER_ICON, 
  EDIT_ICON, 
  ARCHIVE_ICON, 
  TRASH_ICON, 
  SEARCH_ICON,
SETTING_ICON,
REFRESH_ICON,
LIST_VIEW_ICON ,
MENU_ICON,TICK_ICON,IMG_ICON, BRUSH_ICON,
COLLABRATOR_ICON,COLOR_PALATTE_ICON,MORE_ICON,UNDO_ICON,REDO_ICON, PIN_ICON,DELETE_FOREVER_ICON,
 RESTORE_ICON,
 UNARCHIVE_ICON} from 'src/assets/svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSidenavOpen: boolean = false;
  panelOpenState = false;

  constructor(private  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public router: Router) {
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral('search-icon',sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("setting-icon",sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon",sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("listview-icon",sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("menu-icon",sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("tick-icon",sanitizer.bypassSecurityTrustHtml(TICK_ICON))
    iconRegistry.addSvgIconLiteral("img-icon",sanitizer.bypassSecurityTrustHtml(IMG_ICON))
    iconRegistry.addSvgIconLiteral("brush-icon",sanitizer.bypassSecurityTrustHtml(BRUSH_ICON))
    iconRegistry.addSvgIconLiteral("collaborator-icon",sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("color-palatte-icon",sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral("more-icon",sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral("undo-icon",sanitizer.bypassSecurityTrustHtml(UNDO_ICON))
    iconRegistry.addSvgIconLiteral("redo-icon",sanitizer.bypassSecurityTrustHtml(REDO_ICON))
    iconRegistry.addSvgIconLiteral("pin-icon",sanitizer.bypassSecurityTrustHtml(PIN_ICON))
    iconRegistry.addSvgIconLiteral("delete-forver-icon",sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON))
    iconRegistry.addSvgIconLiteral("restore-icon",sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
    iconRegistry.addSvgIconLiteral("unarchive-icon",sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))



  }

  ngOnInit(): void {
  }

  toggleSidenav(){
    this.isSidenavOpen=!this.isSidenavOpen;
  }
  

}
