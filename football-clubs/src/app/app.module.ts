import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleClubComponent } from './club/single-club/single-club.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleClubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: SingleClubComponent },
       { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
