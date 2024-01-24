import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

interface noteObj {
  title:string,
  description:string,
  isArchive:boolean
}

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss'],
  host:{
    class:'app-archive-cnt'
  }
})


export class ArchiveContainerComponent implements OnInit {
archiveNotesList:any[]=[]

  constructor( public noteService:NoteService) { }

  ngOnInit(): void {

    this.noteService.getAllNotes().subscribe(
      (res: any)=> {
        this.archiveNotesList=res.data.filter(
        (item:noteObj) => item.isArchive === true)
        console.log(this.archiveNotesList)
      }
    )
    
  }
  handleArchive($event:any)
  {
    this.archiveNotesList = this.archiveNotesList.filter((ele:{noteId:string}) =>
      {
        return ele.noteId !== $event;
      }
    )
  }


}
