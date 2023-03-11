function bugCorrecter(quantities){
    for(let i=0; i<quantities.length; i++) {
        quantities[i] *= 2;
    }
    return quantities;
}

let quantities = [1,2,3,4,5,6,7,8,9,10];
quantities = bugCorrecter(quantities);
console.log(quantities);