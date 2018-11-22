import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Auth0Service } from './services/auth0.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message;

  constructor(private http: HttpClient, public auth: Auth0Service) {
    auth.handleLoginCallback();
  }

  ngOnInit() { }
}
