import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
 

  tokenLocal:string ='';

  constructor( public httpService:HttpService, private http: HttpClient) { 
  }

  getAllNotes(){
    this.tokenLocal = localStorage.getItem('token') || '';
    ///console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get('https://localhost:44320/api/Notes/GetAllNotes',header);
  }

  getTrashNotes(){
    return this.httpService.fetchNotes("Notes/IsTrash")
  }
  
  getArchiveNotes(){
    return this.httpService.fetchNotes("Notes/IsArchive")
  }
  createNotes(noteObj:INotes){
    return this.httpService.addNotes('Notes/AddNote',noteObj);
   
  }
  updateNote(noteObj:Object,noteId:string){
    return this.httpService.updateNotes('Notes/UpdateNote',noteObj,noteId);
  }
  trashNotes(noteId:string){
    return this.httpService.trashNotes('Notes/IsTrash',noteId);
  }
  archiveNote(noteId:string){
    return this.httpService.archiveNotes('Notes/IsArchive',noteId);
  }
  addColor(noteId:string,color:string){
    return this.httpService.addColor('Notes/Color',noteId,color);
  }
  

}
