import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ConvertionHistory } from './convertion-history';

const GET_CONVERTE_VALUTE = gql`
query converteValuteQuery($inputCharCode:String!, $outputCharCode:String!, $inputData:Float!) {
  converteValute(inputCharCode:$inputCharCode, outputCharCode:$outputCharCode, inputData:$inputData)
}`;

const GET_AVG_COURSE = gql`
query avgCourseQuery($inputCharCode:String!, $outputCharCode:String!) {
  avgCourse(inputCharCode:$inputCharCode, outputCharCode:$outputCharCode) 
}`;

const GET_NUMBER_CONVERTION = gql`
query numberOfConvertionQuery($inputCharCode:String!, $outputCharCode:String!) {
  numberOfConvertion(inputCharCode:$inputCharCode, outputCharCode:$outputCharCode)
}`;

const GET_HISTORY_CONVERTION = gql`
query historyOfConvertionQuery($inputCharCode:String!, $outputCharCode:String!) {
  historyOfConvertion(inputCharCode: $inputCharCode, outputCharCode:$outputCharCode) {
    id
    haveValute
    wantValute
    haveValue
    wantValue
    course
    date
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class ConvertionHistoryServiceService {

  constructor(private apollo: Apollo) {
  }
   
  getConverteValute(inputCharCode:string, outputCharCode:string, inputData:number){
    return this.apollo
    .query<number>({query:GET_CONVERTE_VALUTE, variables:{inputCharCode, outputCharCode, inputData}});
  }

  getAvgCourse(inputCharCode:string, outputCharCode:string) {
    return this.apollo
    .query<number>({query:GET_AVG_COURSE, variables:{inputCharCode, outputCharCode}});
  }

  getNumberOfConvertion(inputCharCode:string, outputCharCode:string) {
    return this.apollo
    .query<number>({query:GET_NUMBER_CONVERTION, variables:{inputCharCode, outputCharCode}});
  }

  getHistoryOfConvertion(inputCharCode:string, outputCharCode:string){
    return this.apollo
    .query<ConvertionHistory[]>({query:GET_HISTORY_CONVERTION, variables:{inputCharCode, outputCharCode}});
  }
}
