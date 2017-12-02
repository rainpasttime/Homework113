"use strict";
module.exports = function main(inputs) {
    let kilometer = inputs.running;
    let minutes = inputs.waiting;
    let sum = 0;

    if(kilometer>0 && kilometer<=2)
    {
        sum = 6+minutes*0.25;
        sum = Math.floor(sum);
        return sum;
    }
    else if(kilometer>2 && kilometer<=8)
    {
        sum = 6+(kilometer-2)*0.8+minutes*0.25;
        sum = Math.floor(sum);
        return sum;
    }
    else
    {
        sum = 6+6*0.8+(kilometer-8)*1.6+minutes*0.25;
        sum = Math.floor(sum);
        return sum;
    }
};
