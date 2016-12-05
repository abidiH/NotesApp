import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NoteService {
  notesList = []
  constructor(private http:Http) { }
 
  getNotes(){
   console.log("inside getNotes");
   return this.http.get('http://localhost:3000/note')
    .map((response:Response) =>{
      const notes = response.json().obj;
      console.log("inside note service", notes);
      var self = this;
      notes.forEach(n =>{
        var content = n.content;
        var noteObj = {
        noteText: content, postedBy:'humaira'
         };
         self.notesList.push(noteObj)

      });

      console.log("inside note service", this.notesList);
      return this.notesList
      
    });
    

  }

  addNotes(value){
       
    var obj = {"content": value};
    const body = JSON.stringify(obj);
    console.log("inside addNotes body => ", body);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/note', body, {headers:headers})
    .map((response:Response) =>{
      var output = response.json().obj;
      console.log("after  post ", output);
      this.notesList.push({noteText:output.content, postedBy:"user"});
      return this.notesList;
              
      });
  } 
}

