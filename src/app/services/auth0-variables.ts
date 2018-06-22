import { environment } from './../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  RESPONSE_TYPE: string;
  RETURN_URL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: environment.CLIENT_ID,
  CLIENT_DOMAIN: environment.CLIENT_DOMAIN,
  RESPONSE_TYPE: environment.RESPONSE_TYPE,
  AUDIENCE: environment.AUDIENCE,
  REDIRECT: environment.REDIRECT,
  RETURN_URL: environment.RETURN_URL,
};
