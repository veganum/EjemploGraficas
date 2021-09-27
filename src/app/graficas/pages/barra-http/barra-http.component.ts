import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { GraficasServiceService } from '../../services/graficas-service.service';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-barra-http',
  templateUrl: './barra-http.component.html',
  styles: [],
})
export class BarraHttpComponent implements OnInit {
  pdfFiles = [
    {
      name: 'PDF File One',
      startPage: 2,
      path: './assets/sample1.pdf',
    },
    {
      name: 'KML File Two',
      startPage: 4,
      path: './assets/KML_Samples.kml',
    },
  ];

  constructor() {}

  ngOnInit() {}

  // downloadPdf(pdfUrl: string, pdfName: string) {

  //   FileSaver.saveAs(pdfUrl, pdfName);
  // }

  // openDoc(pdfUrl: string, startPage: number) {
  //   window.open(pdfUrl + '#page=' + startPage, '_blank', '');
  // }

  downloadPdf(pdfUrl: string, pdfName: string) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string, startPage: number) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '');
  }
}
