import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthGuard } from 'src/Shared/auth.guard';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(protected readonly keycloak: KeycloakService,private AuthGuard:AuthGuard) { }

  ngOnInit(): void {
    console.log(this.keycloak)
  }

}
