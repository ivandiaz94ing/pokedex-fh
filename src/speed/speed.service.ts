import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import e from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SpeedService {

  constructor(
      @InjectModel(Pokemon.name)
      private readonly pokemonModel: Model<Pokemon>
    ){}
  

  //dependencia de mi servicio
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    // Ejemplo de una petición HTTP usando fetch
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    // const data = await response.json();
    // console.log(data);

    await this.pokemonModel.deleteMany({});
    // Ejemplo de una petición HTTP usando axios
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=3');
    console.log(data);

    data.results.forEach(({url, name}) => {
      
      const segments = url.split('/');
      const no:number = +segments[segments.length - 2];
      console.log({name, no});

      this.pokemonModel.create({name, no});
    });


    return data.results;
  }


}
