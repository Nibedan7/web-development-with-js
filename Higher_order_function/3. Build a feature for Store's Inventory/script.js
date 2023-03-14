const storeItems = {"apple": 0.99, "banana": 0.65, "orange": 1.25, "grape": 2.50, "watermelon": 5.99}; 

let storeItems_InRupees = Object.entries(storeItems).map((element) => {
    return storeItems[element[0]] = element[1] * 80;
});

console.log(storeItems);