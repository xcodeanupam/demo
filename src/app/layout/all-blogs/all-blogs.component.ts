import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  blogs: any;

  constructor(public userService: UserService,) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }
  getAllBlogs() {
    this.userService.getAllBlogsData().subscribe(
      (data: any) => {
        this.blogs = data;
        // this.dataload = false;
        console.log('blogs data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
