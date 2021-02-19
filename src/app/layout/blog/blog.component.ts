import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  title: string | null | undefined;
  blog: any;

  constructor(public userService: UserService,  public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
    });
    console.log('category name', this.title)
    this.getAblog();
  }

  getAblog() {
    this.userService.getBlog(this.title).subscribe(
      (data: any) => {
        this.blog = data;
        console.log('blog data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
  
}
