import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() control?: FormControl;

  constructor() {}

}
