//takes introduction as a function and use string interpolation
function introduction(name){
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Aki"));

//takes two arguments and returns a phrase
function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Aki", "Ember.js"))

//takes two arguments and language defaults to Javascript
function introductionWithLanguageOptional(name,language="JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Gracie",));
