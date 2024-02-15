/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const leftSymbols=[];
    for(let i=0;i<stack.length;i++){
        const top=leftSynbols[leftSynbols.length-1]
    if(s[i]==='(' || s[i]==='{' ||s[i]==='[')
        leftSynbols.push(s[i]);
    else if(s[i]===')' && top==='(' && s.length!==0){
        leftSynbols.pop();
    }
    else if(s[i]==='}' && top==='{' && s.length!==0){
        leftSynbols.pop();
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


