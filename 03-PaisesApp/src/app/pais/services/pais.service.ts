import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiurl:string = 'https://restcountries.eu/rest/v2'
  
  constructor(private http: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    const url =`${this.apiurl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url =`${this.apiurl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisInfoCode(id:string): Observable<Country>{
    const url =`${this.apiurl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisesRegion(region:string): Observable<Country[]>{

    const params = new HttpParams().set('fields','name;capital;alpha2Code;flag;population')

    const url =`${this.apiurl}/region/${region}`;
    return this.http.get<Country[]>(url, {params})
    .pipe( tap(console.log));
  }

}
