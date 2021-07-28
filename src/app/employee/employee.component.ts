import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  candidate_data = this.employeeService.candidate_data;
  searchText:string = "";

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  sort(type:string){
    if(type == 'name'){
      this.candidate_data.sort((a,b)=>a.name.localeCompare(b.name));
    }
    if(type == 'date'){
      this.candidate_data.sort((a,b)=> new Date(b.joining_date).getTime() - new Date(a.joining_date).getTime());
    }
  }

  search(event:any){
    console.log(event);
    //this.candidate_data = this.candidate_data.filter((element)=>element.name.indexOf(""));
  }

  filter(query:string){

  }

  statistics(){

  }


}
