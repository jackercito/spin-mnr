import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../../services/auth0.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Experimento } from '../../modelo/experimento.model'
import { ExperimentosServiceService } from './../../services/experimentos-service.service';

@Component({
  selector: 'app-ver-experimento',
  templateUrl: './ver-experimento.component.html',
  styleUrls: ['./ver-experimento.component.css']
})
export class VerExperimentoComponent implements OnInit {
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  experimento: Experimento = new Experimento();

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service, private route: ActivatedRoute, private router: Router, private snotifyService: SnotifyService) {
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

  deleteExperimento() {
    this._deleteExperimento();
  }

  editarExperimento() {
    this.router.navigate(['/experimentos/editar/' + this.experimento._id])
  }

  onSuccess(msg) {
    this.snotifyService.success(msg, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
  }

  onError(err, titulo) {
    this.snotifyService.error(err, titulo, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
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

  private _deleteExperimento() {
    this.experimentosSubscription = this.apiExperimento.deleteExperimento$(this.experimento._id).subscribe(
      data => {
        this.onSuccess('Experimento eliminado');
        this.router.navigate(['/experimentos/listar'])
      },
      err => this.onError(err, 'Error al elimina el experimento')
    );
  }

  private _destroyExperimentoSubscription() {
    if (this.experimentosSubscription)
      this.experimentosSubscription.unsubscribe();
  }
}
