import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('chat')
export class AppController {
  constructor(private chatService: AppService) {}

  @Post('sendMessage')
  sendMessage(@Body() message: { text: string }): string {
    try {
      const response = this.chatService.generateResponse(message.text);
      return response;
    } catch (error) {
      console.error('Error in sendMessage:', error);
      throw error; 
    }
  }
}
