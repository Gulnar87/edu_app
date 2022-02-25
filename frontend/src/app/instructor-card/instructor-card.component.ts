
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {
  @Input() instructor: any;

  constructor(private router: Router,) { }

  ngOnInit(): void {


  }

  navigateToDetails() {
    this.router.navigate(['/instructor', this.instructor.id]);
  }



}
