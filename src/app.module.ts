import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SpeedModule } from './speed/speed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-pokemon'),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    PokemonModule,
    CommonModule,
    SpeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
