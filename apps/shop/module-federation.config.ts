import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shop',
  exposes: {
    './Module': './src/remote-entry.ts',
    './shop': './src/app/nx-welcome.tsx',
    './web-components': './src/bootstrap.tsx'
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
