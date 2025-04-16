import {User} from "../dto/user.interface";
import {Injectable, signal} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StoreUser {
  users = signal<User[]>([]);

  setUsers(users: User[]) {
    this.users.set(users);
  }
}
