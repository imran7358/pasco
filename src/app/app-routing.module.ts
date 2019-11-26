import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnswerdetailsComponent } from './answerdetails/answerdetails.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "newquestion", component:NewquestionComponent },
  {path:"aswerdetails", component:AnswerdetailsComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
