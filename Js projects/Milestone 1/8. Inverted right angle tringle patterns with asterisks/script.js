function triangle(num) {
    for(let i = 0; i < num; i++){
        let row = "";
        for(let j = 0; j < num-i; j++){
            row += "*";
        }
        console.log(row);
    }
}

triangle(8);