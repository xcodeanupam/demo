import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BreakpointService } from 'src/app/shared/breakpoint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any;

  slides = [
    { 'image': '../assets/images/banner2.jpg' },
    { 'image': '../assets/images/banner5.jpg' },
    { 'image': '../assets/images/banner4.jpg' },
    { 'image': '../assets/images/banner2.jpg' },
    { 'image': '../assets/images/banner5.jpg' },
    { 'image': '../assets/images/banner4.jpg' },
  ];
  constructor(private breakpointService: BreakpointService, public userService: UserService,  )
  {}
  ngOnInit(): void {
    this.getCategories()
  }
  isMobile(): boolean {
    return this.breakpointService.isMobile();
  }

  getCategories() {
    this.userService.getCategoriesData().subscribe(
      (data: any) => {
        this.categories = data;
        // this.dataload = false;
        console.log('category data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
