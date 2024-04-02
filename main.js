const wordList = [
    "Инновация",
    "Технология",
    "Наука",
    "История",
    "Культура",
    "Образование",
    "Политика",
    "Экономика",
    "Социология",
    "Психология",
    "Философия",
    "Религия",
    "Спорт",
    "Здоровье",
    "Еда",
    "Путешествие",
    "Природа",
    "Экология",
    "Устойчивое развитие",
    "Глобализация",
    "Космос",
    "Астрономия",
    "Авиация",
    "Морские приключения",
    "Приключенческий роман",
    "Фантастика",
    "Детектив",
]
const randomWordFromArray = _.sample(wordList);

function main(firstWord = 'мир') {
    let points = 0;
    const wordsData = [firstWord, ]; // Хранение слов

    alert(`Начальное слово: ${firstWord}`); // Вывод начального слова

    let isWin = true;
    while (isWin) {
        const getLastWordInArray = wordsData[wordsData.length - 1]; // Get() -> Последнее слово в массиве
        const getLastCharInLastWordInArray = getLastWordInArray[getLastWordInArray.length - 1]; // Get() -> Последняя буква из последнего слова в массиве

        const getUserWord = prompt('Слово: ');
        const userWordLower = getUserWord.toLowerCase();
        const getUserWordFirstChar = userWordLower[0];

        for(let i in wordsData) { // Перебор массива на предмет введенного слова
            if (userWordLower  == wordsData[i]) {
                playerLose();
            }
        }

        if (getUserWordFirstChar != getLastCharInLastWordInArray) { // if Первый символ из слова пользователя != Последнему символу из последнего слова
            playerLose();
        } else {
            points++;
            wordsData.push(userWordLower);
        }
    }

    function playerLose() {
        const gameLose = confirm(`
        Кол-во набранных очков: ${points}
        История слов: ${wordsData.join(', ')}
        Хотите начать сначала?
    `);
    if (gameLose ? main() : alert('Приходите поиграть ещё!'));
    isWin = false;
    }
}

main(randomWordFromArray);