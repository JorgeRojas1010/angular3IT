import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { AppIndicatorComponent } from './pages/app-indicator/app-indicator.component';
import { GraphComponent } from './pages/graph/graph.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapModule } from './shared/ng-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppIndicatorComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    NgBootstrapModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
