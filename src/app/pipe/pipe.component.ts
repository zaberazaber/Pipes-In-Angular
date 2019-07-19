import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  public isCollapsedUpperCase = false;
  public isCollapsedLowerCase = false;
  public isCollapsedCurrency = false;
  public isCollapsedDate = false;
  public isCollapsedDecimal = false;
  public isCollapsedJson = false;
  public isCollapsedPercentage = false;
  public isCollapsedSlice = false;
  public isCollapsedCustom = false;

  upperCaseTitle = 'ACCENTURE';
  lowerCaseTitle = 'accenture'
  currencyValue = 2376.8645;
  dateValue = new Date();
  decimalValue = 242.3413201;
  jsonValue = {name:'Zubair', place:'Delhi', animal:'Panda', thing:'Bench'};
 percentageValue = 0.3412;
 sliceValue = ['1', '2', '3', '4', '5', '6'];
 customValue = 'we will we will rock you';

  constructor() { }

  ngOnInit() {
  }

}
