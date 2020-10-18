import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  //value: string Se define que tipo de Valor va a leer
  //...args: unknown[] es para pasar parametros
  transform(value: string): string {
    //Se Debe Retornar algo si no viene ningun valor.
    //String ''
    //number null
    //Array []
    //Objeto {}
    if(!value) return '';
    return value.toUpperCase();
  }

} 
