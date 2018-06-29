import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { GridOptions } from "ag-grid/main";
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
        headerName: "ID",
        field: "_id",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      },
      {
        headerName: "ID",
        field: "espectrometro",
        suppressMenu: true,
        filterParams: {
          caseSensitive: true
        },
        minWidth: 135
      }
    ];

    this.context = { componentParent: this };
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
