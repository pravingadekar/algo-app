import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiService } from './services/api.service';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // ✅ fixed
})
export class AppComponent implements OnInit {
  title = 'algo-app-frontend';

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  message: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessage().subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: (error) => {
        console.error('Error fetching message:', error);
      }
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
