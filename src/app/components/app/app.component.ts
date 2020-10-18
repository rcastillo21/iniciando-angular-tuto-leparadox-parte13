import { Component, OnInit } from '@angular/core';
import { UppercasePipe } from '../../pipes/uppercase.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UppercasePipe]
})
export class AppComponent implements OnInit{
  title = 'parte13';

  constructor(
    private _upper: UppercasePipe
  ){}

  lista = [
    {id: 1, nombre: 'Pacific Rim', precio: 6.80},
    {id: 2, nombre: 'Black Panther', precio: 5.95},
    {id: 3, nombre: 'El Corredor del Laberinto', precio: 4.10},
    {id: 4, nombre: 'Ready Player One', precio: 8.70},
    {id: 5, nombre: 'Vengadores, Infinity War', precio: 7.44}
  ];

  ngOnInit(){
    alert(this._upper.transform(this.lista[0].nombre));
  }
}
