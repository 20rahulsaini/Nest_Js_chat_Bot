import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  generateResponse(userInput: string): string {
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
  
      // Basic Math Calculations
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
}
