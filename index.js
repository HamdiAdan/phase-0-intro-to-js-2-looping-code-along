// Code your solutions in this file//

function writeCards(names, eventName) {

    let thankYouMessages = [];
  
    
    for (let i = 0; i < names.length; i++) {
      
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  
      
      thankYouMessages.push(message);
    }
  
    
    return thankYouMessages;
  }
  
  
  const namesArray = ["Ada", "Brendan", "Ali"];
  const event = "Birthday";
  const messages = writeCards(namesArray, event);
  
  
  console.log(messages);
  


function countDown(startingNumber) {
    
    if (typeof startingNumber !== 'number' || startingNumber <= 0) {
      console.log("Please provide a positive integer as an input.");
      return;
    }
  
    
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  
  countDown(10)
  