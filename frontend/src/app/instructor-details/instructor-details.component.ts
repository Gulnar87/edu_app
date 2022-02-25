import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorsResourceService } from '../services/instructors-resource.service';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
  instructor: any;

  constructor(private route: ActivatedRoute, private readonly instructorsResourceService: InstructorsResourceService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      if (params['id']) {
        const instructorId = params['id'];
        this.instructorsResourceService.getAllInstructorById(instructorId).subscribe(data => {
          console.log(data)
          this.instructor = data;
        })
      }


    })


  }

}
