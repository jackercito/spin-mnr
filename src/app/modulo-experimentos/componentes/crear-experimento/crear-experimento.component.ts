import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperimentosServiceService } from './../../services/experimentos-service.service';
import { Auth0Service } from '../../../services/auth0.service';
import { Subscription } from 'rxjs';

import { Experimento } from '../../modelo/experimento.model'

import { SnotifyService, SnotifyPosition } from 'ng-snotify';

const ESPECTROMETROS = ['ESPECTROMETRO VARIAN MERCURY AS400', 'ESPECTRÓMETRO BRUKER AVANCE III / 500(Muestras Líquidas)', 'ESPECTRÓMETRO BRUKER AVANCE III / HD(Muestras sólidas)'];
const SONDA_A = ['4NUC (5mm)', 'ATB (5mm)']
const SONDA_B = ['PABBI (5mm)', 'PASEX (10mm)']
const SONDA_C = ['SPRB400172_7164 (7,5mm)', 'SPRB400172_7423 (7,5mm)', 'H8906-20_007 (Triple Resonancia)', 'H13664_0016 (2,5mm)', 'H12138_0076 (Dobe Resonancia)', 'H13349_0014 (Baja frecuencia)']

@Component({
  selector: 'app-crear-experimento',
  templateUrl: './crear-experimento.component.html',
  styleUrls: ['./crear-experimento.component.css']
})
export class CrearExperimentoComponent implements OnInit {
  espectrometros: string[] = ESPECTROMETROS;
  sondas: string[];

  experimento: Experimento = new Experimento();

  startDate = new Date();
  finDate: Date = new Date();
  finDate2: Date = new Date();

  espectrometroSeleccionado: string;
  sondaSeleccionada: string;

  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service, private route: ActivatedRoute, private router: Router, private snotifyService: SnotifyService) {
    auth.handleLoginCallback();
  }

  ngOnInit() {
  }

  onSelectEspectrometro(event) {
    console.log(event);
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

  savedExperimento() {
    this.experimento.espectrometro = this.espectrometroSeleccionado;
    this.experimento.sonda = this.sondaSeleccionada;
    this.experimento.fecha_entrada = this.finDate;
    this.experimento.fecha_salida = this.finDate2;
    this._savedExperimento();
  }

  onSuccess(msg) {
    this.snotifyService.success(msg, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
  }

  onError(err, titulo) {
    this.snotifyService.error(err, titulo, { showProgressBar: false, timeout: 5000, position: SnotifyPosition.rightTop });
  }

  private _savedExperimento() {
    this.experimentosSubscription = this.apiExperimento.setExperimentos$(this.experimento).subscribe(
      data => {
        this.onSuccess('Experimento creado con exito');
        this.router.navigate(['/experimentos/mostrar/' + data['_id']])
      },
      err => {
          this.onError(err, 'Error al crear el experimento')
      }
    );
  }
}
