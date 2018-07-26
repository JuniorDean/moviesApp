import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Films } from './Films';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private movieFavorite = new BehaviorSubject<any>([]);
  private moviez = new BehaviorSubject<any>([]);
  private favmovies = new Array<Films>();
  topMovie = this.movieFavorite.asObservable();//this.movieFavorite.asObservable();
  mov = this.moviez.asObservable();
  apiFilmUrl = 'http://www.omdbapi.com/?apikey=df029431&t=';


  // private bestMovie = new BehaviorSubject<any>([]);
  // private films = new BehaviorSubject<any>([]);

  // private goals = new BehaviorSubject<any>([]);
  // goal = this.goals.asObservable();


  constructor(private http: HttpClient) {

   }

    addFavFilm(film: Films){
    
       this.favmovies.push(film);
       let f:any;
       f =  this.http.get<any>(this.apiFilmUrl + film.title).subscribe(res => {
         f = res;
       console.log(f);
      });
       
    }

   changeFavoriteFilm(movieFavorite){
     this.movieFavorite.next(movieFavorite);
   }

   changeFilm(moviez){
     this.moviez.next(moviez);
   }
   getFilms(): Array<Films>{
     return this.favmovies;
   }

  //  changeFavoriteMovie(filmFavorite) {
  //   this.bestMovie.next(filmFavorite);
  // }

  // changeGoal(goal){
  //   this.goals.next(goal);
  // }
  

}
