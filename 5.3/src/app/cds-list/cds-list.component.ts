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

  constructor(private cdService: CdClickedService) { }

  ngOnInit(): void {
    this.cdService.getCDs().subscribe({
      next: (data) => {
        this.cds = data;
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Se ha producido un error: ', err);
      }
    });
  }

  onCdClick(cd: CD): void {
    this.cdService.addClickedCD(cd);
  }
}
