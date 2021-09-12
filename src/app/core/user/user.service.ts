import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../user/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {



  constructor(private httpClient: HttpClient,
    private apiService: ApiService) { }


  getListtestList(): Observable<any> {
    return this.apiService.post(`api/alltest/list`, {})
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getProductsByCategory(cat: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "categoryName": cat
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/categoryproducts/getCategoryProducts`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  getSearch(): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "categoryName": 's'
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/search/getSearch`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  getCategoriesData(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "categoryName": 's'
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/category/listcategory`, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  getBlog(cat: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "title": cat
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/blogs/getBlog`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getMovies(cat: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "title": cat
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/movie/getMovie`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  getProduct(cat: any): Observable<any> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "productName": cat
    }

    return this.httpClient.post(`https://reviews-stackasian.herokuapp.com/api/categoryproducts/getAProduct`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }




  getTableData(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json',
      'Bearer': 'szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });

    // console.log(data)
    return this.httpClient.get(`https://www.salonlari.de/rest/all/V1/salesRules/search?searchCriteria%5BpageSize%5D=20&searchCriteria%5BcurrentPage%5D=2`, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  gettestQuestions(question: string, testname: string) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "number": question,
      "testname": testname
    }

    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/questions/test`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }

  getResult(result_id: string) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "result_id": result_id
    }

    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/results/get`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  getListCategories(): Observable<any> {
    return this.apiService.post(`api/category/listcategory`, {})
      .pipe(map((data: any) => {
        return data;
      }));
  }

  startTest(testname: string, resultId: string, right: string, wrong: string, onques: string) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "testname": testname,
      "result_id": resultId,
      "right": right,
      "wrong": wrong,
      "onquestion": onques
    }

    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/results/starttest`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }







}
