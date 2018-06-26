import { Component, OnInit } from '@angular/core';
import { ExperimentosServiceService } from './../../services/experimentos-service.service';
import { Auth0Service } from '../../../services/auth0.service';
import { Subscription } from 'rxjs';

const ESPECTROMETROS = ['ESPECTROMETRO VARIAN MERCURY AS400', 'ESPECTRÓMETRO BRUKER AVANCE III / 500(Muestras Líquidas)', 'ESPECTRÓMETRO BRUKER AVANCE III / 500(Muestras sólidas)'];
const SONDA_A = ['4NUC (5mm)', 'ATB (5mm)','BB (10mm)']
const SONDA_B = ['PABBI (5mm)', 'PASEX (10mm)']
const SONDA_C = ['SPRB400172_7164 (7,5mm)','SPRB400172_7423 (7,5mm)']

@Component({
  selector: 'app-crear-experimento',
  templateUrl: './crear-experimento.component.html',
  styleUrls: ['./crear-experimento.component.css']
})
export class CrearExperimentoComponent implements OnInit {
  espectrometros: string[] = ESPECTROMETROS;
  sondas: string[];

  experimento: any = {}

  startDate = new Date();
  finDate: any;
  finDate2: any;

  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service) { }

  ngOnInit() {
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

  savedExperimento() {
    this._savedExperimento();
  }

  private _savedExperimento() {
    this.experimentosSubscription = this.apiExperimento.setExperimentos$(this.experimento)
      .subscribe(
        res => console.log(res),
        err => console.warn(err),
        () => console.log('Request complete')
      );
  }
}
