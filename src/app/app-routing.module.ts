import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppIndicatorComponent } from './pages/app-indicator/app-indicator.component';
import { GraphComponent } from './pages/graph/graph.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'indicator/:param', component: AppIndicatorComponent },
  { path: 'graph/:param', component: GraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
