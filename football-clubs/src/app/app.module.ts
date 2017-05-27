import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleClubComponent } from './club/single-club/single-club.component';
import { ClubsListComponent } from './club/clubs-list/clubs-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavComponent } from './nav/nav.component';
import { ClubDetailsComponent } from './club/club-details/club-details.component';

import { ClubsService } from './club/clubs.service';
import { CreateClubComponent } from './club/create-club/create-club.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleClubComponent,
    ClubsListComponent,
    MainPageComponent,
    NavComponent,
    ClubDetailsComponent,
    CreateClubComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MainPageComponent },
      { path: 'single', component: SingleClubComponent },
      { path: 'clubs/:id', component: ClubDetailsComponent, pathMatch: 'full'},
      { path: 'club/create', component: CreateClubComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: '**', redirectTo: 'home', pathMatch: 'full' },
       
    ]),
  ],
  providers: [ClubsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
