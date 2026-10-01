import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  imports: [FormsModule],
  selector: 'app-list-item',
  styleUrl: './list-item.css',
  templateUrl: './list-item.html',
})
export class ListItem {

  // in: parent sets via [item]
  @Input() item: ShoppingItem = { id: 0, name: '' };

  // TODO: remove logic goes here (using @Output and EventEmitter)

}
