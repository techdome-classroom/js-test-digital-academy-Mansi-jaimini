/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    for(let i=0;i<stack.length;i++){
        const top=stack[stack.length-1]
    }
    if(s[i]==='(' || s[i]==='{' ||s[i]==='[')
        stack.push(s[i]);
    else if(s[i]===')' && top==='(' && s.length!==0){
        stack.pop();
    }
    else if(s[i]==='}' && top==='{' && s.length!==0){
        stack.pop();
    }
    else if(s[i]===']' && top==='[' && s.length!==0){
        stack.pop();
    }
    if(s[i]===top){
        console.log("true")
    }
    else{
        
    }

    
   
    
};

module.exports = { isValid };


