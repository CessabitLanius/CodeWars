// старше в 2 раза 
/*
 Ваша функция принимает два аргумента:

Текущий возраст отца (лет)

Текущий возраст его сына (лет)

Посчитайте, сколько лет назад отец был в два раза старше своего сына (или через сколько лет он будет в два раза старше). Ответ всегда больше или равен 0, независимо от того, было ли это в прошлом или в будущем.
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = Math.abs(dadYearsOld - 2 * sonYearsOld);
    return result;
}
console.log(twiceAsOld(30, 23));

