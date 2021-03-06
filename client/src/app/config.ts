import { IPartialConfigOptions } from 'ng2-ui-auth';
/**
 * Created by Ron on 03/10/2016.
 */

export const myAuthConfig: IPartialConfigOptions = {
    loginUrl: '/api/auth/v1/login',
    signupUrl: '/api/auth/v1/signup',

    unlinkUrl: '/api/auth/v1/me/unlink',

    providers: {
      google: {
        url: '/api/auth/v1/a/google',
        redirectUri: window.location.protocol + '//' + window.location.host + '/api/auth/v1/blank',
      },
      facebook: {
        url: '/api/auth/v1/a/facebook',
        redirectUri: window.location.protocol + '//' + window.location.host + '/api/auth/v1/blank',
      },
      github: {
        url: '/api/auth/v1/a/github',
        redirectUri: window.location.protocol + '//' + window.location.host + '/api/auth/v1/blank',
      },
      twitter: {
        url: '/api/auth/v1/a/twitter',
        redirectUri: window.location.protocol + '//' + window.location.host + '/api/auth/v1/blank',
      }
    }
}
