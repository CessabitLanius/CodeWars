// Square(n) Sum

/*
Завершите функцию квадратной суммы так, чтобы она квадратировала каждое переданное в нее число, а затем суммировала результаты вместе.
Например, для [1, 2, 2] он должен возвращать 9, потому что 1^2 + 2^2 + 2^2 = 9.
 */
function squareSum(numbers){
return numbers.reduce((sum,num)=> sum = sum + num**2,0);
}
console.log(squareSum([3]));