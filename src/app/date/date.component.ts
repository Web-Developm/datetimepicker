import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { CalendarMonthViewBeforeRenderEvent, CalendarMonthViewDay, CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [],
})


export class DateComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsopen: boolean = true;

  events: CalendarEvent[] = [];


  constructor(private fb: FormBuilder) { }

  data = this.fb.group({
    startdate: [''],
    enddate: ['']
  });

  d = new Date();

  month: any = this.d.getMonth();
  year: any = this.d.getFullYear();
  day = this.d.getDay();




  pm() {
    this.month = this.month - 1;
    if (this.month === 0) {
      this.month = 11;
      this.year = this.year - 1;
    }
  }

  nm() {
    this.month = this.month + 1;

    if (this.month === 11) {
      this.month = 0;
      this.year = this.year + 1;
    }
  }



  week: any = [
    {
      day1: 'Monday', day2: 'Tuesday', day3: 'Wednesday', day4: 'Thursday', day5: 'Friday', day6: 'Saturday', day7: 'Sunday'
    }
  ];


  closeOpenMonthViewDay() {
    this.activeDayIsopen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      const dayofMonth = day.date.getDate();
      if (dayofMonth > 5 && dayofMonth < 10 && day.inMonth) {
        day.cssClass = 'bg-pink';
      }
    })
  }




  ngOnInit(): void {
  }

}
