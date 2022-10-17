const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false
  } else {
    let name = [];
    members.forEach(el=>{
      if(typeof el === 'string'){
        if(el.indexOf(' ') >= 0){
          el = el.replace(/\s/g, '')
        } 
        name.push(el[0].toUpperCase())
      }
    })
    if(name.length > 0){
      return name.sort().join('')
    } else {
      
      return false
    } 

  }

}

module.exports = {
  createDreamTeam
};
