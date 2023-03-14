function randomNumberGenerator(delay=0) {
    setTimeout(() => console.log(Math.random()), (delay+1)*1000);  

    let progressIndicator = setInterval(() => {
        console.log(`${delay--} Seconds Remaining`);
        if (delay==0){
            clearInterval(progressIndicator);
        }
    }, 1000);
}

let delay = 3;
randomNumberGenerator(delay);