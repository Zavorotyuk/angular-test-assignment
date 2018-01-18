import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
      this.signupForm = fb.group({
        'name': [null, Validators.required],
        'email' : [null, Validators.required],
        'password' : [null, Validators.required],
        'confirm-password': [null, Validators.required]
      })
   }

  ngOnInit() {}

  signup(formValue) {
    this.auth.signup(formValue).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      err => {

      }
    )
  }

}
