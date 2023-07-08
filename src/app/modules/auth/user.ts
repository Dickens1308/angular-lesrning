export interface User {
  id: number;
  username: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  roles: string[];
  token: string;
  message: string;
}
