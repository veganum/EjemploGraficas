import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarraHttpComponent } from './pages/barra-http/barra-http.component';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonutComponent,
    DonutHttpComponent,
    GraficaBarraComponent,
    BarraHttpComponent,
  ],
  imports: [CommonModule, GraficasRoutingModule, ChartsModule],
})
export class GraficasModule {}
