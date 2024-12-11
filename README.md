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



## Useful links
