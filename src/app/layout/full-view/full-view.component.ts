import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent implements OnInit {

  title: string | null | undefined;
  product: any;
  dataload = true;


  constructor(public userService: UserService,  public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
    });
    console.log('product name', this.title)
    this.getProduct();
  }

  getProduct() {
    this.userService.getProduct(this.title).subscribe(
      (data: any) => {
        this.product = data[0];
        this.dataload = false;
        console.log('product data', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
