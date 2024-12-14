/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { WrapperComponent } from './components/react-wrapper/react-wrapper-component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: WrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
  {
    path: '',
    component: WrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
  {
    path: 'shop',
    loadChildren: () =>
      loadRemote<typeof import('shop/Routes')>('shop/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
];
