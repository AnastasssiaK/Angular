import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HeaderComponent} from "./components/header/header.component";
import {MainInterceptor} from "./main.interceptor";
import { MoviesComponent } from './components/movies/movies.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { HomeComponent } from './components/home/home.component';
import { GenresComponent } from './components/genres/genres.component';
import { SingleGenreComponent } from './components/single-genre/single-genre.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MoviesComponent,
    SingleMovieComponent,
    HomeComponent,
    GenresComponent,
    SingleGenreComponent,
    MovieDetailsComponent,
    MoviesByGenreComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
