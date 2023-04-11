import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway({ cors: "*:*" })
export class ChatGateway {

  @WebSocketServer()
  server;

  @SubscribeMessage('newLogin')
  handleNewLogin(@MessageBody() data: string): void {
    console.log(data)
    this.server.emit('newLogin', data)
  }

}
