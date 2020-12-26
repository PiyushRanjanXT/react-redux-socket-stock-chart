export function insertInSortedArray(el, arr) { 
    arr.splice(findLoc(el, arr) + 1, 0, el); 
    return arr; 
} 

function findLoc(el, arr, st, en) { 
    st = st || 0; 
    en = en || arr.length; 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] && arr[i][0] > el[0]) 
            return i - 1; 
    } 
    return en; 
} 
