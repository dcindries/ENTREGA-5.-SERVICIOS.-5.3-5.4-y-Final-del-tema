import { Component, OnInit } from '@angular/core';
import { CdClickedService, CD } from '../cd-clicked.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clickedCds: CD[] = [];

  constructor(private cdClickedService: CdClickedService) { }

  ngOnInit(): void {
    this.cdClickedService.getClickedCds().subscribe({
      next: (cds: CD[]) => {
        this.clickedCds = cds;
      },
      error: (err: any) => console.error('Error al obtener los CD clicados:', err)
    });
  }
}
