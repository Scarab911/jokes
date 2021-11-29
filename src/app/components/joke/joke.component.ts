import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Joke } from '../../models/Joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  public joke!: Joke;

  constructor(private jokesService: JokesService) {
    
  }

  ngOnInit(): void {
   this.jokesService.getRandomJoke().subscribe((response) => {
    this.joke = response;
    });
  }

  public get newJoke(): string {
    this.jokesService.getRandomJoke().subscribe((response) => {
     this.joke = response;
    });
    return this.joke.text
  };
}
