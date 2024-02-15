/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const leftSymbols=[];
    for(let i=0;i<stack.length;i++){
        const top=leftSymbols[leftSymbols.length-1]
    if(s[i]==='(' || s[i]==='{' ||s[i]==='[')
        leftSymbols.push(s[i]);
    else if(s[i]===')' && leftSymbols.length===0&&leftSymbol[leftSymbols.length-1]==='('){
        leftSymbols.pop();
    }
    else if(s[i]==='}' && top==='{' && s.length!==0){
        leftSymbols.pop();
    }
    else if(s[i]===']' && top==='[' && s.length!==0){
        leftSymbols.pop();
    }
    else{
        return false
    }
}
return stack.length===0;
};

module.exports = { isValid };


