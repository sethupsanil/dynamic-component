import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner (customEvent)="customEventCreated($event)" [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
  customEventCreated(event: any) {
    console.log(event);
    alert(JSON.stringify(event))
  }
}

