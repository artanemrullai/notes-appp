import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.scss'
})

export class NewNoteComponent {
  fb = inject(FormBuilder);
  newNoteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  })

  submitForm() {
  }
}
