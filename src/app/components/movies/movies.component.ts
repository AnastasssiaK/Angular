import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams. subscribe(({page})=> {
      this.movieService.getAll(page || 1).subscribe(value => {
        this.movies = value.results
      })
    })
  }

}
