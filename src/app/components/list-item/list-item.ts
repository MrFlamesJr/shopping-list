import { Component, Input, Output, EventEmitter} from '@angular/core';
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

  // remove logic
  @Output() remove: EventEmitter<ShoppingItem> = new EventEmitter<ShoppingItem>();
  onRemove():void {
    this.remove.emit(this.item);
  }
}
