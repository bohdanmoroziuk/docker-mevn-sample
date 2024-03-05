export type User = {
  id: string;
  name: string;
  age: number;
}

export type UserData = Omit<User, 'id'>
