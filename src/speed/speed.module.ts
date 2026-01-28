import { Module } from '@nestjs/common';
import { SpeedService } from './speed.service';
import { SpeedController } from './speed.controller';

@Module({
  controllers: [SpeedController],
  providers: [SpeedService],
})
export class SpeedModule {}
