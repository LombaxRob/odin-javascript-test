// Task 1
function add7(number) {
    number = number + 7;
    return number;
}

console.log(add7(5));

// Task 2
function multiply(num1, num2) {
    answer = num1 * num2;
    return answer;
}

console.log(multiply(2,3));

// Task 3
function capitalize(wrongCaseWord) {
    wrongCaseWord = wrongCaseWord.toUpperCase();
    return wrongCaseWord;
}

console.log(capitalize("ALJjejdjfjJSJjsjr"));

// Task 4
function lastLetter(word){
    letter = word.charAt(word.length-1);
    return letter;
}

console.log(lastLetter("hello world"))