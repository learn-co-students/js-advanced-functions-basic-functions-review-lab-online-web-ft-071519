const mondayWork = function(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(string = "*") {
    return function (adj = "special") {
        return `You are ${string}${ adj}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// Below was copied over from solutions. The description for the function is not easy to understand. 
let actionApplyer = function (start, ray) {
    let a = start
    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }
    return a
}

