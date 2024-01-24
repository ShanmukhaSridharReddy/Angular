import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { group } from 'console';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm!:FormGroup
  constructor(private formBuilder:FormBuilder, public httpService :HttpService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      userName:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(6)]],
      confirmpassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSignup(){
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      
      // Additional logic to handle registration
      this.httpService.signup(userData)
        .then(response => {
          // Handle the success response
          console.log('User registered successfully:', response);
        })
        .catch(error => {
          // Handle the error
          console.error('Error during registration:', error);
        });
    } else {
      // Form is invalid, display error messages or take appropriate action
    }
  }

}
