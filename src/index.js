function expressionCalculator(w) {
    let a = w.match(/[(]/g);
    let b = w.match(/[)]/g);
    let c = w.match(/\/ 0/g);
    if(c){
        throw 'TypeError: Division by zero.';
    } 
    if(a && b && a.length !== b.length){
        throw 'ExpressionError: Brackets must be paired';
    }
    if(!a && b){
        throw 'ExpressionError: Brackets must be paired';
    }
    if(a && !b){
        throw 'ExpressionError: Brackets must be paired';
    }
    const res = new Function(`return ${w}`);
    let dom = res();
    if(dom == Infinity){
        throw "TypeError: Division by zero.";
    }  
    return dom;
}
module.exports = {
    expressionCalculator
}
