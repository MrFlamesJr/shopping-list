# Shopping List - Angular Lab 3

## Goal

- Text input + **Ajouter** button
- List of items, each with **Supprimer** button
- Minimum 2 components: form, list
- Dedicated parent component manages the list
- Bootstrap styling
- Deliver via GitHub Classroom

---

## Useful Commands

```bash
# Create project (standalone, CSS)
ng new shopping-list --standalone

# Add Bootstrap
ng add @ng-bootstrap/ng-bootstrap

# Components
ng generate component shopping-list
ng generate component shopping-list/add-item
ng generate component shopping-list/list-item

# Dev server (localhost:4200), auto-rebuilds and live-reloads on save
ng serve

# Same, and opens the browser automatically
ng serve --open

# Tests (re-run on save)
ng test
```

- Auto-refresh: no setup, `ng serve` watches `src/` and reloads the browser on each save
- Not refreshing? Restart `ng serve`, or add `--poll 2000` (helps on network drives / WSL)

- Shorthand: `ng g c`, `ng g s`, `ng g class`

---

## Tentative Structure

```
src/app/
  app.ts / app.html          root, hosts shopping-list
  shopping-list/             parent, owns items[]
    shopping-list.ts / .html
    add-item/                input + Ajouter (emits up)
    list-item/               items + Supprimer (receives list, emits up)
```

`app.html`:
```html
<div class="container">
  <app-shopping-list></app-shopping-list>
</div>
```

`shopping-list.html`:
```html
<app-add-item (add)="addItem($event)"></app-add-item>
<app-list-item
  [items]="items"
  (remove)="removeItem($event)">
</app-list-item>
```

`shopping-list.ts`:
```ts
items: string[] = [];

addItem(item: string) { this.items = [...this.items, item]; }
removeItem(index: number) { this.items = this.items.filter((_, i) => i !== index); }
```

### Data flow
- `add-item` emits `(add)` with text
- Parent updates `items[]`
- Parent passes `[items]` down to `list-item`
- `list-item` emits `(remove)` with index
- Parent updates `items[]`
- No service needed

---

### Components
- Each component lists its own `imports`
- Uses `ngModel`: import `FormsModule`
- Uses child component: import its class
- Missing import: template error

### Template-driven forms
- `[(ngModel)]="newItem"` for two-way binding
- `name` attribute required inside `<form>`
- `FormsModule` required

```html
<input class="form-control" name="item" [(ngModel)]="newItem">
<button class="btn btn-success" (click)="add()">Ajouter</button>
```

### Event binding
- `(click)="method()"`
- Used on add and delete buttons

### Control flow
- `@for (item of items; track $index) { ... }`
- `@empty { ... }` for empty list
- `@if (cond) { ... } @else { ... }`
- No extra import needed

### Parent to child: `@Input`
- `@Input() items: string[] = [];`
- Bind: `[items]="items"`

### Child to parent: `@Output`
- `@Output() remove = new EventEmitter<string>();`
- Emit: `this.remove.emit(item)`
- Listen: `(remove)="removeItem($event)"`

### Sibling communication
- Siblings cannot talk directly
- Go through the parent: child emits up, parent passes down
- Alternative: shared service (`inject()` + `BehaviorSubject` or `signal`)

### Immutable updates
- `[...items, x]` to add
- `.filter(...)` to remove
- Never mutate in place

### Model
- Plain `string` is enough
- Or class/interface with `id` + `name`
- `id` helps `track` and correct deletion

---

## Checklist

- [ ] Ajouter appends item
- [ ] Input cleared after add
- [ ] Empty / whitespace input ignored (`trim()`)
- [ ] Supprimer removes only its item
- [ ] Parent + 2 child standalone components
- [ ] Parent owns `items[]`
- [ ] Bootstrap classes applied


