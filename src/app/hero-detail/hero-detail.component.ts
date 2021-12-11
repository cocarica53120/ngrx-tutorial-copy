import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeroDetailService} from '../hero-detail.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  private title: string;
  private resultMonClick: string;

  @Input() name: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  names: string[][];

  constructor(private heroDetailService: HeroDetailService) {
    console.log('ctor HeroDetailComponent', this.heroDetailService.getName());
    this.resultMonClick = '';
  }

  async ngOnInit() {
    console.log('ngOnInit');
    this.title = 'toto';
    this.names = await this.heroDetailService.getNames();
    console.log('names', this.names);
  }

  onClick($event: MouseEvent) {
    console.log('onClick', $event);
    this.resultMonClick = this.resultMonClick === '' ? `J'ai clické sur mon bouton test` : '';
    this.myOutput.emit(this.heroDetailService.getName());
  }
}
