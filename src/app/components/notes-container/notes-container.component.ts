import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { NoteService } from 'src/app/services/note.service';

interface INotes{
  title: string,
  description: string,
  remainder: string,
  colors: string,
  image: string,
  isArchive: false,
  isPin: false,
  isTrash: false,
  noteId:string
}
interface NoteObj{
  title: string,
  description: string,
  noteId :string
}
@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
  host:{
    class:"app-note-cnt"
  }
})
export class NotesContainerComponent implements OnInit {
  notesList:INotes[]=[]
  toggleState:boolean=true;
  title:string ='';
  desc:string='';
  token:any;
  
  constructor(public noteService:NoteService ) { 
   // this.token= localStorage.getItem('token'); 
   }

  ngOnInit(): void {
   this.noteService.getAllNotes().subscribe((notes: any) =>{
    console.log(notes);
    this.notesList = notes.data.filter( (item: {isArchive:boolean,isTrash:boolean}) => !item.isArchive  && !item.isTrash )
    console.log(this.notesList);
   })
    
  }
  toggleCreateNote(){
    this.toggleState=!this.toggleState;

  }
  handleSaveNote(){
    this.toggleState=!this.toggleState;
    console.log(this.title);
    let noteObj:INotes={
      "title": this.title,
      "description": this.desc,
      "remainder": "2024-01-17T07:20:11.565Z",
      "colors": "",
      "image": "",
      "isArchive": false,
      "isPin": false,
      "isTrash": false,
      "noteId":""
    }
    this.noteService.createNotes(noteObj).subscribe((res:any) =>{
      const newNote:INotes=res.data;
      this.notesList= [newNote, ...this.notesList]
    })
  }

  updateNoteList($event:any){
    debugger
    if($event.action === "edit" || $event.action === "color" ){
      this.notesList = this.notesList.map(note => {
        if(note.noteId === $event.noteObj.noteId){
          return $event.noteObj
        }
        else{
          return note
        }
      })
    }
    else{
    console.log($event)
    // const id = $event.noteId ? $event.noteId : $event
    const filterNotes= this.notesList.filter((ele) => ele.noteId !== $event )
    this.notesList=filterNotes
    }
    
  }

}
