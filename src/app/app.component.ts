import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users-information-app';
  
  constructor(private dataService: DataService) {}

  getUsers(): any {
    return this.dataService.users$;
  }


}
