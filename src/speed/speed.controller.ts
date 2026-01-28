import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeedService } from './speed.service';

@Controller('speed')
export class SpeedController {
  constructor(private readonly speedService: SpeedService) {}

  
  @Get()
  executeSeed() {
    


    return this.speedService.executeSeed();
  }

  
}
