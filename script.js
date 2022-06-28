const fullName = "Chris Calleja";
const age = 35;
const birthday = "May 14";
let pineapplePizza = true;
let lifeEvents = [
  "I grew up in Plymouth",
  "I am married to Emily",
  "I like to fish",
  "I went to Michigan State",
];

if (true) {
  console.log(
    `My name is ${fullName} and I like pineapples on pizza.  I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapples on pizza.  I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(counter);
    console.log(`${randomNumber} !== 5!`);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
