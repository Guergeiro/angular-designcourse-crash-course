import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-decrease-counter",
  templateUrl: "./decrease-counter.component.html",
  styleUrls: ["./decrease-counter.component.css"],
})
export class DecreaseCounterComponent implements OnInit {
  @Output() click = new EventEmitter();
  private icon = faThumbsDown;
  private classes = "btn btn-danger mx-2";

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
