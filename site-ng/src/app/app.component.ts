import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import necessary modules here
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Indicates the component is standalone
  imports: [
    MatToolbarModule, // Import Angular Material modules here
    MatButtonModule,
    RouterModule
  ]
})
export class AppComponent { }
