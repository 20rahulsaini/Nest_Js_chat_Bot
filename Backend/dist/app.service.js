"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    generateResponse(userInput) {
        const lowercasedInput = userInput;
        if (/(hello|hi|hey|Hello)/.test(lowercasedInput)) {
            return 'Hi there! How can I help you today?';
        }
        if (/(how are you|how's it going)/.test(lowercasedInput)) {
            return "I'm just a computer program, but thanks for asking!";
        }
        if (/(bye|by)/.test(lowercasedInput)) {
            return 'Goodbye! Have a great day!';
        }
        const mathRegex = /(\d+)\s*([+\-*\/])\s*(\d+)/;
        const mathMatch = lowercasedInput.match(mathRegex);
        if (mathMatch) {
            const num1 = parseInt(mathMatch[0]);
            const operator = mathMatch[2];
            const num2 = parseInt(mathMatch[3]);
            switch (operator) {
                case '+':
                    return `The result is: ${num1 + num2}`;
                case '-':
                    return `The result is: ${num1 - num2}`;
                case '*':
                    return `The result is: ${num1 * num2}`;
                case '/':
                    return num2 !== 0 ? `The result is: ${num1 / num2}` : 'Cannot divide by zero';
            }
        }
        return "I didn't understand that. Please ask a general question or try a basic math calculation.";
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map