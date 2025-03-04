import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CdsListComponent } from './cds-list/cds-list.component';

import { CdClickedService } from './cd-clicked.service';

const routes: Routes = [
  { path: '', redirectTo: '/cds', pathMatch: 'full' },
  { path: 'cds', component: CdsListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CdsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CdClickedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
