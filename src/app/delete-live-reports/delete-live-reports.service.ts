import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LiveReport } from './live-report';

@Injectable({
  providedIn: 'root'
})
export class LiveReportService {

  private baseURL = "http://localhost:8180/springboot-backend/api/v1/rootdocs";

  constructor(private httpClient: HttpClient) { }
  

  getLiveReportsByTitle(title: string): Observable<LiveReport[]>{
    return this.httpClient.get<LiveReport[]>(`${this.baseURL}/results/${title}`);
  }

  // deleteLiveReport(id: number): Observable<LiveReport>{
  //   return this.httpClient.delete<LiveReport>(`${this.baseURL}/results/${id}`);
  // }
  
}