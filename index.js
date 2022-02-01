// code your solution here
function saturdayFun(activity = 'roller-skate'){
    //console.log(`This Saturday, I want to ${activity}!`);
    return ("This Saturday, I want to " + activity + "!");
}

saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){
    return ("This Monday, I will " + activity + ".");
}

mondayWork('work from home');

function wrapAdjective(para1 = "*"){
    //const encouragingPromptFunction = function(para2 = "special"){
     return function (para2 = "special"){
        return `You are ${para1}${para2}${para1}!`;
    };
    return encouragingPromptFunction;
}

wrapAdjective("||")("a dedicated programmer");