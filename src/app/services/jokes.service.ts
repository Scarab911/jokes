import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  //GET random joke from API

  public getRandomJoke(): Observable<any> {
    const resp = this.http.get('https://lithuanian-jokes.herokuapp.com/random');
    return resp
  };

}



