import ExpoFacebook from './ExpoFacebook';

export const logInWithReadPermissionsAsync = async (appId, { permissions, behavior } = {}) => {
  if (typeof appId !== 'string') {
    console.warn(
      `logInWithReadPermissionsAsync: parameter 'appId' must be a string, was '${typeof appId}''.`
    );
    appId = String(appId);
  }

  return ExpoFacebook.logInWithReadPermissionsAsync(appId, {
    permissions,
    behavior,
  });
};
