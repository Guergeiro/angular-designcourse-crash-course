import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-two-way",
  templateUrl: "./form-two-way.component.html",
  styleUrls: ["./form-two-way.component.css"],
})
export class FormTwoWayComponent implements OnInit {
  public textInput = "";

  constructor() {}

  ngOnInit(): void {}

  public getTextInput() {
    return this.textInput;
  }
  public setTextInput(textInput: string) {
      this.textInput = textInput;
  }
}
