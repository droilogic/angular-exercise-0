import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-even-length-words',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent {
  @Input() evenwords: string[] | undefined;
}
