// Code your solutions in this file

function writeCards(names, eventName) {
  const message = [];
  for (let i = 0; i < names.length; i += 1) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
return message;
}

function countDown(n) {
  for (let count = n; count >= 0; count -=1) {
    console.log(count);
  }
}

