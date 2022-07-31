import {IReports} from "./reports";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Report } from '../Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = "http://localhost:8180/springboot-backend/api/v1/reports";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Report[]>{
    return this.httpClient.get<Report[]>(`${this.baseURL}`);
  }

  createEmployee(report: Report): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, report);
  }

  getEmployeeById(id: number): Observable<Report>{
    return this.httpClient.get<Report>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, report: Report): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, report);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
