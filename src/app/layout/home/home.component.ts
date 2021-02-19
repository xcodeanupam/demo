import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { BreakpointService } from 'src/app/shared/breakpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    { 'image': '../assets/images/banner2.jpg' },
    { 'image': '../assets/images/banner5.jpg' },
    { 'image': '../assets/images/banner4.jpg' },
    { 'image': '../assets/images/banner2.jpg' },
    { 'image': '../assets/images/banner5.jpg' },
    { 'image': '../assets/images/banner4.jpg' },
  ];
  constructor(private breakpointService: BreakpointService, )
  {}
  ngOnInit(): void {
  }
  isMobile(): boolean {
    return this.breakpointService.isMobile();
  }
}
