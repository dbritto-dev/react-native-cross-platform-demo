import { UnavailabilityError } from '@unimodules/core';

export default {
  name: () => 'ExpoFacebook',

  logInWithReadPermissionsAsync: (appId, { permissions = ['default'] }) => {
    if (!window.FB) {
      throw new UnavailabilityError('window.FB', 'login');
    }

    window.FB.init({ appId, status: true, version: 'v4.0' });

    const auth_type = 'rerequest';
    const scope = permissions.join(',');
    const return_scopes = true;

    return new Promise(resolve => {
      window.FB.login(
        ({ authResponse }) => {
          if (authResponse) {
            const { accessToken: token, expiresIn: expires, grantedScopes } = authResponse;
            const declinedPermissions = grantedScopes.split(',');

            resolve({ type: 'success', token, expires, permissions, declinedPermissions });
          } else {
            resolve({ type: 'cancel' });
          }
        },
        { auth_type, scope, return_scopes }
      );
    });
  },
};
