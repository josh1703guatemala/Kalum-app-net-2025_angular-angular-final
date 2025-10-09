import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,
            MatToolbarModule,

  ],
  templateUrl: './dashboard.html',
  styles: ``
})
export class Dashboard {

}
