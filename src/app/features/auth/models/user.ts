
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  gender: 'male' | 'female';
  email: string;
  image: string;
  phone: string;
  role: string;
  //others fields if needed
}