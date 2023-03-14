const input = "User Input"


function reverse(string){
    setTimeout(() => {
        let reverse = "";
        for(let i = string.length - 1; i >= 0; i--){
            reverse += string[i];
        }
        console.log(reverse);
    }, 2000 );
}
reverse(input);

function reverseTrick(string){
    setTimeout(() => {
        console.log(string.split("").reverse().join(""));
    }, 2000);
}
reverseTrick(input);

function reverse_callback(string){
    let reverse = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    console.log(reverse);
}
setTimeout(reverse_callback, 2000, input);

function reverseTrick_callback(string){
    console.log(string.split("").reverse().join(""));
}
setTimeout(reverseTrick_callback, 2000, input);