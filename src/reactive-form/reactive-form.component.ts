import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    user:new FormControl(''),
    password: new FormControl('')
  })

  loginUser(){
    console.log(this.loginForm)
  }

}
