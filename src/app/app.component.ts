import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInputComponent } from "./user-input/user-input.component";
import { OddLengthWordsComponent } from "./odd-length-words/odd-length-words.component";
import { EvenLengthWordsComponent } from "./even-length-words/even-length-words.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, UserInputComponent, OddLengthWordsComponent, EvenLengthWordsComponent]
})
export class AppComponent {
  title = 'angular-exercise-0';
  author = 'Dimitris Asimakopoulos';

  oddwords: string[] = [];
  evenwords: string[] = [];

  onReceiveWord(inputword: any) {
    if(inputword.userword.length % 2 == 0) {
      this.evenwords.push(inputword.userword);
    } else {
      this.oddwords.push(inputword.userword);
    }
  }

}
