import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
  }

}
