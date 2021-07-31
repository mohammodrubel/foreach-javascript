
// we are practicing foreach method , provide by callback
// array travers 
// we can find index 
// we can see our array 

var myArray = [1,2,3,4,5,6]
myArray.forEach(function(value,index,number){
    console.log(myArray)
})


// part 1 
function result (myArray,callback){
    for (var i =0;i<myArray.length;i++){
        callback(myArray[i])
    }
}

result(myArray,function (value){
    console.log(value)
})

// part 2 
function result (myArray,callback){
    for (var i =0;i<myArray.length;i++){
        callback(myArray[i],i)
    }
}

result(myArray,function (value,index){
    console.log(value,index)
})
// part 3 
function result (myArray,callback){
    for (var i =0;i<myArray.length;i++){
        callback(myArray[i],i,myArray)
    }
}

result(myArray,function (value,index){
    console.log(value,index,myArray)
})

// array sum system with call back 

function result (myArray,callback){
    for (var i =0;i<myArray.length;i++){
        callback(myArray[i],i,myArray)
    }
}

var sum =0
result(myArray,function (value){
    sum +=value
})
console.log(sum)
