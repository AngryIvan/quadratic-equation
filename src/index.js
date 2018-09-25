module.exports = function solveEquation(equation) {
    const solutionArray = [];
    //retrieving a, b, c from equation string
    const abc = (equation.split('* x'));
    let a = parseInt(abc[0]);
    const buffer = abc[1].split('^2');
    let b = (buffer[1]).split(' ');
    b = parseInt(b.join('')); //deleting space between minus sign and a number
    let c = (abc[2]).split(' ');
    c = parseInt(c.join('')); //deleting space between minus sign and a number

    //calculate
    let discrSqrt = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let x1 = ((-b) + discrSqrt) / (2 * a);
    let x2 = ((-b) - discrSqrt) / (2 * a);
    solutionArray.push(Math.round(x1), Math.round(x2));

    return solutionArray.sort((left, right) => left - right);
}