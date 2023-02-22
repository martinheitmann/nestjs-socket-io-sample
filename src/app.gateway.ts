import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  findAll(@MessageBody() data: string): Observable<WsResponse<string>> {
    // Return an observable that modifies the received value.
    return new Observable((subscribe) => {
      subscribe.next({ event: 'response', data: `${data} from NestJS!` });
    });
  }
}
