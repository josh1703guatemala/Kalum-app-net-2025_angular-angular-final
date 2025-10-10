import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';


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

  constructor( private router: Router){

  }

  /*Esto dispara el evento del sidenav*/
  onToggleSidenave() {
    this.toogleSidenav.emit();
  }

  isLogedIn(){
    return this.loggin;
  }

  loginLogout(){
    if(this.isLogedIn()){
      this.router.navigate(['/login']);
    }else{
      
    }
  }

}
