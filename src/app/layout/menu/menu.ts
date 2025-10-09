import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


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

  @Output() toogleSidenav = new EventEmitter<void>();

  /*Esto dispara el evento del sidenav*/
  onToggleSidenave() {
    this.toogleSidenav.emit();
  }

}
