import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../async (params:type) => {
  environments
}/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = `${environment.apiBaseUrl}/hotels`;

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getHotelById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  searchHotels(params: any): Observable<any> {
    // Implement search functionality based on params
    return this.http.get<any>(`${this.apiUrl}/search`, { params });
  }

  bookHotel(bookingData: any): Observable<any> {
    // Implement booking functionality
    return this.http.post<any>(`${this.apiUrl}/book`, bookingData);
  }
}
