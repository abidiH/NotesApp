import { Component, OnInit } from '@angular/core';
import {NoteService} from '../note.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
  
})
export class NoteItemComponent implements OnInit {
  notes;
  constructor(private noteService :NoteService) { }

  ngOnInit() {
    //this.notes = this.noteService.getNotes();
  this.noteService.getNotes().subscribe(data =>{
    this.notes = data;
    console.log("inside class  NoteItemComponent", data);
    
  });    
   
  }
  

}
