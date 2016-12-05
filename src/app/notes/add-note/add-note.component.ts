import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NoteService} from '../note.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-add-note',
  template:`
<form (ngSubmit) = "onNoteAdd(f)" #f ="ngForm">
  <div class="form-group" >
    <textarea class="form-control" id="noteInput" placeholder= "Enter your note" [(ngModel)]="notelist" name="noteInput"> </textarea>
  </div>
   <button type="submit" class="btn btn-default">Submit</button>
</form>
 `

})
export class AddNoteComponent implements OnInit {

  constructor(private noteService:NoteService ) { }

  ngOnInit() {
  }

  onNoteAdd(form:NgForm){
    //calling the injected service method
 
    this.noteService.addNotes(form.value.noteInput)
    .subscribe(
        data => console.log(data),
        error => console.log(error)
    );

    form.resetForm();

  }

}
