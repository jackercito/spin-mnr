import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Auth0Service } from './auth0.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private auth: Auth0Service) { }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }
}
