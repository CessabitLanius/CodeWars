// Часы для начинающих #2

/*
    Часы показывают h часов, m минут и секунд секунд после полуночи.    
    Ваша задача - написать функцию, которая возвращает время с полуночи в миллисекундах.
    
*/
function past(h, m, s) {
    return (h * 60 * 60 * 1000) + (m * 60 * 1000) + s * 1000; // миллисекунды
}
console.log(past(0, 1, 1));