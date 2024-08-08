let counter = 0;
let pelletCounter = 1000;
let crowdCalls = [
    "Hey, you!", 
    "Hey, kid!", 
    "Meat Boy, What's for sale?", 
    "Hey, I'm talking to you!", 
    "Could I get a free one, please?", 
    "Give me a free one, I dare you.",
    "Come on...",
    "Why not?"
];

document.getElementById('grammys-feet').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('crowd-calls').addEventListener('click', function() {
    let randomPhrase = crowdCalls[Math.floor(Math.random() * crowdCalls.length)];
    document.getElementById('voice-text').textContent = randomPhrase;
});

document.getElementById('pellets').addEventListener('click', function() {
    pelletCounter--;
    document.getElementById('pellet-counter').textContent = pelletCounter;
});