import {Injectable} from '@angular/core';

@Injectable()
export class HeroDetailService {

  constructor() {
    console.log('ctor HeroDetailService');
  }

  public getName(): string {
    return 'Name From HeroDetailService';
  }

  public getNames(): Promise<string[][]> {
    return new Promise((res, rej) => setTimeout(() => res([
      ['COLLET', 'ALAIN'],
      ['ZEMOUR', 'ERIC'],
    ]), 1000));
  }
}
