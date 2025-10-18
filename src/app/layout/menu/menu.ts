import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu',
  imports: [
            CommonModule,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            RouterModule],
  templateUrl: './menu.html'
})
export class Menu {

  loggin: boolean = true;

  @Output() toogleSidenav = new EventEmitter<void>();

  constructor( private router: Router, private authService: AuthService){

  }

  /*Esto dispara el evento del sidenav*/
  onToggleSidenave() {
    this.toogleSidenav.emit();
  }

  isLogedIn(){
    return this.loggin;
  }

  logout(){
    console.log('click');
    if(this.authService.isAuthenticated()){
      let username = this.authService.user.username;
      Swal.fire({
        title : 'Logout',
        text: `${username}, has cerrado sesión con éxito`,
        icon: 'success'
      }).then((result) =>{
        if(result.isConfirmed){
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      });
    }
  }

}
