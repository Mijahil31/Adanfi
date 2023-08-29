import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private users: User[] = [
    {name: "Mijahil", lastName: "Franchi", email: "mijahil31@gmail.com", password: "1234565"}
  ];

  get getUsers(): User[] {
    return this.users;
  }

  add(user: User): User[] {
    this.users.push(user);
    return this.users;
  }

  getUserByID(id: number): User {
    // console.log(this.users[id])
    return this.users[id];

  }
  	
  updateUserById(id: number, user: User): User {
    this.users[id].name = user.name;
    this.users[id].lastName = user.lastName;
    this.users[id].email = user.email;
    this.users[id].password = user.password;
    return this.users[id];
  }
  
  constructor() { }

}
