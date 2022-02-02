import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies: any;

  constructor(public userService: UserService,) { }

  ngOnInit(): void {
    this.getMoviesAll();
  }
  getMoviesAll() {
    this.userService.getAllMoviesData().subscribe(
      (data: any) => {
        this.movies = data;
        // this.dataload = false;
        console.log('Movies  data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
  
}