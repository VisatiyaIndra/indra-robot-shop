import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  isAuthenticated: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (user) => this.isAuthenticated = user
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
    this.router.navigate(['sign-in']);
  }
}
