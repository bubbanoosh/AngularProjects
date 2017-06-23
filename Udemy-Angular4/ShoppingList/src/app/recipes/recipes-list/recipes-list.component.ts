import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg'),
    new Recipe('Bacon smoked onion rings', 'Wrapped in bacon and smoked', 'http://grilling24x7.com/wp/wp-content/uploads/2015/06/oring11.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
