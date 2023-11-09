const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (text) => {
  console.log(text);
  console.log(text);
}

function logHobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

logHobby();
