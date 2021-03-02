import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BreakpointService } from 'src/app/shared/breakpoint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  options = [{
    name: 'sony',
    link: '',
    image: ''
  }];
  filteredOptions: Observable<string[]> | undefined;
  showFiller = false;
  dataload: boolean = true;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.getSearchList()
  }
  constructor(private breakpointService: BreakpointService, public userService: UserService,  public router: Router, public route: ActivatedRoute) { }
  private _filter(value: string): any {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  isMobile(): boolean {
    return this.breakpointService.isMobile();
  }

  getSearchList() {
    this.userService.getSearch().subscribe(
      (data: any) => {
        this.options = data;
        this.dataload = false;
        console.log('search data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
