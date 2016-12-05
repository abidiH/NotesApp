import { Component, OnInit } from '@angular/core';
import {NoteService} from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers:[NoteService]
  
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
