import { createApp, createIdentityProvider } from '@kottster/server';
import schema from '../../kottster-app.json';

/* 
 * For security, consider moving the secret data to environment variables.
 * See https://kottster.app/docs/deploying#before-you-deploy
 */
export const app = createApp({
  schema,
  secretKey: 'y5L1_UyRmyDneiTTW7vphABckjiWogg4',
  kottsterApiToken: 'foy3GYpVTTh4LcGpjCf686ougXPaEeKk',

  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: createIdentityProvider('sqlite', {
    fileName: 'app.db',

    passwordHashAlgorithm: 'bcrypt',
    jwtSecretSalt: 'msKKFa5NT1q8Rk3v',
    
    /* The root admin user credentials */
    rootUsername: 'Luan Admin',
    rootPassword: 'Aa123456',
  }),
});