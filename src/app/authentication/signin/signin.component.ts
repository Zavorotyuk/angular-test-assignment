import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
      this.signinForm = fb.group({
        'email' : [null, Validators.required],
        'password' : [null, Validators.required],
      })
    }

  ngOnInit() {}

  signin(formValue) {
    this.auth.signin(formValue).subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      err => {

      }
    )
  }

}
