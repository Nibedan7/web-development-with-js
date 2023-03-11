let balance = {"Rohit":1200, "Virat":2000, "Rahul":100};

function withdraw(name, amount){
    if(balance[name] - amount >= 0){
        balance[name] -= amount;
    } else {
        console.log("Insufficient funds. Withdrawal failed.");
    }
}
function deposit(name, amount){
    balance[name] += amount;
}

withdraw("Virat", 200);
console.log(balance);