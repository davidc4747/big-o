var array = [1,2,3,4,5,6,7,8,9,10];

// An algorithm to find 10 in array
var i = 0;
var x = 0;
var index;

while(x !== 10){
    index = Math.floor(Math.random()*10);
    x = array[index];
    i++;
}

console.log("Found 10 in " + i + " tries!");


var answer = "O(1)";