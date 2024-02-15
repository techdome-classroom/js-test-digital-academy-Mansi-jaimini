/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanDict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && romanDict[s[i]] > romanDict[s[i - 1]]) {
            result += romanDict[s[i]] - 2 * romanDict[s[i - 1]];
        } else {
            result += romanDict[s[i]];
        }
    }

    return result;
}


    
};


module.exports={romanToInt}