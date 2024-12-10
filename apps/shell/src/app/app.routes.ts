import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { WrapperComponent } from './react-wrapper/react-wrapper-component';

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
    data: {
      elementName: 'shop-react',
      loadChildren: () => import('shop/Module'),
    },
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
