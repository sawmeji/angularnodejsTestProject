import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'reactive-form';

  form:FormGroup
  list:any[] = []
  constructor(private builder:FormBuilder){
    this.form = builder.group({
      name: ['', Validators.required],
      print: [0, Validators.min(1)],
      description: [''],
      stock: [false]
    })
  }

  // constructor(){
  //   this.form = new FormGroup({
  //     name: new FormControl,
  //     price: new FormControl,
  //     description: new FormControl,
  //     stock: new FormControl

  //   })
    
  // }

  setValue(data:any){
    this.form.setValue(data)
  }
 
  onUpdate(){
    this.list.push(this.form.patchValue)
  }

  onSave(){
    this.list.push(this.form.value)
    this.form.reset()
  }
}
