import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {UsersFacade} from "./service/facade/api.facade";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app-signal-facade';

  private facade = inject(UsersFacade);

  users = this.facade.users;

  error = this.facade.error;


  ngOnInit() {
    this.facade.loadUsers();
  }

}
