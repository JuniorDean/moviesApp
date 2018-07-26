import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {DataService} from '../data.service';
import { Films } from '../Films';


@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.scss']
})
export class FavoriComponent implements OnInit {

  filmsf:any;

  constructor(private route: ActivatedRoute, private router: Router, private _data:DataService) { }

  ngOnInit() {
    this.filmsf = this._data.getFilms();
    console.log(this.filmsf)
  }

  removeFavoriteFilm(i) {
     this.filmsf[i][1] = 'far fa-trash-alt';
     this.filmsf.splice(i, 1);
     this._data.changeFavoriteFilm(this.filmsf);
   }

  

  

}
