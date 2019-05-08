import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { GridOptions } from "ag-grid-community";
import { Subscription } from 'rxjs';
import { ExperimentosServiceService } from './../../services/experimentos-service.service';
import { Auth0Service } from '../../../services/auth0.service';

import { BotonVerExperimentoComponent } from './../../../componentes/ag-grid/boton-ver-experimento/boton-ver-experimento.component';
import { locale } from '../../../componentes/ag-grid/localeText'

@Component({
  selector: 'app-listar-experimentos',
  templateUrl: './listar-experimentos.component.html',
  styleUrls: ['./listar-experimentos.component.css']
})
export class ListarExperimentosComponent implements OnInit, OnDestroy  {
  experimentos: any[];
  authSubscription: Subscription;
  experimentosSubscription: Subscription;

  private gridApi;
  private gridColumnApi;
  private getRowHeight;

  public paginationPageSize;
  public context;
  public localeText = locale;
  public frameworkComponents;

  gridOptions: GridOptions;
  columnDefs: any[]
  rowData: any[];
  sizePage: number = 25;
  empresas: any[];
  delegaciones: any[];

  constructor(private apiExperimento: ExperimentosServiceService, private auth: Auth0Service) {
    this._getExperimentos();

    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowModelType = 'infinite';
    this.gridOptions.rowHeight = 35;
    this.paginationPageSize = 25;

    var def = {
      filter: "agTextColumnFilter",
      filterParams: {
        caseSensitive: false,
        newRowsAction: 'keep'
      },
      resizable: true,
      sortable: true,
      minWidth: 135
    }

    this.columnDefs = [
      {
        headerName: "ESPECTROMETRO",
        field: "espectrometro",
        ...def,
      }, {
        headerName: "SONDA",
        field: "sonda",
        ...def,
      }, {
        headerName: "MUESTRA",
        field: "muestra",
        ...def,
      }, {
        headerName: "SOLICITUD",
        field: "solicitud",
        ...def,
      }, {
        headerName: "USUARIO (ENTRADA)",
        field: "usuario_entrada",
        ...def,
      }, {
        headerName: "FECHA (ENTRADA)",
        field: "fecha_entrada",
        ...def,
        filter: "agDateColumnFilter",
        valueFormatter: dateFormat,
        filterParams: {
          comparator: compararFechas,
          newRowsAction: 'keep'
        },
        suppressMenu: true
      }, {
        headerName: "",
        field: "completo",
        suppressMenu: true,
        ...def,
        filter: false,
        minWidth: 25,
        maxWidth: 25,
        width: 25,
        cellStyle: function (params) {
          if (params.value)
            return { backgroundColor: 'green', color: 'green' };
          else
            return { backgroundColor: 'red', color: 'red' };
        },
        //valueGetter: function (param) { return '' }
      }, {
        headerName: "USUARIO (SALIDA)",
        field: "usuario_salida",
        ...def,
      }, {
        headerName: "FECHA (SALIDA)",
        field: "fecha_salida",
        ...def,
        filter: "agDateColumnFilter",
        valueFormatter: dateFormat,
        filterParams: {
          comparator: compararFechas,
          newRowsAction: 'keep'
        },
        suppressMenu: true
      }, {
        headerName: "VER",
        ...def,
        filter: false,
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
    this.autoSizeAll();
    this.getFiltros();
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

  onFilterChanged(value) {
    this.guardar();
    try {
      this.gridApi.setQuickFilter(value);
    } catch (err) { }
  }

  getFiltros() {
    if (localStorage.getItem('ColumnStateExperimentos') != "" && localStorage.getItem('ColumnStateExperimentos') != null) {
      var columnStateToken = JSON.parse(localStorage.getItem('ColumnStateExperimentos'));
      this.gridColumnApi.setColumnState(columnStateToken);
    }

    if (localStorage.getItem('FilterModelExperimentos') != "" && localStorage.getItem('FilterModelExperimentos') != null) {
      var filterModelToken = JSON.parse(localStorage.getItem('FilterModelExperimentos'));
      this.gridApi.setFilterModel(filterModelToken);
    }

    if (localStorage.getItem('SortModelExperimentos') != "" && localStorage.getItem('SortModelExperimentos') != null) {
      var sortModelToken = JSON.parse(localStorage.getItem('SortModelExperimentos'));
      this.gridApi.setSortModel(sortModelToken);
    }
  }

  resetearFiltros() {
    localStorage.setItem('ColumnStateExperimentos', "");
    localStorage.setItem('FilterModelExperimentos', "");
    localStorage.setItem('SortModelExperimentos', "");

    this.gridApi.setFilterModel(null);
    this.gridColumnApi.resetColumnState();
    this.gridColumnApi.resetColumnGroupState();
    this.gridApi.setSortModel(null);
    this.gridApi.onFilterChanged();
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onBtExport() {
    var params = {
      processCellCallback: function (param) {
        var valor = param.value;;
        if (param.value) {
          switch (param.column.colDef.field) {
            case "fecha_entrada":
              var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
              valor = new Date(param.value).toLocaleDateString('es-ES', options);
              break;
            case "fecha_salida":
              var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
              valor = new Date(param.value).toLocaleDateString('es-ES', options);
              break;
            default:
              return param.value;
          }
        }
        return valor;
      }
    }
    this.gridApi.exportDataAsCsv(params);
  }

  private guardar() {
    localStorage.setItem('ColumnStateExperimentos', JSON.stringify(this.gridColumnApi.getColumnState()));
    localStorage.setItem('FilterModelExperimentos', JSON.stringify(this.gridApi.getFilterModel()));
    localStorage.setItem('SortModelExperimentos', JSON.stringify(this.gridApi.getSortModel()));
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
  if (params.value !== undefined && params.value != null)
    return new Date(params.value).toLocaleDateString('es-ES', options);
  else
    return '';
}
