import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
