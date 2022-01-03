import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { map } from "rxjs/operators/map";
import { take } from "rxjs/operators/take";
import { catchError } from "rxjs/operators";

@Injectable()
export class HeroDetailService {
  constructor(private http: HttpClient) {
    console.log("ctor HeroDetailService");
  }

  public getNamePromise(): Promise<Object> {
    // return 'Name From HeroDetailService';
    const promise = new Promise((res, rej) => {
      let api = "http://127.0.0.1:8080/name";
      console.log("api Promise", api);
      this.http
        .get(api, {
          headers: { "Content-Type": "text/html", charset: "utf-8" },
        })
        .toPromise()
        .then((data) => {
          res(data);
        })
        .catch((err) => {
          console.error("catch due to", err);
          rej(err);
        });
    });
    return promise;
  }

  public getNamesPromise(): Promise<string[][]> {
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

  public getNameObs(par?: string): Observable<Object> {
    par = par === undefined ? "name" : par
    // return 'Name From HeroDetailService';
    let api = `http://127.0.0.1:8080/${par}`;
    console.log("Api Obs", api);
    const obs: Observable<Object> = this.http
      .get(api, { responseType: "json" });
    console.log('obs', obs);
    return obs.pipe(map(o => { return [
      {name: o, count: 0},
      {name: o, count: 1},
      {name: o, count: 2},
      {name: o, count: 3},
    ]}));
  }

  public getIntervalValues$(): Observable<string> {
    const obs: Observable<string> = new Observable(subscriber => {
      setTimeout(() => subscriber.next('toto'), 3000);
      setTimeout(() => subscriber.next('titi'), 2000);
      setTimeout(() => subscriber.next('tata'), 1000);
    });
    return obs;
  }
}

