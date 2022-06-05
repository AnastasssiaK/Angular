import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services";

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  @Input()
  singleMovie: IMovie;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([`/movie/${this.singleMovie.id}`], {relativeTo: this.activatedRoute})
  }
}
