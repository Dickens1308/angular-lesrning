export interface RequestUser {
  username: string;
  email?: string;
  password: string;
  remember?: boolean;
  agreement?: boolean;
}
