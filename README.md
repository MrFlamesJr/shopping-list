# Shopping List - SEG3502 Lab 3

## Commands
```bash
ng new shopping-list
ng generate component shopping-list   
ng generate component list-item      
ng serve                              
```

## Data Flow
- `ShoppingList` owns `shoppingList: ShoppingItem[]` (`{ id, name }`)
- Parent -> child: `[item]="item"` (`@Input`)
- Child -> parent: `(remove)="removeItem($event)"` (`@Output` + `EventEmitter`)

## Key Points
- `[(ngModel)]` uses `FormsModule`: keeps an input and a component property in sync (2 way).
- `@for (... track item.id)`: `id` so its unique
- Updates: `[new, ...list]` to add, `.filter()` to remove
- `:host(:not(:last-child))`: styles the host element only when it matches, used to skip the last divider
- Input trimmed, empty ignored, cleared after add
