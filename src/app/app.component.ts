import { Component } from "@angular/core";
import { zinggrid } from "zinggrid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  datastore = [
    { breed: "Chow Chow", name: "Butter" },
    { breed: "Dachshund", name: "Sousage" },
    { breed: "Pug", name: "Potat" },
    { breed: "Corgi", name: "Plop" },
    { breed: "Pomeranian", name: "Floof" }
  ];
}
