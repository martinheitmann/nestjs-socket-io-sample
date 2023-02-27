import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor: ReturnType<typeof createAdapter>;

  async connectToRedis(): Promise<void> {
    console.log('RedisIoAdapter::connectToRedis invoked');
    const pubClient = createClient({ url: `redis://localhost:6379` });
    const subClient = pubClient.duplicate();
    await Promise.all([pubClient.connect(), subClient.connect()]);
    this.adapterConstructor = createAdapter(pubClient, subClient);
    console.log('RedisIoAdapter::connectToRedis connected to redis!');
  }

  createIOServer(port: number, options?: ServerOptions): any {
    console.log('RedisIoAdapter::createIOServer invoked');
    const server = super.createIOServer(port, options);
    server.adapter(this.adapterConstructor);
    return server;
  }
}
