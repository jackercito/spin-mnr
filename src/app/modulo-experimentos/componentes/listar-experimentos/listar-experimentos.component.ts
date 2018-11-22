import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { Subscription } from 'rxjs';
import { ExperimentosServiceService } from './../../services/experimentos-service.service';
import { Auth0Service } from '../../../services/auth0.service';

import { BotonVerExperimentoComponent } from './../../../componentes/ag-grid/boton-ver-experimento/boton-ver-experimento.component';

@Component({
  selector: 'app-listar-experimentos',
  templateUrl: './listar-experimentos.component.html',
  styleUrls: ['./listar-experimentos.component.css']
})
export class ListarExperimentosComponent implements OnInit, OnDestroy  {
  experimentos: any[];
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  gridOptions: GridOptions;
  columnDefs: any[]
  sizePage: number = 25;
  rowData: any[];

  private gridApi;
  private gridColumnApi;
  private getRowHeight;

  paginationPageSize;
  frameworkComponents;
  context;

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service) {
    this._getExperimentos();

    this.columnDefs = [
      {
        headerName: "ESPECTROMETRO",
        field: "espectrometro",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "SONDA",
        field: "sonda",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "MUESTRA",
        field: "muestra",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "SOLICITUD",
        field: "solicitud",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "USUARIO (ENTRADA)",
        field: "usuario_entrada",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "FECHA (ENTRADA)",
        field: "fecha_entrada",
        filter: "agDateColumnFilter",
        valueFormatter: dateFormat,
        filterParams: {
          comparator: compararFechas,
          newRowsAction: 'keep'
        },
        suppressMenu: true
      }, {
        headerName: "USUARIO (SALIDA)",
        field: "usuario_salida",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }, {
        headerName: "FECHA (SALIDA)",
        field: "fecha_salida",
        filter: "agDateColumnFilter",
        valueFormatter: dateFormat,
        filterParams: {
          comparator: compararFechas,
          newRowsAction: 'keep'
        },
        suppressMenu: true
      }, {
        headerName: "VER",
        suppressFilter: true,
        pinned: "right",
        field: "value",
        cellRenderer: 'botonVerExperimentoComponent',
        colId: "params",
        width: 100,
        minWidth: 100
      }
    ];

    this.context = { componentParent: this };


    this.frameworkComponents = {
      botonVerExperimentoComponent: BotonVerExperimentoComponent
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onPageSizeChanged(newPageSize) {
    this.gridApi.paginationSetPageSize(this.sizePage);
  }

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
        this.rowData = data;
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

function compararFechas(filterLocalDateAtMidnight, cellValue) {
  var dateAsString = cellValue;

  if (dateAsString != null) {
    var dateParts = dateAsString.split("-");
    var cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2].substr(0, 2)));

    if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }
}

function dateFormat(params) {
  var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  if (params.value !== undefined || params.value != null)
    return new Date(params.value).toLocaleDateString('es-ES', options);
  else
    return '';
}
