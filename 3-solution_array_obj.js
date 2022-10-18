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

var temp = {
    "firstName" : "Alex",
    "lastName" : "Michaels",
    "age" : 30
}

obj.people.push(temp)

for(let i=0; i < obj.people.length;i ++){
    var person = obj.people[i];
    console.log(person.firstName);
}
