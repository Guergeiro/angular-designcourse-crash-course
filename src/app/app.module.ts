import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DecreaseCounterComponent } from "./components/home/decrease-counter/decrease-counter.component";
import { FormTwoWayComponent } from "./components/home/form-two-way/form-two-way.component";
import { HomeComponent } from "./components/home/home.component";
import { IncreaseCounterComponent } from "./components/home/increase-counter/increase-counter.component";
import { ListComponent } from "./components/list/list.component";
import { ButtonComponent } from "./shared/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ButtonComponent,
    IncreaseCounterComponent,
    DecreaseCounterComponent,
    FormTwoWayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
