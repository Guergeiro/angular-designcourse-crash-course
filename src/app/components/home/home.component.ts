import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private clickCounter = 0;

  public ngOnInit(): void {}

  public increaseClickCounter() {
    this.clickCounter++;
  }

  public decreaseClickCounter() {
    if (this.clickCounter > 0) {
      this.clickCounter--;
    }
  }

  public getClickCounter() {
    return this.clickCounter;
  }

  public setTemplateClasses() {
    const condition = this.clickCounter > 4;
    return {
      "bg-success": condition,
      "bg-danger": !condition,
      "text-light": true,
    };
  }
}
