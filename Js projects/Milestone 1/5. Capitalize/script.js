function check(name){
    if(name[0] === name[0].toLowerCase())
        name = name[0].toUpperCase() + name.slice(1);
    return name;
}

console.log(check("Nibedan"));
console.log(check("Nibedan"));