import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-aggrid-material-autocomplete';
  allReports: [];
  sorters: [];
  currentPage: 1;
  pageSize: 10;
  totalItems: 0;
  sortColumn: [];

  gridOptions: GridOptions;
  searchText = 'sadas';
  private gridApi;
  private gridColumnApi;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.gridOptions = {} as GridOptions;
    this.gridOptions.defaultColDef = {
      resizable: true
    };
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.rowData = this.createRowData();
    // tslint:disable-next-line:only-arrow-functions
    this.gridOptions.getRowStyle = function(params) {
      if (params.node.rowIndex % 2 === 0) {
      return { background: 'red' }
      }
  }
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  autoSizeAll() {
    const allColumnIds = [];
    // tslint:disable-next-line:only-arrow-functions
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  private createColumnDefs() {
    return [
        {headerName: '#', field: 'id', headerClass: 'printHeader', cellClass: 'cellHeader', width: 50},
        {headerName: 'JobName', field: 'JobName', headerClass: 'printHeader', cellClass: 'cellHeader'},
        {headerName: 'DataName', field: 'DataName', headerClass: 'printHeader', cellClass: 'cellHeader'},
        {headerName: 'ProcessJobID', field: 'ProcessJobID', headerClass: 'printHeader', cellClass: 'cellHeader'},
        {headerName: 'PDFAnalysisReportCreationDateTime', field: 'PDFAnalysisReportCreationDateTime', width: 250,
        suppressSizeToFit: true, headerClass: 'analysisHeader', cellClass: 'cellAnalysisHeader'},
        {headerName: 'PDFAnalysisTime', field: 'PDFAnalysisTime', headerClass: 'analysisHeader', cellClass: 'cellAnalysisHeader'},
        {headerName: 'AnalysisResult', field: 'AnalysisResult', headerClass: 'analysisHeader', cellClass: 'cellAnalysisHeader'},
        {headerName: 'OutputPredictionReportCreationDateTime', field: 'OutputPredictionReportCreationDateTime',
        headerClass: 'predictionHeader', cellClass: 'cellPredictionHeader'},
        {headerName: 'SimulationResult', field: 'SimulationResult', headerClass: 'predictionHeader', cellClass: 'cellPredictionHeader'},
      ];
  }

  private createRowData() {
    return [
      {
        id: '1',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
      {
        id: '2',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
      {
        id: '3',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
      {
        id: '4',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
      {
        id: '5',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
      {
        id: '6',
        JobName: 'JobName',
        DataName: 'DataName',
        ProcessJobID: 'ProcessJobID',
        PDFAnalysisReportCreationDateTime: 'PDFAnalysisReportCreationDate&Time',
        PDFAnalysisTime: 'PDFAnalysisTime',
        AnalysisResult: 'AnalysisResult',
        OutputPredictionReportCreationDateTime: 'OutputPredictionReportCreationDate&Time',
        SimulationResult: '2'
      },
    ];
}

onQuickFilterChanged($event) {
  this.gridOptions.api.setQuickFilter($event.target.value);
}


}

