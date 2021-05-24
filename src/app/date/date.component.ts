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
    startdate: [''],
    enddate: ['']
  });

  d = new Date();

  month:any= this.d.getMonth();
  year:any = this.d.getFullYear();
  day = this.d.getDay();

  pm() {
    this.month = this.month - 1;
    if(this.month===0)
    {
      this.month=11;
      this.year=this.year-1;
    }
  }

  nm()
  {
    this.month=this.month+1;

    if(this.month===11)
    {
      this.month=0;
      this.year=this.year+1;
    }
  }



  week: any = [
    {
      day1: 'Monday', day2: 'Tuesday', day3: 'Wednesday', day4: 'Thursday', day5: 'Friday', day6: 'Saturday', day7: 'Sunday'
    }
  ]




  ngOnInit(): void {
  }

}
