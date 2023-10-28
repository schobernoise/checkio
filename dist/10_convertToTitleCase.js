// Your function should take a string as an input and convert all the first letters of the words in the string to uppercase,
// making the string a title case (other letters must be in lowercase).
function toTitleCase(sentence) {
    return sentence
        ? sentence
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substring(1, word.length).toLowerCase())
            .join(" ")
        : "";
}
console.log(toTitleCase("hello world"), "Hello World");
console.log(toTitleCase("openai gpt-4"), "Openai Gpt-4");
console.log(toTitleCase("this is a title"), "This Is A Title");
console.log(toTitleCase("THE QUICK BROWN FOX"), "The Quick Brown Fox");
console.log(toTitleCase("JUMPs ovER a LAZy dog"), "Jumps Over A Lazy Dog");
console.log(toTitleCase("typescript is great"), "Typescript Is Great");
console.log(toTitleCase("the answer is 42"), "The Answer Is 42");
console.log(toTitleCase("to be or not to be"), "To Be Or Not To Be");
console.log(toTitleCase("that is the question"), "That Is The Question");
console.log(toTitleCase(""), "");
