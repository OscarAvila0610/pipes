import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Juan', 'Pedro'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }
  
  cambiarNombre(){
    this.nombre = 'Alejandro';
    this.genero = 'masculino';
  }

  eliminarPersona(){
    this.clientes.splice(0,1);
    //this.clientes.pop(); esta la uso el inge
  }
  //Keyvalue Pipe
  persona = {
    nombre: 'Alejandro',
    edad: 31,
    direccion: 'San Jose Pinula, Guatemala'
  }

  //JSON pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable = interval(5000);//0,1,2,3,4,5,6,7

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  });
}
