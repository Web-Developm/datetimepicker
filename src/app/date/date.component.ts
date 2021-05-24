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

  startAt=new Date(2021,0,1,10,30,30);
  endAt=new Date(2021,3,21,10,30,30);


  data = this.fb.group({
    startdate: ['']
  });

  ngOnInit(): void {
  }

}
