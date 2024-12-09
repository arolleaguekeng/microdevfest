import { AfterContentInit, Component } from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  template: '<div id="root"></div>',
})
export class WrapperComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    loadRemoteModule('shop', './shop')
      .then(() => console.debug('nextjs app loaded'))
      .catch((err: any) => console.error(`error loading nextjs app:`, err));
  }
}
