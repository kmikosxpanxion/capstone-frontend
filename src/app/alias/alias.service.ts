import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Alias } from './alias';
import { AliasSearch } from './alias-search';

@Injectable({
  providedIn: 'root'
})
export class AliasService {

  private baseURL = "http://localhost:8180/springboot-backend/api/v1/aliases";

  constructor(private httpClient: HttpClient) { }
  
  getAliasesByAlias(aliasName: string): Observable<AliasSearch[]>{
    return this.httpClient.get<AliasSearch[]>(`${this.baseURL}/results/${aliasName}`);
  }

  getAliasesByReportName(reportName: string): Observable<AliasSearch[]>{
    return this.httpClient.get<AliasSearch[]>(`${this.baseURL}/reports/results/${reportName}`)
  }

//   createEmployee(report: Report): Observable<Object>{
//     return this.httpClient.post(`${this.baseURL}`, report);
//   }

//   getEmployeeById(id: number): Observable<Report>{
//     return this.httpClient.get<Report>(`${this.baseURL}/${id}`);
//   }

//   updateEmployee(id: number, report: Report): Observable<Object>{
//     return this.httpClient.put(`${this.baseURL}/${id}`, report);
//   }

//   deleteEmployee(id: number): Observable<Object>{
//     return this.httpClient.delete(`${this.baseURL}/${id}`);
//   }
// }
}