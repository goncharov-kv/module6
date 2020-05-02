const avg = function() {
    let SArg = 0;
    for(let j = 0;j < arguments.length;j++) {
        SArg += arguments[j];
    }
    return SArg / arguments.length;
}
