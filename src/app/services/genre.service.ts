import { Injectable } from '@angular/core';
import {urls} from "../constants";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IGenres} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }

  getAll(genresObj: []):Observable<IGenres>{
    return this.httpClient.get<IGenres>(urls.genres,{params: {genresObj}})
  }
}
