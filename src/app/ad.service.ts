import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }, {}),

      new AdItem(HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }, {}),



      new AdItem(HeroJobAdComponent, {
        headline: 'Dynamic headline',
        body: 'Dynamic body',
      }, { eventEmitter: ['test'] }),
    ];
  }
}
