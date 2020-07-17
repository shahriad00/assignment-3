function woodCalculator(chair,table,bed){
   const chairSize = 1; /*cubic feet */
   const tableSize = 3; /*cubic feet */
   const bedSize = 5; /*cubic feet */
   woodAmount = chairSize * chair + table * tableSize + bed * bedSize;
   return woodAmount;
}
var result = woodCalculator(4,5,3);
console.log("Total:",result,"cubic feet");