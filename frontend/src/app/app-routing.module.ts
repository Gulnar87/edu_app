import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorsComponent } from './instructors/instructors.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorsComponent },
  { path: 'instructor/:id', component: InstructorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
