import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss']
})
export class BlogTwoComponent implements OnInit {

  title: string | null | undefined;
  movie: any;
  dataload = true;
  x: any;

  constructor(public userService: UserService,  public router: Router, public route: ActivatedRoute,   private sanitizer: DomSanitizer
    ) {
      if(this.movie){
        console.log('link', this.movie.youtube)
        this.x = this.sanitizer.bypassSecurityTrustHtml(this.movie.youtube);

      }

   }

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
        this.x = this.sanitizer.bypassSecurityTrustHtml(this.movie.youtube);

      },
      error => {
        this.getaMovie()
        console.log('movie', error);
      }
    );
  }
}
