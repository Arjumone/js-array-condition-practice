var destination = ['coxbazar', 'sajek', 'bali', 'nepal'];

console.log(destination[2]);
destination[2] = 'thailand';
var index = destination.indexOf('bali');

destination.push('bhutan');
destination.pop();

// condition
// <, >, ==, !=, <=, >=
// && , ||
if(destination[1] === 'sajek'){
    console.log('sajek jabo');
}
else if(destination[2]=== 'bali'){
    console.log('bali jabo');
}
else if(destination.length===4){
    console.log('confirm destination');
}
else{
    console.log('kotao jabona');
}