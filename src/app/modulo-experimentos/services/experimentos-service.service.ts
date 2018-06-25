import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Auth0Service } from '../../services/auth0.service';

@Injectable({
  providedIn: 'root'
})
export class ExperimentosServiceService {

  constructor(private http: HttpClient, private auth: Auth0Service) { }

  getExperimentos$(): Observable<any[]> {
    return this.http
      .get<any[]>("/experimento", { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`) })
      .pipe(catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return throwError(errorMsg);
  }
}
