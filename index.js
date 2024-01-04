// Code your solutions in this file//
function writeCards(namesArray,event){
  let thankYouCard =[];
  for(let i =0 ; i < namesArray.length ; i ++){
    thankYouCard.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
return thankYouCard;
}
function countDown(startingNumber){
  while (startingNumber > 0){
    console.log(startingNumber);
    startingNumber-=1;
  }
  console.log(startingNumber);

}