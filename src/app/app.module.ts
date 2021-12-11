import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/tutorial.reducer";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroDetailService } from "./hero-detail.service";

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducer,
    }),
  ],
  providers: [HeroDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
