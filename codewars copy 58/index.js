/*
    В этом простом упражнении вы создадите программу, которая возьмет два списка целых чисел, a и b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры кубоидов a и b. Вы должны найти разницу в объемах кубоидов, независимо от того, какая из них больше.

Например, если переданные параметры ([2, 2, 3], [5, 4, 1]), объем a равно 12, а объем b - 20. Поэтому функция должна возвращать 8.

Ваша функция будет протестирована как на готовых, так и на случайных примерах.

Если можете, попробуйте написать это в одной строке кода.
*/

function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
}
console.log(findDifference([2, 3, 4], [3, 3, 3]));
