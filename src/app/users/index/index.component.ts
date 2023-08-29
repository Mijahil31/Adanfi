import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../interfaces/user.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  public myForm!: FormGroup;
  public myFormEdit!: FormGroup;

  public newUser: User = {
    name: '', lastName: '', email: '', password: ''
  }

  public editButton: Boolean = false;
  public idUser!: number;

  get listUser(): User[] { return this.userService.getUsers; }

  constructor(private userService: UserServiceService, private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.myFormEdit = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  addUser(): void {
    console.log(this.myForm.value);
    this.userService.add(this.myForm.value);
  }

  getValue(idUser: number): void {
    let user: User = this.userService.getUserByID(idUser);
    this.editButton = true;
    this.idUser = idUser;
    this.myFormEdit.setValue(user);
    
  }

  update(id: number): void{
    this.userService.updateUserById(id, this.myFormEdit.value);
    this.editButton = false;
  }
}
