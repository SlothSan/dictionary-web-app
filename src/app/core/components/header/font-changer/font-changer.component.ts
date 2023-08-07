import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {FontOptionsModel} from "../../../models/font-options-model";

@Component({
  selector: 'dictionary-font-changer',
  templateUrl: './font-changer.component.html',
  styleUrls: ['./font-changer.component.scss']
})
export class FontChangerComponent {
  fontOptionsForm: FormGroup;
  fontOptions: FontOptionsModel[];

  constructor(private _fb: FormBuilder) {
    this.fontOptionsForm = this.createForm();
    this.fontOptions = [
      {name: 'Sans Serif'},
      {name: 'Serif'},
      {name: 'Mono'}
    ]
  }
  createForm(): FormGroup {
    return this._fb.group({
      font: ['Sans Serif']
    })
  }

  get fontFormControl(): FormControl {
    return this.fontOptionsForm.get('font') as FormControl;
  }
}
