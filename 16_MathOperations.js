function solve(num1, num2, operator){
    let result;

    switch(operator){
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '%':
            result = num1 % num2
            break;
        case '**':
            result = num1 ** num2
            break;
    }
    console.log(result);
}

solve(1, 5, '+')
solve(1, 5, '-')
solve(1, 5, '*')
solve(1, 5, '/')
solve(25, 500, '%')
solve(1, 5, '**')