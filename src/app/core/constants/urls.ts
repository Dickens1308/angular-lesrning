import {environment} from "../../../environment/environment";

export const urls: any = {
  loginUrl: `${environment.apiUrl}/auth/login`,
  registerUrl: `${environment.apiUrl}/auth/register`,
  verifyUrl: `${environment.apiUrl}/token/verify`,
};
