const person ={
    firstName: "Mithun",
    lastNmae:"s",
    age:20,
};
function ageInDays(personObject,callback){
    const fullName=`${personObject.firstName} ${personObject.lastNmae}`;
    const ageindays=personObject.age*365;
    callback(fullName,ageindays);
}
function logResult(fullName,ageindays){
    console.log(`The person's full name is ${fullName} and their age in days is ${ageindays}`);
}
ageInDays(person,logResult);