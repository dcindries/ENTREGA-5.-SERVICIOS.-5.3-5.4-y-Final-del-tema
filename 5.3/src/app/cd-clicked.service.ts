import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface CD {
  id: number;
  title: string;
  artist: string;
}

@Injectable({
  providedIn: 'root'
})
export class CdClickedService {
  private url = 'assets/cds.json';
  private clickedCds: CD[] = [];
  private clickedCdsSubject = new BehaviorSubject<CD[]>(this.clickedCds);

  constructor(private http: HttpClient) { }

  getCDs(): Observable<CD[]> {
    return this.http.get<CD[]>(this.url)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los CD’s:', error);
          return throwError('Error al cargar los CD’s. Por favor, inténtalo de nuevo más tarde.');
        })
      );
  }

  addClickedCD(cd: CD): void {
    this.clickedCds.push(cd);
    this.clickedCdsSubject.next(this.clickedCds);
  }

  getClickedCds(): Observable<CD[]> {
    return this.clickedCdsSubject.asObservable();
  }
}
