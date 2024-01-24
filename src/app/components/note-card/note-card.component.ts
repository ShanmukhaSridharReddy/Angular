import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { resourceLimits } from 'worker_threads';
 
interface INotes{
  title: string,
  description: string,
  remainder: string,
  colors: string,
  image: string,
  isArchive: false,
  isPin: false,
  isTrash: false
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit 
{
  @Input() note:{
    title:string,
    description:string,
    noteId:string,
    colors:string
  
  }={title:"", description:"",noteId:"",colors:'#ffffff'}
  @Input() container:string="";
  
  @Output() updateNoteList = new EventEmitter<any>();
  

  
  constructor( public noteService:  NoteService,public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  
  handleNotesOperation(action:string){
    //'https://localhost:44320/api/Notes/UpdateNote/8'
    action=='trash'?
    
    this.noteService.trashNotes(this.note.noteId).subscribe(res=> this.updateNoteList.emit(this.note.noteId)):

    this.noteService.archiveNote(this.note.noteId).subscribe(
      res=> this.updateNoteList.emit(this.note.noteId))
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(EditNoteComponent, {data: this.note});
console.log(dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result.title}`);
      this.noteService.updateNote(result,result.noteId).subscribe(
        res => this.updateNoteList.emit({
          action : 'edit',noteObj:res.data
        })
      )
    });
  }
  handleColorOperation(action:string)
  {
    this.noteService.addColor(this.note.noteId,action).subscribe(
      res => this.updateNoteList.emit({
        action : 'color',noteObj:res.data

      })
    )
  }

}
