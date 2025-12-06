import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login implements OnInit{
  
  form!: FormGroup;
  user: User = new User();

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){

  }

  ngOnInit(): void {
   this.form = this.fb.group({
    /*Los nombres de username y password deben coincidir con la etiqueta formControlName del html*/
      username : ['', Validators.required],
      password : ['', Validators.required]
   });
  }

  onSubmit(){
    if(this.form.valid){
      this.user.username = this.form.get('username')?.value;
      this.user.password = this.form.get('password')?.value;
      this.user;
      this.authService.login(this.user).subscribe({

        next : (response : any) => {

          if(response.success){

            const payload = this.authService.getPayload(response.data.token);
            this.authService.saveToken(response.data.token);
            this.authService.saveUser(payload);

            Swal.fire({
              title : "Login",
              text: `Bienvenido al Sistema ${payload.Username}!`,
              icon: "success"
            }).then( result => {
              if(result.isConfirmed){
                this.router.navigate(['/']);
              }
            });
          }

        }, error: (error : any) => {

              Swal.fire({
              title : "Login",
              text: error.error.errors,
              icon: "error"
            }).then((result) =>{
              if(result.isConfirmed){
                this.router.navigate(['/login'])
              }
            });

        }});
    }
  }

}
