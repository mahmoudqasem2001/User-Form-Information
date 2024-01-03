import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  public users$ = this.usersSubject.asObservable();

  constructor() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.usersSubject.next(JSON.parse(savedUsers));
    }
  }

  addUser(user: User) {
    const updatedUsers = [...this.usersSubject.value, user];
    this.usersSubject.next(updatedUsers);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  deleteUser(user: User) {
    const updatedUsers = this.usersSubject.value.filter(u => u !== user);
    this.usersSubject.next(updatedUsers);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
}
