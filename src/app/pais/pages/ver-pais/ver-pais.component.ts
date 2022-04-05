import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.paisService.buscaPaisAlpha( id ) ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );


    /*this.activedRoute.params
      .subscribe( ( { id } ) => {
        console.log( id );

        this.paisService.buscaPaisAlpha( id )
        .subscribe( pais => {
          console.log( pais );
        })

      })*/

  }

}
