import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListado } from './Interfaces/IListado';
import { IDetalles} from './Interfaces/Idetalles';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private apiUrlBase = "https://pokeapi.co/api/v2"

  

  constructor(private cliente: HttpClient) { }

  getPokemons(limit: number): Observable<IListado>{
    const resultado = this.cliente.get<IListado>(`${this.apiUrlBase}/pokemon/?limit=${limit}`)
    return resultado;
  }

  getDetallesPokemon(url: string): Observable<IDetalles>{
    return this.cliente.get<IDetalles>(url)
  }

}