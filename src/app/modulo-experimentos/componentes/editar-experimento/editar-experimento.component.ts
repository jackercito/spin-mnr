import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../../services/auth0.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { Experimento } from '../../modelo/experimento.model'
import { ExperimentosServiceService } from './../../services/experimentos-service.service';

@Component({
  selector: 'app-editar-experimento',
  templateUrl: './editar-experimento.component.html',
  styleUrls: ['./editar-experimento.component.css']
})
export class EditarExperimentoComponent implements OnInit {
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  experimento: Experimento = new Experimento();

  constructor(
    private apiExperimento: ExperimentosServiceService,
    private auth: Auth0Service,
    private route: ActivatedRoute,
    private router: Router,
    private snotifyService: SnotifyService,
    private _location: Location,) {
    auth.handleLoginCallback();
  }

  ngOnInit() {
    this._getExperimento();
  }

  ngOnDestroy() {
    if (this.authSubscription)
      this.authSubscription.unsubscribe();
    this._destroyExperimentoSubscription();
  }

  editarExperimento() {
    
  }

  onSuccess(msg) {
    this.snotifyService.success(msg, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
  }

  onError(err, titulo) {
    this.snotifyService.error(err, titulo, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
  }

  goBack() {
    this._location.back();
  }

  private _getExperimento() {
    this.experimentosSubscription = this.apiExperimento.getOneExperimento$(this.route.snapshot.params['id']).subscribe(
      data => {
        this.experimento = data;
      },
      err => {
        this.onError(err, 'Error al cargar el experimento');
        this.router.navigate(['/experimentos/listar/'])
      }
    );
  }

  private _destroyExperimentoSubscription() {
    if (this.experimentosSubscription)
      this.experimentosSubscription.unsubscribe();
  }
}
