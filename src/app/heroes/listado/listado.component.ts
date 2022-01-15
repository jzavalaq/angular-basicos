import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent //implements OnInit 
{
  // constructor() {
  //   console.log('constructor');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string='';

  borrarHeroe (): void {
    // this.heroes.splice(this.heroes.length-1,1);
    this.heroeBorrado = this.heroes.shift()||'';
    // console.log(this.heroeBorrado);
  }
}
