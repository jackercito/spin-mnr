import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Auth0Service } from '../../services/auth0.service';

import { Experimento } from '../modelo/experimento.model'

@Injectable({
  providedIn: 'root'
})
export class ExperimentosServiceService {

  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getExperimentos$(): Observable<Experimento[]> {
    return this.http
      .get<Experimento[]>("/experimento", { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`) })
      .pipe(catchError(this._handleError));
  }

  getOneExperimento$(id: string): Observable<Experimento> {
    return this.http
      .get<Experimento>("/experimento/:id", { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`) })
      .pipe(catchError(this._handleError));
  }

  setExperimentos$(experimento: Experimento): Observable<any> {
    return this.http
      .post<Experimento>("/experimento", experimento, { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`) })
      .pipe(catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }
}
