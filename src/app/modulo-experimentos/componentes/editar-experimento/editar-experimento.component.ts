import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../../services/auth0.service';
import { SnotifyService, SnotifyPosition } from 'ng-snotify';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { Experimento } from '../../modelo/experimento.model'
import { ExperimentosServiceService } from './../../services/experimentos-service.service';

const ESPECTROMETROS = ['ESPECTROMETRO VARIAN MERCURY AS400', 'ESPECTRÓMETRO BRUKER AVANCE III / 500(Muestras Líquidas)', 'ESPECTRÓMETRO BRUKER AVANCE III / 500(Muestras sólidas)'];
const SONDA_A = ['4NUC (5mm)', 'ATB (5mm)', 'BB (10mm)']
const SONDA_B = ['PABBI (5mm)', 'PASEX (10mm)']
const SONDA_C = ['SPRB400172_7164 (7,5mm)', 'SPRB400172_7423 (7,5mm)']

@Component({
  selector: 'app-editar-experimento',
  templateUrl: './editar-experimento.component.html',
  styleUrls: ['./editar-experimento.component.css']
})
export class EditarExperimentoComponent implements OnInit {
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  experimento: Experimento = new Experimento();

  finDateFechaEntrada: Date = new Date();
  finDateFechaSalida: Date = new Date();

  espectrometros: string[] = ESPECTROMETROS;
  sondas: string[];

  espectrometroSeleccionado: string;
  sondaSeleccionada: string;

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

  onSelectEspectrometro(event) {
    switch (event) {
      case ESPECTROMETROS[0]:
        this.sondas = SONDA_A;
        break;
      case ESPECTROMETROS[1]:
        this.sondas = SONDA_B;
        break;
      case ESPECTROMETROS[2]:
        this.sondas = SONDA_C;
        break;
    }
  }

  editarExperimento() {
    this.experimento.espectrometro = this.espectrometroSeleccionado
    this.experimento.sonda = this.sondaSeleccionada
    this.experimento.fecha_entrada = this.finDateFechaEntrada;
    if (this.experimento.completo) this.experimento.fecha_salida = this.finDateFechaSalida
    this._putExperimento();
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
        this.onSelectEspectrometro(this.experimento.espectrometro);
        this.espectrometroSeleccionado = this.experimento.espectrometro;
        this.sondaSeleccionada = this.experimento.sonda;
        this.finDateFechaEntrada = this.experimento.fecha_entrada;
        this.finDateFechaSalida = this.experimento.fecha_salida;
      },
      err => {
        this.onError(err, 'Error al cargar el experimento');
        this.router.navigate(['/experimentos/listar/'])
      }
    );
  }

  private _putExperimento() {
    this.experimentosSubscription = this.apiExperimento.putExperimento$(this.experimento).subscribe(
      data => {
        this.onSuccess("Experimento editado con exito")
        this.router.navigate(['/experimentos/mostrar/', this.experimento._id])
      }, err => this.onError(err, "Error al editar el experimento")
    )
  }

  private _destroyExperimentoSubscription() {
    if (this.experimentosSubscription)
      this.experimentosSubscription.unsubscribe();
  }
}
