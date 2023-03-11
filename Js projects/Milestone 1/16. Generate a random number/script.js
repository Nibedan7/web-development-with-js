const randomNumber = (() =>{
    return Math.floor(Math.random()*100)+1; // +1 to make the range between 1 and 100 instead of 0 and 99.
})();

console.log(randomNumber);