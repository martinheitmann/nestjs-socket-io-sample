import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
