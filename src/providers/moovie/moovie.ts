import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
  //nao se torna obrigatorio pois ja setamos valor
  getMovies(page = 1){ 
    
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=198688be6f0e6b9975ef6e82f0bca69c`);
  }

  getMovieById(filmeID){
    return this.http.get(`https://api.themoviedb.org/3/movie/${filmeID}?api_key=198688be6f0e6b9975ef6e82f0bca69c`);
  }

}
