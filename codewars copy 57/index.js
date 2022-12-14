/*
    BA вашего стартапа сообщил маркетингу, что ваш сайт имеет большую аудиторию в Скандинавии и соседних странах. Маркетинг считает, что было бы здорово приветствовать посетителей
    сайта на их родном языке. К счастью, вы уже используете API, который определяет местоположение пользователя, так что это легкая победа.
    Задача -
    Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять!       
    Напишите функцию "приветственно", которая принимает параметр "язык" (всегда строку) и возвращает приветствие - если оно есть в базе данных. По умолчанию он должен использоваться на английском языке, если языка нет в базе данных, или в случае неправильного ввода.
*/

function greet(language) {
    // создаем обьект со значением стран и приветсвия на языках
    const country = {
        'english': 'Welcome',
        'czech': 'Vitejte',
        'danish': 'Velkomst',
        'dutch': 'Welkom',
        'estonian': 'Tere tulemast',
        'finnish': 'Tervetuloa',
        'flemish': 'Welgekomen',
        'french': 'Bienvenue',
        'german': 'Willkommen',
        'irish': 'Failte',
        'italian': 'Benvenuto',
        'latvian': 'Gaidits',
        'lithuanian': 'Laukiamas',
        'polish': 'Witamy',
        'spanish': 'Bienvenido',
        'swedish': 'Valkommen',
        'welsh': 'Croeso'
    }
    return country[language] || country['english']; // верни страну с языком (ключ --- значение ) или английский язык по умолчанию
}
console.log(greet('czech'));

