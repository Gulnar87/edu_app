import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      console.log(params, "params te")
    })


  }

}
