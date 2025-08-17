import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; // Adjust the URL as needed
  constructor(private http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/message`).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching message:', error);
        throw error;
      })
    );
  }
}
