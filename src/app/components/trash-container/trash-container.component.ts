import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

interface noteObj {
  title:string,
  description:string,
  isTrash:boolean
}


@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss'],
  host:{
    class:"app-trash-cnt"
  }
})
export class TrashContainerComponent implements OnInit {

  trashNotesList:any[]=[]

  constructor( public noteService:NoteService) { }

  ngOnInit(): void {

    this.noteService.getAllNotes().subscribe(
      (res: any)=> {
        this.trashNotesList=res.data.filter(
        (item:noteObj) => item.isTrash===true)
        console.log(this.trashNotesList)
      })
    
  }
  trashNote($event:any)
  {
    this.trashNotesList=this.trashNotesList.filter((ele:{noteId:string})=>
    {
      return ele.noteId !== $event;
    })
  }

}
