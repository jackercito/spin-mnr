import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './../../../services/auth0.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profileArray = this._makeProfileArray(this.auth.userProfile);

  constructor(public auth: Auth0Service) { }

  ngOnInit() {
    console.log(this.auth.userProfile);
  }

  private _makeProfileArray(obj) {
    const keyPropArray = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + obj[key]);
      }
    }

    return keyPropArray;
  }

}
