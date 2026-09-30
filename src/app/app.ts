import { Component } from '@angular/core';
import { ShoppingList } from './components/shopping-list/shopping-list';

@Component({
  imports: [ShoppingList],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
