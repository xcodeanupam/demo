
import { Injectable } from '@angular/core';
import { ApiService } from '../user/api.service';
import { JwtService } from '../user/jwt.service';
import { User, Socialusers } from '../model/user.model';
import { Observable, BehaviorSubject, ReplaySubject, from } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private jwtService: JwtService) {
    this.currentUserSubject = new BehaviorSubject<User>(window.localStorage['jwtToken']);
    this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  
  populate() {
    if (this.jwtService.getToken()) {
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.currentUserValue
      });
     
      this.httpClient.get('https://blogs-daily.herokuapp.com/api/user/currentuser',  { headers: reqHeader })
        .subscribe(
          (data: any) => {
            console.log('data logged in user is', data)
            // this.setAuth(data)
          },
          err => {
            console.log('error is', err)
            this.logout()
          }
        );
    } 
    else {
      // this.logout();
    }
  }

  getcurrentUser() {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.currentUserValue
    });
   
    return this.httpClient.get(`https://blogs-daily.herokuapp.com/api/user/currentuser`, { headers: reqHeader })
      .pipe(map((data: any) => {
        console.log('data is', data)
        // this.setAuth(data)
        return data;
      }));
  }

  getBlogs(){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.currentUserValue
    });
   
    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/user/blogs`, {},  { headers: reqHeader })
      .pipe(map((data: any) => {
        console.log('data is', data)
        // this.setAuth(data)
        return data;
      }));
  }

  setAuth(user: any) {
    console.log('set auth', user)
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.user.stsTokenManager.accessToken);
    // Set current user data into observable
    this.currentUserSubject.next(user.user.stsTokenManager.accessToken);
  }

  login(credential: any) {
    console.log('s', credential)
    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/user/login`, credential)
      .pipe(map((data: any) => {
        this.setAuth(data);
        return data;
      }));
  }

  addBlog(credential: any) {
    console.log('s', credential)
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.currentUserValue
    });
    return this.httpClient.post(`api/user/addblog`, credential,  { headers: reqHeader })
      .pipe(map((data: any) => {
        // this.setAuth(data);
        return data;
      }));
  }


  register(user: User) {
    console.log('serve form value', user)
    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/user/register`, user)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  emailVarified() {
    return this.apiService.get(`api/user/verifyemail`)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  update(user: User): Observable<User> {
    return this.apiService.put('/user/update', { user })
      .pipe(map((data: any) => {
        this.currentUserSubject.next(data);
        return data;
      }));
  }

  forgetPassword(user: User): Observable<User> {
    return this.apiService.post('/user/forget-password', user)
      .pipe(map((data: any) => {
        return data;
      }));
  }

  resetPassword(token: string, user: User): Observable<User> {
    return this.apiService.post(`/user/reset-password/${token}`, { password: user })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  logout() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null as unknown as User);
    this.isAuthenticatedSubject.next(false);
  }
  // logout() {
  //   // remove user from local storage and set current user to null
  //   this.jwtService.destroyToken();
  //   this.currentUserSubject.next({} as User);
  //   location.reload(true);
  // }

}