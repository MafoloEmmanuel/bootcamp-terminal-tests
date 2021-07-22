module.exports = function(theDay){
    const day = new Date();
       return theDay.startsWith('M')
                  || theDay.startsWith('W') || theDay.startsWith('T') 
                      || theDay.startsWith('F' )
    }
   