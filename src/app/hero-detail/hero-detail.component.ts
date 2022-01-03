import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { HeroDetailService } from "../hero-detail.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  private title: string;
  public  resultMonClick: string;
  private subscription: Subscription;

  @Input() name: string;
  @Output() myOutput: EventEmitter<any> = new EventEmitter();
  names: string[][];

  constructor(private heroDetailService: HeroDetailService) {
    console.log(
      "ctor HeroDetailComponent",
      this.heroDetailService.getNamePromise()
    );
    this.resultMonClick = "";
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy => unsubscribe')
    this.subscription.unsubscribe();
  }

  async ngOnInit() {
    console.log("ngOnInit");
    this.title = "toto";
    this.names = await this.heroDetailService.getNamesPromise();
    console.log("names", this.names);
    this.myOutput.emit(await this.heroDetailService.getNamePromise());
    this.subscription = this.heroDetailService.getNameObs().subscribe((data) => {
      console.log("data from obs", data);
    });


  }

  async onClick($event: MouseEvent) {
    console.log("onClick", $event);
    this.resultMonClick =
      this.resultMonClick === "" ? `J'ai clické sur mon bouton test` : "";
    this.myOutput.emit(await this.heroDetailService.getNamePromise());
    this.heroDetailService.getNameObs()
    .subscribe(data => {
      console.log('data received in onClick', data)
      this.myOutput.emit(data)
    })

    this.heroDetailService.getIntervalValues$()
    .subscribe(data => {
      console.log(new Date(), 'data from interval', data);
      this.myOutput.emit(data)
    })
  }
}
