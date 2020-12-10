import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input() type = "button";
  @Input() classes = "btn btn-primary";
  @Output() click = new EventEmitter<MouseEvent>();
  public constructor() {}

  ngOnInit(): void {}

  public onClickButton(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit(event);
  }
}
