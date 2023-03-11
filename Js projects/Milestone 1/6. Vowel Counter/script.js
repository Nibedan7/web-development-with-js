function vowelCount(name){
    let vowelCount = 0;
    for(let i = 0; i < name.length; i++) {
        let char = name[i].toLowerCase();
        if(char=='a' || char=='e' || char=='i' || char=='o' || char == 'u')
            vowelCount++;
    }
    return vowelCount;
}

console.log(vowelCount("Nibedan"));