import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { TeamsViewComponent } from './teams-view/teams-view.component';
import { TeamService } from './services/team.service'

@NgModule({
  declarations: [
    AppComponent,
    DetailViewComponent,
    TeamsViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
