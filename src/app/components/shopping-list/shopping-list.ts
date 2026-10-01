import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItem } from '../list-item/list-item';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  imports: [ListItem, FormsModule],
  selector: 'app-shopping-list',
  styleUrl: './shopping-list.css',
  templateUrl: './shopping-list.html',
})
export class ShoppingList {

  newItemName = '';

  shoppingList: ShoppingItem[] = [ // initial list of items, for testing purposes
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Eggs' },
    { id: 3, name: 'Bread' },
    { id: 4, name: 'Butter' }
  ];

  addItem() {
    const name = this.newItemName.trim();
    if (!name) return;

    this.shoppingList = [{ id: this.nextId(), name }, ...this.shoppingList];
    this.newItemName = '';
  }

  // called on child's (remove); parent owns the list
  removeItem(item: ShoppingItem) {
    this.shoppingList = this.shoppingList.filter(i => i.id !== item.id);
  }

  private nextId(): number {
    return Math.max(0, ...this.shoppingList.map(i => i.id)) + 1;
  }

}
