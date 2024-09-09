import { Component } from '@angular/core'
import { USERS } from './users-db'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
