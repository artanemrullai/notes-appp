import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = new BehaviorSubject<Note[]>([]);
  constructor() { }

  createNote(note: Note) {
    // create
  }

  getNotes(): Observable<Note[]> {
    return this.notes;
  }

  deleteNote(noteId: number) {
    // delete note
  }
}
