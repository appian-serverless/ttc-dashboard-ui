
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://identity-default.35.196.153.68.nip.io/auth/',
  realm: 'activiti',
  clientId: 'activiti'
};

export const environment = {
  production: false,
  assets: { dotaImages: 'https://api.opendota.com/apps/dota2/images' },
  apis: { dota: 'https://api.opendota.com/api' },
  keycloak: keycloakConfig
};
