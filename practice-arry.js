// practice one
var fruits = ['Apple', 'Banana', 'orange'];
// var index = fruits.indexOf('Banana');
// console.log(index);
fruits['Banana'] = 'Mango';
// fruits['orange'] = 'Watermelon';
// console.log(fruits);

// practice two
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
// myScore
if(myScore > 80){
    console.log('A Grade');
}
else if(myScore> 60){
    console.log('C Grade');
}
else if(myScore> 50){
    console.log('D Grade');
}
else if(myScore> 40){
    console.log('C Grade');
}
else{
    console.log('F Grade');
}

// tomScore
if(tomScore > 80){
    console.log('A Grade');
}
else if(tomScore> 60){
    console.log('C Grade');
}
else if(tomScore> 50){
    console.log('D Grade');
}
else if(tomScore> 40){
    console.log('C Grade');
}
else{
    console.log('F Grade');
}

// janeScore
if(janeScore > 80){
    console.log('A Grade');
}
else if(janeScore> 60){
    console.log('C Grade');
}
else if(janeScore> 50){
    console.log('D Grade');
}
else if(janeScore> 40){
    console.log('C Grade');
}
else{
    console.log('F Grade');
}

// peterScore
if(peterScore > 80){
    console.log('A Grade');
}
else if(peterScore> 60){
    console.log('C Grade');
}
else if(peterScore> 50){
    console.log('D Grade');
}
else if(peterScore> 40){
    console.log('C Grade');
}
else{
    console.log('F Grade');
}

// johnScore
if(johnScore > 80){
    console.log('A Grade');
}
else if(johnScore> 60){
    console.log('C Grade');
}
else if(johnScore> 50){
    console.log('D Grade');
}
else if(johnScore> 40){
    console.log('C Grade');
}
else{
    console.log('F Grade');
}

// practice three
var one = 13;
var two = 79;
var three = 45;

if(one > two || one >three){
    console.log('one large');
}
else if(two > one || two > three){
    console.log('two large');
}
else if(three > one || three >two ){
    console.log('three large');
}
else{
    console.log('no one large');
}

// practice four
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 =>side2){
    console.log('one r two equal');
}
else if(side1 =>side3){
    console.log('one r three equal');
}
else if(side2 =>side1){
    console.log('two r one equal');
}
else if(side2 =>side3){
    console.log('two r three equal');
}
else if(side3 =>side1){
    console.log('three r one equal');
}
else if(side3 =>side2){
    console.log('three r two equal');
}
else{
    console.log('they are not equal equal');
}
