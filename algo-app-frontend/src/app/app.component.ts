import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'algo-app-frontend';

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

}
