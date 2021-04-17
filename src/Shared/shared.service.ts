import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public role= new BehaviorSubject<any>('')
  public roleName=this.role.asObservable()
//  public loggedInUserDetails= new Subject
  public userObj = new BehaviorSubject<any>({});
  public loggedInUserDetails = this.userObj.asObservable();
}
