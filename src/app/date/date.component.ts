import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [],
})


export class DateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  data = this.fb.group({
    startdate: ['']
  });

  ngOnInit(): void {
  }

}
