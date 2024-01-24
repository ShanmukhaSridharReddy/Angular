import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import{ LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NoteComponent } from './components/note/note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"note",component:NoteComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path: "notes", component: NotesContainerComponent},
    {path: "archive", component: ArchiveContainerComponent },
    {path: "trash", component: TrashContainerComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
