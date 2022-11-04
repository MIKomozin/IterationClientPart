import { Component, OnInit } from '@angular/core';
import { ConvertionHistory } from '../convertion-history';
import { ConvertionHistoryServiceService } from '../convertion-history-service.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  convertValue: number | undefined;
  avg: number | undefined;
  numberConvertion: number | undefined;
  historyConvertions: ConvertionHistory[] = [];
  selectedHave: string = "";
  selectedWant: string = "";
  enterNumberValute: number = 0;

  constructor(private convertion: ConvertionHistoryServiceService) { }

  ngOnInit(): void {
  }

  //переназначаем значение перменных
  showResult() {
    this.getConvertion(this.selectedHave, this.selectedWant, this.enterNumberValute);//convertValue
  }

  showHistory() {
    this.getHistory(this.selectedHave, this.selectedWant);//ConvertionHistory[]
  }

  showStat() {
    this.getAvg(this.selectedHave, this.selectedWant);//avg
    this.getNumberConvertion(this.selectedHave, this.selectedWant);//numberConvertion
  }

  getConvertion(inputCharCode:string, outputCharCode:string, inputData:number) {
    this.convertion.getConverteValute(inputCharCode, outputCharCode, inputData)
    .subscribe(({data}: any) => {
      this.convertValue = data.converteValute;
    });
  }

  getAvg(inputCharCode:string, outputCharCode:string) {
    this.convertion.getAvgCourse(inputCharCode, outputCharCode)
    .subscribe(({data}: any) => {
      this.avg = data.avgCourse;
    });
  }

  getNumberConvertion(inputCharCode:string, outputCharCode:string) {
    this.convertion.getNumberOfConvertion(inputCharCode, outputCharCode)
    .subscribe(({data}: any) => {
      this.numberConvertion = data.numberOfConvertion;
    });
  }

  getHistory(inputCharCode:string, outputCharCode:string) {
    this.convertion.getHistoryOfConvertion(inputCharCode, outputCharCode)
    .subscribe(({data}: any) => {
      this.historyConvertions = data.historyOfConvertion;
    });
  }
}
