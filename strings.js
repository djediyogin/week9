

//checking for elements of and variables to pull from html and gives parameters of whether or not palindrome exists
document.getElementById('checkButton').addEventListener('click', function() {
    var input = document.getElementById('inputText').value;
    var resultElement = document.getElementById('result');
    if (isPalindrome(input)) {
        resultElement.textContent = '"' + input + '" is a palindrome!';
    } else {
        resultElement.textContent = '"' + input + '" is not a palindrome.';
    }
});

function isPalindrome(str) {
    // Removes non-alphanumeric characters and converts them to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Checks if the string is the same when reversed
    return str === str.split('').reverse().join('');
}