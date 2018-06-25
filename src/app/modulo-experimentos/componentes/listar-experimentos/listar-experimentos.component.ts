import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperimentosServiceService } from './../../services/experimentos-service.service';
import { Auth0Service } from '../../../services/auth0.service';

@Component({
  selector: 'app-listar-experimentos',
  templateUrl: './listar-experimentos.component.html',
  styleUrls: ['./listar-experimentos.component.css']
})
export class ListarExperimentosComponent implements OnInit, OnDestroy  {
  experimentos: any[];
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service) { }

  ngOnInit() {
    this.authSubscription = this.auth.loggedIn$
      .subscribe(loggedIn => {
        if (loggedIn) {
          this._getExperimentos();
        } else {
          this.experimentos = null;
          this._destroyExperimentosSubscription();
        }
      });
  }

  ngOnDestroy() {
    // Unsubscribe from observables
    this.authSubscription.unsubscribe();
    this._destroyExperimentosSubscription();
  }

  private _getExperimentos() {
    // Subscribe to dragons API observable
    this.experimentosSubscription = this.apiExperimento.getExperimentos$()
      .subscribe(
      data => {
        this.experimentos = data;
        },
        err => console.warn(err),
        () => console.log('Request complete')
      );
  }

  private _destroyExperimentosSubscription() {
    // If a dragons subscription exists, unsubscribe
    if (this.experimentosSubscription) {
      this.experimentosSubscription.unsubscribe();
    }
  }

}
