module.exports = function(year){
    const date = new Date();
    const theyear = date.getFullYear()-year;
    return theyear;
    
  }
 