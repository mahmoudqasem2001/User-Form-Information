import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  getUsers(): any {
    return this.dataService.users$;
  }

  ngOnInit(): void {}

  addUser() {
    if (this.userForm.valid) {
      this.dataService.addUser({
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        phoneNumber: this.userForm.value.phoneNumber
      });

      this.userForm.reset();
    }
  }
}
