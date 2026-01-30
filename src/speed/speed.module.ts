import { Module } from '@nestjs/common';
import { SpeedService } from './speed.service';
import { SpeedController } from './speed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SpeedController],
  providers: [SpeedService],
  imports: [PokemonModule]
})
export class SpeedModule {}
