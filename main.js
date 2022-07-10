const vocabularyWord = document.querySelector('.vocabulary_word'),
    nextWordButton = document.querySelector('.next-word__button'),
    searchForm = document.querySelector('.search__form'),
    wordInput = document.querySelector('.check-word__input'),
    finish = document.querySelector('.finish');

nextWordButton.focus();

const DBService = class {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw  new Error(' you  have error ' + url)
        }
    }
    getTestData = () => {
        return this.getData('database/words.json')
    }
}
const renderWords = (response) => {
    let count = 0;
    let wordsToWrite = response.results;

    function mix(array) {
        for (let length = array.length - 1; length > 0; length--) {
            let index = Math.floor(Math.random() * length);
            let temp = array[length];
            array[length] = array[index];
            array[index] = temp;
        }
        return array;
    }

    const concatAndMix = (first, second) => {
        for (let i = 0; i < first.length; i++) {
            if (Math.random() >= 0.5) {
                let temp = first[i];
                first[i] = second[i];
                second[i] = temp;
            }
        }
        return [...first, ...second]
    }

    const mixedWordsFalse = mix(wordsToWrite)
    const mixedWordsTrue = JSON.parse(JSON.stringify(mixedWordsFalse));

    mixedWordsFalse.forEach(item => item.write = false)
    mixedWordsTrue.forEach(item => item.write = true)

    const allWords = concatAndMix(mixedWordsFalse, mixedWordsTrue)

    nextWordButton.addEventListener('click', () => {

       count > 0 && allWords.shift();

        if (allWords.length) {
            console.log(allWords[0])

            if (allWords[0].write === false) {
                vocabularyWord.textContent = allWords[0].words_eng
                wordInput.classList.add('stop');
                nextWordButton.classList.remove('stop');
            } else {
                vocabularyWord.textContent = allWords[0].translate;
                wordInput.value = '';
                wordInput.style.background = '';
                wordInput.classList.remove('stop');
                wordInput.focus();
                nextWordButton.classList.add('stop');
            }
            count++;

        } else {
            finish.classList.add('end');
            wordInput.classList.add('stop');
            vocabularyWord.classList.add('stop');
            nextWordButton.classList.add('stop');
        }

    });
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        console.log(allWords[0].words_eng, wordInput.value.trim(), allWords[0].words_eng === wordInput.value.trim())
        if (allWords[0].words_eng === wordInput.value.trim()) {
            wordInput.style.background = 'rgba(0,128,0, 0.1)';
            nextWordButton.classList.remove('stop');
            wordInput.blur();
            nextWordButton.focus();
        } else wordInput.style.background = 'rgba(255, 0, 0, 0.1)';
    });
};

new DBService().getTestData().then(renderWords);


