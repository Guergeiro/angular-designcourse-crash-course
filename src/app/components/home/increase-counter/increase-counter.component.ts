import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-increase-counter",
  templateUrl: "./increase-counter.component.html",
  styleUrls: ["./increase-counter.component.css"],
})
export class IncreaseCounterComponent implements OnInit {
  @Output() click = new EventEmitter();
  private icon = faThumbsUp;
  private classes = "btn btn-success mx-2";

  constructor() {}

  ngOnInit(): void {}

  public onClickButton(event: MouseEvent) {
    this.click.emit(event);
  }

  public getIcon() {
    return this.icon;
  }
  public getClasses() {
    return this.classes;
  }
}
