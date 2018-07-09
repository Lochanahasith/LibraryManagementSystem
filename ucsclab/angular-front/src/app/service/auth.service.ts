/*import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(
  private http:Http
  ) { }
  registerUser(user){
    console.log(user);
    let headers = new Headers();
   // headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));
    //this.http.post("http://localhost:3000/user/register",user,{headers:headers}).map(res=>res.json());
  
  }
}
*/
import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';
//import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;   
  resv:any;
  //user:any;

  authtoken:any;
  constructor(
    private http:Http
  ) { }

  registerUser(user){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    //insert data and return result back
    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));   
  }
  makeRes(resv){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    //insert data and return result back
    return this.http.post("http://localhost:3000/resv/savereservation",resv,{headers:headers}).pipe(map(res=>res.json()));   
  }

  showLabs(){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    //insert data and return result back
    return this.http.post("http://localhost:3000/labs/show",{headers:headers}).pipe(map(res=>res.json()));   
    //return this.http.post("http://localhost:3000/labs/show",{headers:headers});   
  }

  showResvList(){
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    //insert data and return result back
    return this.http.post("http://localhost:3000/resv/showRes",{headers:headers}).pipe(map(res=>res.json()));   
    //return this.http.post("http://localhost:3000/labs/show",{headers:headers});   
  }
  
  deleteResv(resv){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
 
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/resv/delete",resv, {headers:headers});
  }

  deleteLab(lab){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
 
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/labs/delete",lab, {headers:headers});
  }
 
 
 





  loginUser(user){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()));

  }

  
 
  
  storeData(token,userdata){

    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken = token;
    this.user= userdata
  }

  getProfile(){


    this.fetchToken();

    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3000/user/profile",{headers:headers}).pipe(map(res=>res.json()));

  }

  fetchToken(){

    const token = localStorage.getItem("tokenid");
    this.authtoken = token;

  }
  /*loggedIn() {

    return tokenNotExpired();
  }
*/
  logout(){

    this.authtoken  = null;
    this.user = null;
    localStorage.clear();

  }
}