module.exports = function(shift){
    if(shift === 'morning'){
        return ('R' + 20);
    } else if(shift === 'afternoon'){
        return ('R' + 10);
    } else if(shift === 'nightshift'){
        return 'free';
    }
      
    }
    
    