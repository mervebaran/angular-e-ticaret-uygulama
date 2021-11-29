import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
   
  // login(user:User):boolean{
  //   if(user.userName=="merve"&&user.password=="12345"){
  //     return true;
  //     this.loggedIn = true;
  //     localStorage.setItem("isLogged","true");
  //   }
  //   return false;
  // }

isLoggedIn(): boolean{
  return this.loggedIn;
}

logOut(){
  localStorage.removeItem("isLogged");
  this.loggedIn=false;
}

}
