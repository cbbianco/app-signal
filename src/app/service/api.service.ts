import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../dto/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}


  loadUsers = (): Observable<Array<User>> => {
    return this.http.get<User[]>(this.URL);
  }
}
