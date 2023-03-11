function billSplitter(cost, people){
    let totalCost = 0;
    for (let i = 0; i < cost.length; i++) {
        totalCost += cost[i];
    }
    return {"Total Bill": totalCost, "Each Person Bill": totalCost/people};
}

console.log(billSplitter([120,150,486,645,879,654,561], 9));