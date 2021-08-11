import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  myGroup: FormGroup;
  setval = { Name: 'Jayaprakash Sakthivel', Age: 26 };
  ngOnInit() {
    this.myGroup = new FormGroup({
      Name: new FormControl('jp'),
      Age: new FormControl('26')
    });
    this.myGroup.setValue(this.setval);
    this.myGroup.patchValue(this.setval);
  }
  onSubmit() {
    console.log(this.myGroup.value);
  }
}
