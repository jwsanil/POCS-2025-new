import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculat',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponentRest {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  errorMessage: string = '';


  constructor(private http: HttpClient) {}

  add() {
    this.http.get<number>(`http://localhost:8080/api/calculator/add?a=${this.num1}&b=${this.num2}`)
      .subscribe({
        next: (data) => this.result = data,
        error: (err) => this.errorMessage = `Error: ${err.message}`
      });
  }

  subtract() {
    this.http.get<number>(`http://localhost:8080/api/calculator/subtract?a=${this.num1}&b=${this.num2}`)
      .subscribe({
        next: (data) => this.result = data,
        error: (err) => this.errorMessage = `Error: ${err.message}`
      });
  }

  multiply() {
    this.http.get<number>(`http://localhost:8080/api/calculator/multiply?a=${this.num1}&b=${this.num2}`)
      .subscribe({
        next: (data) => this.result = data,
        error: (err) => this.errorMessage = `Error: ${err.message}`
      });
  }

  divide() {
    this.http.get<number>(`http://localhost:8080/api/calculator/divide?a=${this.num1}&b=${this.num2}`)
      .subscribe({
        next: (data) => this.result = data,
        error: (err) => this.errorMessage = `Error: ${err.message}`
      });
  }
}
