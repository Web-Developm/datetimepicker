import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';

import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const My_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateAllyLabel: 'LL',
    monthYearAllyLabel: 'YYYY',
  },
};


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {
      provide: MAT_DATE_FORMATS, useValue: My_FORMATS
    }
  ],
})


export class DateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  data = this.fb.group({
    startdate: [''],
    enddate: ['']
  });

  ngOnInit(): void {
  }

}
