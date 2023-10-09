// * STRING EXERCISES

/**
 * Change the string below to insert an apostrophe into the word "it's" using 
 * the escape character. Do not change the outer quotation marks.
 * 
 * @returns {string}
 */
function escapePractice() {
    let escape = 'I love ice cream. It\'s my favorite dessert.';  
    return escape;
}


/**
 * Given a random string called randomString, return the length of the string.
 * 
 * @param {String} randomString 
 * @returns 
 */
function findAStringsLength(randomString) {
    let length = randomString.length;
    return length;
}

/**
 * Given a random string, return the last character in that 
 * string.
 * 
 * @param {String} string 
 * @returns {String}
 */
function accessLastCharacter(string) {
    return string[string.length - 1];
}

/**
 * Given a random string of a url called url, return everything after the 
 * "www." section of the url.
 * 
 * * Do this using slice()
 *  
 * Your answer should look something like this:
 * 
 * https://www.google.com -> google.com
 * 
 * @param {String} url 
 * @returns {String}
 */
function getWebsiteName(url) {
    return url.slice(12);
}

/**
 * Given a string of a random url called url, return the portion of the url 
 * that says "http".
 * 
 * * Do this using slice()
 * 
 * ! Do not return a string literal
 * 
 * Your answer should look something like this:
 * 
 * https://www.google.com -> http
 * 
 * @param {String} url 
 * @returns {String}
 */
function getHttp(url) {
    return url.slice(0, 4);
}

/**
 * Given a string of a random url called url, return the "com" section of the 
 * url.
 * 
 * * Do this using substring().
 * 
 * ! Do not return a string literal
 * 
 * Your answer should look something like this:
 * 
 * https://www.google.com -> com
 * 
 * @param {String} url 
 * @returns {String}
 */
function getCom(url) {
   return url.substring(19);
}

/**
 * Given a string of a random url called url, return the "www" portion of the
 * url. 
 * 
 * * Do this using substr()
 * 
 * ! Do not return a string literal
 * 
 * @param {String} url 
 * @returns {String}
 */
function getWww(url) {
    return url.substr(8, 3); 
}

// Replace the url for bing with google, and return google's url
/**
 * Given a string called browser, replace the bing portion of the url 
 * with google.
 * 
 * * Do this using replace()
 * 
 * @returns {String}
 */
function useBetterSearchEngine() {
    let searchEngine = "https://www.bing.com";
    return searchEngine.replace("bing", "google");
}

/**
 * Given a random string called string, return the same string, but in all 
 * capital letters.
 * 
 * 
 * @param {String} string 
 * @returns {String}
 */
function toUpper(string) {
    return string.toUpperCase();
}

/**
 * Given a random string called string, return the same string, but in all 
 * lowercase letters.
 * 
 * @param {String} string
 * @returns {String} 
 */
function toLower(string) {
    return string.toLowerCase();
}

/**
 * Given three different strings called string1, string2, and string3 
 * respectively, concatenate all three strings and return the combined string.
 * 
 * @param {String} string1 
 * @param {String} string2 
 * @param {String} string3 
 * @returns {String}
 */
function combineStrings(string1, string2, string3) {
    string1.concat(string2, string3);
}

/**
 * Given a string with a lot of whitespace included, return that string without 
 * the leading / trailing whitespace.
 * 
 * @param {String} string 
 * @returns {String}
 */
function trimWhitespace(string) {
    return string.trim();
}

/**
 * Given a string called string, add whitespace to the start of the string using
 *  padStart() and return padded string.
 * 
 * 
 * @param {String} string 
 * @returns {String}
 */
function addWhitespace(string) {
    return string.padStart(30, " ");
}

/**
 * Given a string called string, add whitespace to the end of the string using 
 * padEnd() and return the padded string.
 * 
 * @param {String} string 
 * @returns {String}
 */
function addTrailingWhitespace(string) {
    return string.padEnd(30, " ");
}

/**
 * Given a random string called string, return the first character of the 
 * string using charAt().
 * 
 * @param {String} string 
 * @returns {String}
 */
function getFirstChar(string) {
    return string.charAt(0);
}

/**
 * Given a random string called string, return the last character's unicode .
 * 
 * @param {String} string 
 * @returns {Number}
 */
function getLastCharInUnicode(string) {
    return string.charCodeAt(string.length - 1);
}

/**
 * Given a random string called string, return the second character of the
 * string using bracket (array) notation.
 * 
 * @param {String} string 
 * @returns {String}
 */
function getSecondChar(string) {
    return string[1];
}

/**
 * Given a random string called string, return it as an array with each word as 
 * a separate element using split().
 * 
 * @param {String} string 
 * @return {String[]}
 */
function convertToArray(string) {
    return string.split(" ");
}

/**
 * Given a random string, return it as an array with each character as a separate element using split().
 * 
 * @param {String} string 
 * @returns {String[]}
 */
function convertToCharArray(string) {
    return string.split("");
}


