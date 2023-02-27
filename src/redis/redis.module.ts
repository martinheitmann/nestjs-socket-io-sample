import { Module } from '@nestjs/common';
import { Redis } from 'ioredis';

export const RedisClient = 'REDIS_CLIENT';
export const RedisOptions = 'REDIS_OPTIONS';

@Module({
  providers: [
    {
      provide: RedisOptions,
      useValue: {
        url: 'redis://localhost:6379',
      },
    },
    {
      inject: [RedisOptions],
      provide: RedisClient,
      useFactory: async (options: { url: string }) => {
        const redis = new Redis(options.url);
        return redis;
      },
    },
  ],
  exports: [RedisClient],
})
export class RedisModule {}
