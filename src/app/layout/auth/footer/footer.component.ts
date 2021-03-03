import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/shared/breakpoint.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private breakpointService: BreakpointService,) { }

  ngOnInit(): void {
  }
  isMobile(): boolean {
    return this.breakpointService.isMobile();
  }
}
