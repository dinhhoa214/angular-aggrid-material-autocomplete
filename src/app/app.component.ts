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
      sortable: true,
      resizable: true
    };
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.rowData = this.createRowData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  private createColumnDefs() {
    return [
        {headerName: '#', field: 'id', width: 70, headerClass: 'printHeader'},
        {headerName: 'JobName', field: 'JobName', width: 160, headerClass: 'printHeader'},
        {headerName: 'DataName', field: 'DataName', width: 150, headerClass: 'printHeader'},
        {headerName: 'ProcessJobID', field: 'ProcessJobID', headerClass: 'printHeader'},
        {headerName: 'PDFAnalysisReportCreationDateTime', field: 'PDFAnalysisReportCreationDateTime', headerClass: 'analysisHeader'},
        {headerName: 'PDFAnalysisTime', field: 'PDFAnalysisTime', headerClass: 'analysisHeader'},
        {headerName: 'AnalysisResult', field: 'AnalysisResult', headerClass: 'analysisHeader'},
        {headerName: 'OutputPredictionReportCreationDateTime', field: 'OutputPredictionReportCreationDateTime', headerClass: 'predictionHeader'},
        {headerName: 'SimulationResult', field: 'SimulationResult', headerClass: 'predictionHeader'},
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

