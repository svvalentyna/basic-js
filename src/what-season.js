const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = "Invalid date!";
 
  if (date) { 
    try {
      if (date.getTime()) {
        if(Object.prototype.toString.call(date) === "[object Date]"){
          let month = date.getMonth();
          if (month >= 2 && month <= 4) {
            season = "spring";
          } else if (month >= 5 && month <= 7) {
            season = "summer";
          } else if (month >= 8 && month <= 10) {
            season = "autumn"; 
          } else {
            season = "winter";
          }
        }
      } 
    }
    catch(err) {
      season = "Invalid date!";
    }
    
  } else {
    season = "Unable to determine the time of year!";
  }
  return season;
}

module.exports = {
  getSeason
};
