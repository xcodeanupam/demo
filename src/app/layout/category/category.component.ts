import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { Meta, Title } from '@angular/platform-browser';
import { MesssageService } from 'src/app/core/user/message.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryName!: string | null;
  products: any;
  dataload = true;
  titleIs: any



  constructor(public userService: UserService, public router: Router, public route: ActivatedRoute, public messageService: MesssageService, private metaTagService: Meta, private title: Title) {
  
  
   
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('categoryname');
    });

    this.messageService.routeSource.subscribe(data=>{
      if(data === 'technical'){
      }
      else {
        console.log('d', data)
        this.products= []
        this.categoryName = data
        this.getProductsByCategory();
      }
      
  })

     this.titleIs = this.categoryName;
    if(this.titleIs === 'mobiles'){
      this.titleIs = 'best mobile phone with offers';
      this.title.setTitle(this.titleIs);
      this.metaTagService.addTags([
        { name: 'description', content: 'one plus phone offfers discount, mobiles true reviews and ratings, new phones, discounts,  sale' },
        { name: 'keywords', content: 'one plus phone offfers discount, mobiles true reviews and ratings' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Stack Asian Tm' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'date', content: '2020-11-21', scheme: 'YYYY-MM-DD' },
        { charset: 'UTF-8' }
      ]);
  
    }
  


    console.log('category name', this.categoryName)
    this.getProductsByCategory();
  }


  getProductsByCategory() {
    this.userService.getProductsByCategory(this.categoryName).subscribe(
      (data: any) => {
        this.products = data;
        this.dataload = false;
        console.log('all products', data)
      },
      error => {
        console.log('error', error);
      }
    );
  }


}
