import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  id!: number;
  employee: any;
  routeSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    public employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(
      (params) => {
        this.id = Number(params.get('id'));
        this.employee = JSON.stringify(this.employeeService.get(this.id));
      }
    )
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

}
