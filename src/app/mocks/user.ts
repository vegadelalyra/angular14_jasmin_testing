// user.ts

export interface User {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
}

export const USERS: User[] = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
  { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
  { id: 3, name: 'Michael Johnson', age: 45, gender: 'Male' },
  { id: 4, name: 'Emily Davis', age: 35, gender: 'Female' },
  { id: 5, name: 'Robert Wilson', age: 50, gender: 'Male' },
  { id: 6, name: 'Laura Martinez', age: 28, gender: 'Female' },
  { id: 7, name: 'David Anderson', age: 40, gender: 'Male' },
  { id: 8, name: 'Linda Brown', age: 32, gender: 'Female' },
  { id: 9, name: 'James Taylor', age: 38, gender: 'Male' },
  { id: 10, name: 'Maria Thomas', age: 27, gender: 'Female' },
];
