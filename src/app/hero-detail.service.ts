import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroDetailService {
  constructor(private http: HttpClient) {
    console.log("ctor HeroDetailService");
  }

  public getName(): Promise<Object> {
    // return 'Name From HeroDetailService';
    console.log("getName");
    const promise = new Promise((res, rej) => {
      console.log('in promise')
      let api = "http://127.0.0.1:8080";
      console.log('api', api)
      this.http
        .get(api, {headers: {'Content-Type': 'text/html', 'charset': 'utf-8' }})
        .toPromise()
        .then((data) => {
          console.log('data', data)
          res(data);
        })
        .catch((err) => {
          console.error('catch due to', err);
          rej(err);
        });
    });
    return promise;
  }

  public getNames(): Promise<string[][]> {
    return new Promise((res, rej) =>
      setTimeout(
        () =>
          res([
            ["COLLET", "ALAIN"],
            ["ZEMOUR", "ERIC"],
          ]),
        1000
      )
    );
  }
}
