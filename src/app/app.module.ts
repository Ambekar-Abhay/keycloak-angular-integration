import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializer } from '../utils/app-init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializer, 
      deps: [ KeycloakService ], 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
