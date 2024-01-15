import { AppService } from './app.service';
export declare class AppController {
    private chatService;
    constructor(chatService: AppService);
    sendMessage(message: {
        text: string;
    }): string;
}
