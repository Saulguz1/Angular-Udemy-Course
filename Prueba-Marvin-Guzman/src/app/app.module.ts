import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComfortComponent } from './pages/comfort/comfort.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AboutupComponent } from './pages/aboutup/aboutup.component';
import { PeopleComponent } from './pages/people/people.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ComfortComponent,
    GalleryComponent,
    ServiciosComponent,
    AboutupComponent,
    PeopleComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
