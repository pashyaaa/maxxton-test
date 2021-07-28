import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  candidate_data = [{
    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "08/10/2016"
  },
  { "id": 12, "name": "John", "department": "HR", "joining_date": "18/01/2011" },
  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019" },
  { "id": 14, "name": "Vish", "department": "Development", "joining_date": "07/07/2017" },
  { "id": 15, "name": "Barry", "department": "Operations", "joining_date": "19/08/2014" },
  { "id": 16, "name": "Ady", "department": "Finance", "joining_date": "05/10/2014" },
  { "id": 17, "name": "Gare", "department": "Development", "joining_date": "06/04/2014" },
  { "id": 18, "name": "Hola", "department": "Development", "joining_date": "08/12/2010" },
  { "id": 19, "name": "Ola", "department": "HR", "joining_date": "07/05/2011" },
  { "id": 20, "name": "Kim", "department": "Finance", "joining_date": "20/10/2010" }]

  constructor() { }
}
