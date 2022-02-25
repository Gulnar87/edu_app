import { Component, OnInit } from '@angular/core';
import { InstructorsResourceService } from '../services/instructors-resource.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  instructors: any[] = [];

  constructor(private readonly instructorsResourceService: InstructorsResourceService) { }

  ngOnInit(): void {
    this.getInstructors()
  }


  getInstructors() {
    this.instructorsResourceService.getAllInstructors().subscribe(data => {
      console.log(data, "data")
      this.instructors = data;
    })

  }
}
