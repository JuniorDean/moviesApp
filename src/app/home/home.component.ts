import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Films } from '../Films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number;
  btnText : string = ' Rechercher ';
  goalMovie =  '';
  moviez = [];
  favoriteFilm = [];
  emptyText = false;
  test :Films[];

  constructor(private _data:DataService) {
    
   }

  
  ngOnInit() {
  this._data.topMovie.subscribe(res => this.favoriteFilm = res);
  this._data.changeFavoriteFilm(this.favoriteFilm);

  this._data.mov.subscribe(mov => this.moviez = mov);
  this._data.changeFilm(this.moviez);

  this.itemCount = this.moviez.length;
  // this._data.goal.subscribe(res => this.movies = res);
  // this._data.changeGoal(this.movies);
  
  }

  addItem() {
    if ((this.goalMovie.length) !== 0) { // Si c'est contraire de vide
    this.moviez.push([this.goalMovie, 'far fa-heart']); // On ajoute l'input
    this.goalMovie = ''; // On vide l'input de recherche
    this.itemCount = this.moviez.length;
    this.emptyText = false; 
    this._data.changeFilm(this.moviez);
    } else {
     this.emptyText = true;
  }
}

  onFavoriteClick(i) {
    console.log(this.moviez);
    if (this.moviez[i][1] === 'fas fa-heart') {
       this.moviez[i][1] = 'far fa-heart';
       this.favoriteFilm.push(this.moviez[i]);
       //this._data.changeFavoriteFilm(this.favoriteFilm);
       //this._data.addFavFilm(this.favoriteFilm);
     } else { // pas dans favoris
      
       this._data.addFavFilm(new Films(this.moviez[i][0],'fas fa-heart'));
       this.moviez[i][1] = 'fas fa-heart';
       //const ifavo = this.favoriteFilm.indexOf(this.moviez[i]);
       //this.favoriteFilm.splice(ifavo, 1);
       //this._data.changeFavoriteFilm(this.favoriteFilm);
       
       //this._data.addFavFilm(this.favoriteFilm);
  }


  // // Ajout d'un film grâce au btn 
  // addItem(){
  //   this.movies.push(this.goalMovie);
  //   this.goalMovie = '';
  //   this.itemCount = this.movies.length;
  //   this._data.changeGoal(this.movies);
  //   this.emptyText = false;
  // }

  // removeItem(i){
  //   this.movies.splice(i, 1);
  //   this._data.changeGoal(this.movies);
  // }

  }

  removeFilm(i) {
    this.moviez.splice(i, 1);
    this.itemCount = this.moviez.length;
   }



}
