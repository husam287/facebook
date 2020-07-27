import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  login=false;

  constructor(private http:HttpClient) { }

  uploadInfo(data){
    return this.http.post('https://facebook-d8169.firebaseio.com/facebook.json',data)
  }
}
