import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SpeedService {

  //dependencia de mi servicio
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    // Ejemplo de una petición HTTP usando fetch
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    // const data = await response.json();
    // console.log(data);

    // Ejemplo de una petición HTTP usando axios
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    console.log(data);

    return data.results;
  }


}
