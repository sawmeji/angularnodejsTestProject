import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private list:any[] = []

  save(data:any){
    this.list.push(data);
  }

  search(){
    return this.list;
  }
}
