// Skeleton
// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
    // split sentence into words
    words = sentence.split(' ')
    palindromeWords = []
    //iterate words and collect the palindromes
    //we will call function isPalindrome
    for (w = 0; w < words.length; w++) {
        if (isPalindrome(words[w])) {
            palindromeWords.push(words[w])
        }
    }
    //sort the list of palindromes by word length
    palindromeWords.sort(sortAscendingByLength)
    largeItem = palindromeWords[0]
    for (r = 1; r < palindromeWords.length; r++) {
        if (largeItem < palindromeWords[r]) {
            largeItem = palindromeWords[r]
        }
    }
    //return the largest item in the sorted list
    return largeItem
}
function reverseString(string) {
    //will take a string and split it
    splitArray = string.split('')
    reverseArray = []
    //iterate over the array and unshift it
    for (i = 0; i < splitArray.length; i++) {
        reverseArray.unshift(splitArray[i])
    }
    // for (i = splitArray.length; i > 0; i--) {
    //     reverseArray.push(splitArray[i])
    // }
    //join to combine a string
    joiner = ''
    revString = reverseArray.join(joiner)
    return revString
}
function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    //call reversestring function
    word = word.toLowerCase();
    reverseWord = reverseString(word)
    return (word === reverseWord)
    //iterate over both strings and compare
    //use if statement to compare
    for (j = 0; j < word.length; j++) {
        for (k = 0; k < reverseWord.length; k++) {
            if (word[j] !== reverseWord[k]) {
                return false
            }
            else {
                return true
            }
        }
    }
}
function sortAscendingByLength(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    }
    return 0;
}
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testData) {
    if (actual === expected) {
        console.log('passed')
    }
    else {
        console.log('FAILED [' + testData + '] Expected "' + expected + '", but got "' + actual + '"')
    }
}
//TESTS CASES
palindrome_test = 'wtrRtw'
nonpalindrome_test = 'reticulatEd'
palindrone_test_result = isPalindrome(palindrome_test)
nonpalindrone_test_result = isPalindrome(nonpalindrome_test)
assertEqual(palindrone_test_result, true, 'should return true')
assertEqual(nonpalindrone_test_result, false, 'should return false')
resultOfReverse = reverseString('abcdefg')
assertEqual(resultOfReverse, 'gfedcba', 'should return input reversed')
resultOfFindLongest = findLongestPalindrome('a cute racecar went down to eye stettets')
assertEqual(resultOfFindLongest, 'stettets', 'should return longest palindrome')







