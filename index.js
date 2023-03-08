// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = 'surprise';
const message = [];

function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i += 1) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
return(message);
}

function countDown(n) {
  for (let count = n; count >= 0; count -=1) {
    console.log(count);
  }
}

