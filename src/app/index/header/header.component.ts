import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { SharedService } from 'src/Shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roleName: any
  userSubscription: any;
  userName: any;
  roleSubscription: any;
  constructor(
    private router: Router, private keycloakService: KeycloakService,
    private sharedservice: SharedService) { }

  ngOnInit() {
    console.log(this.keycloakService)
    this.userSubscription = this.sharedservice.loggedInUserDetails.subscribe((resp: any) => {
      this.userName = resp.name
    })
    this.roleSubscription = this.sharedservice.roleName.subscribe((resp: any) => {
      this.roleName = resp
    })
  }
  logout() {
    this.keycloakService.logout();
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}
