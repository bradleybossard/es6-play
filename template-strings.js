// Basic literal string creation
var string1 = `This is a pretty little template string.`

// Multiline strings
var string2 = `In ES5 this is
 not legal.`

// Interpolate variable bindings
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// Unescaped template strings
console.log(String.raw`In ES5 "\n" is a line-feed.`);

// Construct an HTTP request prefix is used to interpret the replacements and construction
/*
GET`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`(myOnReadyStateChangeHandler);
*/
