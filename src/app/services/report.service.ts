import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = 'https://localhost:5001/api/reports';

  constructor(private http: HttpClient) {}

  generateReport(filters: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, filters);
  }
}
