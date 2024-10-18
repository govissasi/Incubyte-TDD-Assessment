import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NoSpaceDirective} from "../directive/no-space.directive";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NoSpaceDirective, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputString!: string
  outputValue: number = 0;

  calculateString() {
    if(this.inputString) {
      const delimiter =new RegExp(`[\n,${this.inputString.startsWith("//") ? this.inputString?.split(/[\\n\n]/)?.at(0)?.slice(2) : ""}]`);
      const inputValueArray = this.inputString
        .replaceAll("\\n", "\n").replaceAll("//", "")
        .split(delimiter)
        .map(x => Number(x) || 0);
     const negativeValueArray =  inputValueArray.filter(x => x < 0);
     if(negativeValueArray.length) {
       throw new Error(`negative numbers not allowed ${negativeValueArray.join(",")}`)
     } else {
       this.outputValue = inputValueArray.reduce((sum: number, num: number) => sum+num, 0)
     }
    }
  }

}
