const discount = (price, discountPrice) => {
    let discount = price - discountPrice;
    let percent = discount/price*100;
    percent = parseInt(percent*100)/100;
    return percent;
}

let discounted = discount(150, 123.25);
console.log(discounted + "%"); 