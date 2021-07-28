import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  candidate_data = this.employeeService.candidate_data;
  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>;
  statisticsString: string = "Not Calculated";

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.candidate_data.forEach((candidate) => {console.log(new Date(Number(candidate.joining_date.split('/')[2]), Number(candidate.joining_date.split('/')[1]), Number(candidate.joining_date.split('/')[0])).getTime())})
  }

  sort(type:string){
    if(type == 'name'){
      this.candidate_data.sort((a,b)=>a.name.localeCompare(b.name));
    }
    if(type == 'date'){
      this.candidate_data.sort((a,b)=> this.processDate(a.joining_date).getTime() - this.processDate(b.joining_date).getTime());
    }
  }

  processDate(date:string){
    return new Date(Number(date.split('/')[2]), Number(date.split('/')[1]), Number(date.split('/')[0]))
  }

  search(event:any){
    this.candidate_data = this.employeeService.candidate_data.filter((element)=>element.name.toLowerCase().indexOf(this.searchInput.nativeElement.value.toLowerCase())>-1);
  }

  filterByYears(){
    console.log((new Date().getTime() - this.processDate(this.candidate_data[0].joining_date).getTime()) / (1000 * 3600 * 24 * 365));
    this.candidate_data = this.employeeService.candidate_data.filter((element)=>(new Date().getTime() - this.processDate(element.joining_date).getTime()) / (1000 * 3600 * 24 * 365) < 2);
  }

  statistics(){
    let result:any = {};
    this.candidate_data.forEach((candidate => {
      if(result.hasOwnProperty(candidate.department)){
        result[`${candidate.department}`]++;
      }else{
        result[`${candidate.department}`] = 1;
      }
    }))
    this.statisticsString =  JSON.stringify(result);
  }

  remove(){
    this.candidate_data = this.employeeService.candidate_data.filter((element)=>element.department.indexOf("Development")==-1);
  }

  details(id:number){
    this.router.navigate([`/employee/${id}`])
  }


}
