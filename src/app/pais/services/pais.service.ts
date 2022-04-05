import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private params = new HttpParams()
            .set('fields','name,capital,alpha2Code,flag,population');

  constructor( private http: HttpClient ) { }

  buscaPais( termino: string ): Observable<Country[]> {

    const url: string =`${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.params } );

  }

  buscaCapital( termino: string ): Observable<Country[]> {

    const url: string = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.params } );

  }

  buscaRegion( termino: string ): Observable<Country[]> {

    const url: string = `${ this.apiUrl }/regionalbloc/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.params } );

  }

  buscaPaisAlpha( id: string ): Observable<Country> {

    const url: string = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );

  }

}
