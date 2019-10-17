import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

// Módulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTE } from './pages.route';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
      SharedModule,
      PAGES_ROUTE,
      FormsModule,
      ChartsModule
  ]
})

export class PagesModule { }
