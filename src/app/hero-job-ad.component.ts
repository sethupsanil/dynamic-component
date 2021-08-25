import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4 (click)="testEmit()">{{headline}}</h4>
{{data}}
      {{body }}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
  @Input() headline: any;
  @Input() body: any;
  @Output() test = new EventEmitter();
  testEmit(){
    console.log('in')
    this.test.emit(123);
  }
}


