import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/service/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwtToken != null) {
          alert("Hola, Tu token es " + response.jwtToken);
          const jwt = response.jwtToken;
          localStorage.setItem('jwtToken', jwt);
          this.router.navigateByUrl("/dashboard");
        }
      }
    );
  }
}
