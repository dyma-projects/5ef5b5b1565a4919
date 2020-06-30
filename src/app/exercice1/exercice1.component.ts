import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public person: string = 'Victor Hugo';

  public age: number = 30;

  public address: any = {
    street: 'Hollywood blvd 101',
    city: '92000 Los Angeles'
  };

  public colorText: string = 'green';
  public newPerson: string;
  changePerson(newPerson: string): void {
    this.person = newPerson;
  }

  ngOnInit(): void {
  }

}
