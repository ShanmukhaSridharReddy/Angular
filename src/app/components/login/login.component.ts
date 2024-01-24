import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

// import { UserService } from 'src/app/services/user-service/user.service';
// import { HIDE_PASS_ICON, SHOW_PASS_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  passType = "hide";

  constructor(public formBuilder: FormBuilder, public router: Router,  iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public loginService :UserService) {
    // iconRegistry.addSvgIconLiteral('show-password-icon', sanitizer.bypassSecurityTrustHtml(SHOW_PASS_ICON));
    // iconRegistry.addSvgIconLiteral('hide-password-icon', sanitizer.bypassSecurityTrustHtml(HIDE_PASS_ICON));
  } 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

  // get userName() {
  //   return this.loginForm.get('userName');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  togglePasswordVisibility(visibility = "hide") {  
    this.passType = visibility
  }

  
  async onSubmit() {
    this.submitted = true;
    const { userName, password } = this.loginForm.value
    console.log(this.f["userName"].errors?.['email']);
    

    if (this.loginForm.invalid) {
      return;
    }

   const res = await this.loginService.login({ "email": userName, "password": password });
  
   console.log(res);
   localStorage.setItem('token',res.data)
   this.router.navigate(["/dashboard/notes"])
   console.log(localStorage.getItem('token'));
   
    // if(res?.status) {
    //   this.openFailedLoginMsg('Invalid Username / Password')
    //   this.loginForm.reset()
    // }

    // if(res?.id) {
    //   this.openFailedLoginMsg("Login Sucessfully...!!!")
    //   this.router.navigate(["dashboard/notes"])
    // }
  }
}
