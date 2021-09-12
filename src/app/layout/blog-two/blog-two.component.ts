import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';


@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss']
})
export class BlogTwoComponent implements OnInit {

  title: string | null | undefined;
  movie: any;
  dataload = true;

  constructor(public userService: UserService,  public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
    });
    console.log('movie name', this.title)
    this.getaMovie();
    if(this.movie){
      this.getaMovie()
    }
  }

  getaMovie() {
    this.userService.getMovies(this.title).subscribe(
      (data: any) => {
        this.movie = data[0];
        this.dataload = false;
        console.log('movie data', data)
      },
      error => {
        this.getaMovie()
        console.log('movie', error);
      }
    );
  }
}
