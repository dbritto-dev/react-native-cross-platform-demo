declare type FacebookLoginResult = {
  type: string;
  token?: string;
  expires?: number;
};

declare type FacebookOptions = {
  permissions?: string[];
  behavior?: 'web' | 'native' | 'browser' | 'system';
};

export { FacebookOptions, FacebookLoginResult };

export declare function logInWithReadPermissionsAsync(
  appId: string,
  options?: FacebookOptions
): Promise<FacebookLoginResult>;
