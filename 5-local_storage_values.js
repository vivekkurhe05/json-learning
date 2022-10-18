var temp = {
    "firstName" : "Alex",
    "lastName" : "Michaels",
    "age" : 30
}

var tmpString = JSON.stringify(temp);
localStorage.setItem('test', tmpString);

var tempObj = localStorage.getItem('test');
console.log(tempObj);