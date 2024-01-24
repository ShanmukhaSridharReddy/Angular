import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
interface noteObj {
  title:string,
  description:string,
  IsArchive:boolean
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    
  private baseUrl ="https://localhost:44320/api/"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('token') ||''
  })
  getNoteQueryParams: any;
  
  constructor(private http: HttpClient) { }

  async loginSignupCall(endpoint: string, data: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    try {
      const res = await this.http.post(this.baseUrl + endpoint, data).toPromise()
      console.log(res);
      
      return res
    } catch (error) {
      return error
    }

  }

  
  async signup(userData: any): Promise<any> {
    try {
      const res = await this.http.post(this.baseUrl + 'Register', userData).toPromise();
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
  fetchNotes(endpoint:string):Observable<any>{
    
    const res= this.http.get(this.baseUrl+endpoint,{
      headers:this.authHeader
    }
      )
      return res
  }
 
  addNotes(endpoint:string, noteObj:object):Observable<any>{
       console.log(this.authHeader);
    return this.http.post(this.baseUrl+endpoint,noteObj,{headers:this.authHeader})
  }
  updateNotes(endpoint:string,noteObj:object,noteId:string):Observable<any>{
   // const queryParams = new HttpParams().set("noteId",noteId)
// console.log(queryParams)
    return this.http.put(this.baseUrl+endpoint+'/'+noteId,noteObj,{headers:this.authHeader})
  }
  archiveNotes(endpoint:string,noteId:string):Observable<any>{
    const queryParams = new HttpParams().set("noteId",noteId)
 // console.log(queryParams)
     return this.http.put(this.baseUrl+endpoint+'?'+queryParams.toString(),{},{headers:this.authHeader})
   }

  trashNotes(endpoint:string,noteId:string):Observable<any>{
     const queryParams = new HttpParams().set("noteId",noteId)
 // console.log(queryParams)
     return this.http.put(this.baseUrl+endpoint+'?'+queryParams.toString(),{},{headers:this.authHeader})
   }

   addColor(endpoint:string,noteId:string,color:string):Observable<any>{
    const colorParam = new HttpParams().set("color",color)
    const noteParam = new HttpParams().set("noteId",noteId)

    return this.http.put(`${this.baseUrl}${endpoint}?${noteParam.toString()}&${colorParam}`,{},{headers:this.authHeader})
   }
}//https://localhost:44320/api/Notes/IsTrash?noteId=29



