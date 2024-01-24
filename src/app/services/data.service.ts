import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sideBarState = new BehaviorSubject(false);
  currSideBarState = this.sideBarState.asObservable();

  constructor() { }

  toggleSidebar(val: boolean) {
    this.sideBarState .next(val)
  }
}
