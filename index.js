// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.` 
}

function wrapAdjective(x="*"){
    return function(adjective="special") {
     return `You are ${x}${adjective}${x}!`
   } 
 }

 let Calculator={add: function(a,b){return a+b},subtract:function(a,b){return a-b},multiply:function(a,b){return a*b} ,divide:function(a,b){return a/b} }

function actionApplyer(int,array){
  if (int ===0) {
    return int
  }

    for (let i = 0; i < array.length; i++ ){
    int = array[i](int)
  }

  return int
} 
