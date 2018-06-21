interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  RESPONSE_TYPE: string;
  RETURN_URL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '',
  CLIENT_DOMAIN: 'jackercito.eu.auth0.com',
  RESPONSE_TYPE: 'token id_token',
  AUDIENCE: 'https://jackercito.eu.auth0.com/userinfo',
  REDIRECT: '',
  SCOPE: 'open email',
  RETURN_URL: ''
};
