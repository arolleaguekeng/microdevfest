import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { WrapperComponent } from './components-wrapper/shop-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () =>
      loadRemote<typeof import('home/Routes')>('home/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'shop',
    component: WrapperComponent,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
