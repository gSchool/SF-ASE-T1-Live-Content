function getElementsThatEqual10AtProperty(obj, key) {
    // your code here
    newArray = []
    if (obj[key] === undefined || obj[key].length === 0 || Array.isArray(obj[key]) === false) {
        return newArray
    }
    //for(var key in obj){
    for (i = 0; i < obj[key].length; i++) {
        if (obj[key][i] === 10) {
            newArray.push(obj[key][i])
        }
    }
    return newArray
}