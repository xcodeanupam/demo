import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryName!: string | null;
  products: any;

  constructor(public userService: UserService,  public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryname');
    });
    console.log('category name', this.categoryName)
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    this.userService.getProductsByCategory(this.categoryName).subscribe(
      (data: any) => {
        this.products = data;
        console.log('all products', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }
  

}
