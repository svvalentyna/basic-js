const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(array) {
  let removedMinusArray = array.filter(item => item >= 0);
  removedMinusArray.sort( function( a , b){
      if(a > b) return 1;
      if(a < b) return -1;
      return 0;
  });
  if(removedMinusArray.length < array.length){
    array.forEach((element,index) => {
      if(element < 0){
        removedMinusArray.splice(index, 0, element)
      }
    });

  }
  return removedMinusArray
  
}

module.exports = {
  sortByHeight
};
