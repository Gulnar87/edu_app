import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorsResourceService {

  protected basePath = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly http: HttpClient) { }


  getAllInstructors(): Observable<Array<any>> {
    return this.http.get<Array<any>>(
      `${this.basePath}/users`
    );
  }

  getAllInstructorById(id: number): Observable<any> {
    return this.http.get<Array<any>>(
      `${this.basePath}/users/${id}`
    );
  }



}
