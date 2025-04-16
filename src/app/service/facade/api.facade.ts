import {StoreUser} from "../../store/user.store";
import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {User} from "../../dto/user.interface";

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  readonly users = this.store.users;

  constructor(private store: StoreUser, private service: ApiService) {}

  load() {
    this.service.loadUsers().subscribe({
      next: (users: Array<User>) => {
        this.store.setUsers(users);
      },
      error: (err: any) => {
        console.error(err.message)
      },
    });
  }
}
