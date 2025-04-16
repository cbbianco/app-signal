import {StoreUser} from "../../store/user.store";
import {Injectable} from "@angular/core";
import {ApiService} from "../api.service";
import {User} from "../../dto/user.interface";

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  readonly users = this.store.users;
  readonly error = this.store.error;

  constructor(private store: StoreUser, private service: ApiService) {}

  loadUsers() {
    this.service.loadUsers().subscribe({
      next: (users: Array<User>) => {
        this.store.setUsers(users);
      },
      error: (err: any) => {
        this.store.setErrorUser(err.message);
      },
    });
  }
}
