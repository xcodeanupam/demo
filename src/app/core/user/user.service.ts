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


  gettestBycategory(data): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(data)
    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/alltest/testbycategory`, { "categoryname": data }, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  getTableData(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods':'GET',
      'Content-Type': 'application/json',
      'Bearer': 'szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    });

    // console.log(data)
    return this.httpClient.get(`https://www.salonlari.de/rest/all/V1/salesRules/search?searchCriteria%5BpageSize%5D=20&searchCriteria%5BcurrentPage%5D=2`, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  gettestQuestions(question, testname) {
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

  getResult(result_id) {
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

  startTest(testname, resultId, right, wrong, onques ) {
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


  addAnswer(testname, result_id, istrue, answer,  questionnumber){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "testname": testname,
      "result_id": result_id,
      "answer": answer,
      "correct": istrue,
      "onquestion": questionnumber
    }

    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/answers/add`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  updateTest(testname, resultId, right, wrong) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let data = {
      "testname": testname,
      "result_id": resultId,
      "right": right,
      "wrong": wrong,
    }

    return this.httpClient.post(`https://blogs-daily.herokuapp.com/api/results/starttest`, data, { headers: reqHeader })
      .pipe(map((data: any) => {
        return data;
      }));
  }

}
