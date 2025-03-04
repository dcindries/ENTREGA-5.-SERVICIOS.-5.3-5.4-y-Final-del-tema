import { Component, OnInit } from '@angular/core';
import { CdClickedService, CD } from '../cd-clicked.service';

@Component({
  selector: 'app-cds-list',
  templateUrl: './cds-list.component.html',
  styleUrls: ['./cds-list.component.css']
})
export class CdsListComponent implements OnInit {
  cds: CD[] = [];
  errorMessage: string = '';
  loading: boolean = true; 

  constructor(private cdService: CdClickedService) { }

  ngOnInit(): void {
    console.log('Iniciando la carga de CD\'s');
    this.cdService.getCDs().subscribe({
      next: (data) => {
        this.cds = data;
        this.loading = false;
        console.log('CDs cargados:', data);
      },
      error: (err) => {
        this.errorMessage = err;
        this.loading = false;
        console.error('Se ha producido un error:', err);
      }
    });
  }

  onCdClick(cd: CD): void {
    this.cdService.addClickedCD(cd);
  }
}
