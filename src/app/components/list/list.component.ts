import { Component, OnInit } from "@angular/core";
import { HttpBreweriesService } from "src/app/services/http-breweries.service";
import { Brewery } from "src/app/types/Brewery";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  private http: HttpBreweriesService;
  private breweries: Brewery[] = [];

  public constructor(http: HttpBreweriesService) {
    this.http = http;
  }

  public ngOnInit(): void {
    this.http.getAll().then((values) => {
      this.breweries.push(...values);
    });
  }

  public getBreweries() {
      return this.breweries;
  }
}
