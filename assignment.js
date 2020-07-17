// feet To Mile
function feetToMile(feet){
    var mile = feet/5280;
       return mile;
   }
   var result1 = feetToMile(5);
   console.log("Mile:-",result1);


// Wood Calculator
function woodCalculator(chair,table,bed){
   const chairSize = 1; /*cubic feet */
   const tableSize = 3; /*cubic feet */
   const bedSize = 5; /*cubic feet */
   TotalWoodAmount = chairSize * chair + table * tableSize + bed * bedSize;
   return TotalWoodAmount;
}


// Brick Calculator
function brickCalculator(level){
    const feet = 1000;
    if(0 <= level && level <= 10){
        var brick = level * 15 * feet;
    }
    else if(10 < level && level <= 20){
        brick = (level-10) * 12 * feet + 10 * 15 * feet ;
    }
    else{
         brick = (level-20) * 10 * feet + 10 * 12 * feet + 10 * 15 * feet;
    }
    return brick;
}





// tiny friend
function tinyFriend(friends){
    var smallName = friends[0];
    
    for(var i=0 ; i < friends.length; i++){
        var element = friends[i];
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
