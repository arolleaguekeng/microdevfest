# Microdevfest

## Example of a monorepo and microfrontend architecture using Nx, Angular, React, and Tailwind CSS

# Quick Start & Documentation

### Nx installation

```sh
npm install -g nx
```

### Create a new workspace

```sh
npx create-nx-workspace@latest --preset=apps --appName=microdevfest
```

### Add Angular and React support

```sh
npx nx add @nx/angular
npx nx add @nx/react
```

## Add new projects

### Add Remote and Host Angular Projects

```sh
npx nx g @nx/angular:host apps/shell --add-tailwind --dynamic --remotes=shop
```

nx g @nx/react:remote apps/home

### Add Remote React Project

```sh
nx g @nx/react:remote apps/shop
```

### Add tailwindcss to React project

```sh
nx g @nx/react:tailwindcss apps/shop
```

### in the shell project, add the following to the `module-federation.manifest.json` file, configure the remotes and expose the shared libraries

```json
{
  "home": "http://localhost:4201/mf-manifest.json",
  "shop": "http://localhost:4202/mf-manifest.json"
}
```

### dont forget to check on the `project.json` file of shop if public host is listening on `4201`

```json
    "serve": {
      "options": {
        "port": 4201,
        "publicHost": "http://localhost:4201"
      },
    },
```

# Configure React remote project

## Convert React Components to Web Components

```ts
import ReactDOM from 'react-dom';
export function App() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Shop</h1>
      <p className="text-gray-600">This is the React Home page</p>
    </div>
  );
}

export function defineReactWebComponent() {
  class ReactWebComponent extends HTMLElement {
    connectedCallback() {
      ReactDOM.render(<App />, this);
    }

    disconnectedCallback() {
      ReactDOM.unmountComponentAtNode(this);
    }
  }

  if (!customElements.get('home-react')) {
    customElements.define('home-react', ReactWebComponent);
  }
}

defineReactWebComponent();
export default App;
```

# Configure Angular host Project

## Create Angular Web Component Wrapper

On the shell project, `./shell/src/app/components` create new component to wrap the remote component

```sh
nx g @nx/angular:component react-wrapper
```

```ts
import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild('vc', { read: ElementRef, static: true }) vc!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  async ngAfterContentInit(): Promise<void> {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];

    await loader();
    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }
}
```

## Add the route to the shell project

On the shell project, `./shell/src/app/app.routes.ts` add the route to the remote components

```ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { WrapperComponent } from './components/react-wrapper/react-wrapper-component';

export const appRoutes: Route[] = [
  {
    path: 'shop',
    loadChildren: () => loadRemote<typeof import('shop/Routes')>('shop/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'home',
    component: WrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
];
```

## Useful links
