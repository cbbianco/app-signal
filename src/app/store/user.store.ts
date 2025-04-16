import {User} from "../dto/user.interface";
import {Injectable, signal} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StoreUser {
  users = signal<User[]>([]);
  error = signal<string | null>(null);

  setUsers(users: User[]) {
    this.users.set(users);
  }


  setErrorUser(message: string | null) {
    this.error.set(message);
  }
}
