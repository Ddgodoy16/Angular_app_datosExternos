import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { IDatos } from '../Interfaces/IDatos';
import { IDetalles } from '../Interfaces/Idetalles'; // Import both interfaces
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrardatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrardatos.component.html',
  styleUrls: ['./mostrardatos.component.css']
})
export class Mostrardatos implements OnInit {
  conteo: number = 0;
  pokemons: IDatos[] = [];
  detallesPokemon: IDetalles[] = [];
  limite: number = 10;

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemons(this.limite).subscribe(pokemons => {
      this.conteo = pokemons.count;
      this.pokemons = pokemons.results;

         this.pokemons.forEach(pokemon => {
        this.pokeapiService.getDetallesPokemon(pokemon.url).subscribe(detallePokemon => {
          this.detallesPokemon.push(detallePokemon);
        });
      });
    });
  }
}