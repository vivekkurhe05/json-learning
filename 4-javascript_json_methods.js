/**
 * The JSON.stringify() method converts a JavaScript value to a JSON string,
 * optionally replacing values if a replacer function is specified or optionally
 * including only the specified properties if a replacer array is specified.
 * 
 * 
 * The JSON.parse() method parses a JSON string, constructing the JavaScript
 * value or Object described by the string. An optional reviver function can 
 * be provided to perform a transformation on the resulting object before it
 * is returned. 
 * 
 * Note: This is basically used when you have to store values in local and session storage or cookies
 */

var json = '{"result" : true, "count" : 42}';
console.log(JSON.parse(json))

console.log({"x":5, "y":6})
console.log(JSON.stringify({"x":5, "y":6}));
// expected output: "{"x":5, "y":6}"

var obj = {
    "people":[
        {
            "firstName" : "Laurence",
            "lastName" : "Svekis",
            "age" : 30
        },
        {
            "firstName" : "Mike",
            "lastName" : "Smith",
            "age" : 50
        },
        {
            "firstName" : "Linda",
            "lastName" : "Jones",
            "age" : 40
        }
    ],
    "places":[
        {
            "location" : "Toronto",
            "lat" : 87,
            "long" : 140
        },
        {
            "location" : "New York",
            "lat" : 67,
            "long" : 110
        }
    ]
}
console.log(obj)

var stringy = JSON.stringify(obj)
console.log(stringy)

// To convert string representation of object into object use JSON.parse();
console.log(JSON.parse(stringy));