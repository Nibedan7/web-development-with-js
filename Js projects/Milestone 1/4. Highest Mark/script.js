function highest() {
    let highest = marks[0];
    for(let i=1; i<marks.length; i++) {
        highest = marks[i]>highest ? marks[i] : highest;
    }
    console.log(`Highest marks: ${highest}`);
}


let marks = [54, 48, 62, 45, 65];
highest(marks);