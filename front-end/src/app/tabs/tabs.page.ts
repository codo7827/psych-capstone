import { Component, ViewChildren } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChildren('tab1') tabRef: Tab1Page;

  constructor() {}

  ngAfterViewInit() {
    this.viewReady = true;
  }

  viewReady : boolean = false;
  
  inTraining() {
    if (this.viewReady) {
      return this.tabRef.stage != this.tabRef.Stage.START && this.tabRef.stage != this.tabRef.Stage.DONE;
    }
  }
}
