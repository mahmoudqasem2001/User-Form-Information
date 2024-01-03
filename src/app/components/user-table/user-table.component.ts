import { Component, Input } from '@angular/core';
import User from '../../interfaces/user';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
    @Input() users: User[] | null = [];

    constructor(private dataService: DataService) {}


    deleteUser(user: any) {
      // Call your data service method to delete the user
      this.dataService.deleteUser(user);
    }
}
