// Code your solutions in this file

<<<<<<< HEAD
function writeCards(names,events) {
    let messageArray=[];
    for (let i = 0; i <names.length; i++) {
      messageArray.push('Thank you, '+names[i]+', for the wonderful ' + events+' gift!');
    }
    return messageArray;
  }
  writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');
  
function countDown(numb){
let i=numb;
while (i>=0){
    console.log(i--);
}
}
countDown(10);
=======
const names =['Lisa', 'Kaitlin', 'Jan' ];
function writeCards(names){
    for(let i=0;i<names.length;i++){
        console.log([`Thank you, ${names[i]}, for the wonderful surprise gift!`]);
    }
}
writeCards(names);

function countdown(numb){
let i=numb
while (i>=0){
    console.log(i--);
}
}
>>>>>>> 3f9e6ce7fda766792a06ef498aa291934372f250
