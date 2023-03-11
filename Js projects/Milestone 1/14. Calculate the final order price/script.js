const calculate = (cart) => {
    let price = 0;
    for(let i = 0; i < cart.length; i++) {
        let object = cart[i];
        price += Object.keys(object)[0] * Object.values(object)[0];
    }
    return price;
}

let price = calculate([{120:2}, {130:1}, {150:3}, {50:20}])
console.log(price);