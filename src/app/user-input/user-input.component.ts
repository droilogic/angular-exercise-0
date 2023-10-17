import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() userword = new EventEmitter<string>();

  onSubmit(formData: any) {
    console.log(formData.value as string);
    this.userword.emit(formData.value);
    formData.reset();
  }
}
