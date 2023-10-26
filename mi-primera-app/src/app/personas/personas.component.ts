import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  template: '<div style="text-align: center;"> < hr ><h1>Listado de personas</ h1 ><app-persona > </app-persona></div>'
})
export class PersonasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
