function rental(days, type){
    let price = 0;
    switch(type) {
        case "Economy":
            price = 4000 * days;
            break;
        case "Midsize":
            price = 10000 * days;
            break;
        case "Luxury":
            price = 20000 * days;
            break;
        default:
            return "Not a valid type";
    }
    return price;
}

console.log(rental(20, "Midsize"));