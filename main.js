const vocabularyWord = document.querySelector('.vocabulary_word'),
    nextWordButton = document.querySelector('.next-word__button'),
    showWordButton = document.querySelector('.show-word__button'),
    showWordText = document.querySelector('.show-word_text'),
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
            throw  new Error('you have error ' + url)
        }
    }
    getTestData = () => {
        return this.getData('database/all.json')
    }
}

const showWord = () => {
    showWordText.classList.add('stop');

    if (vocabularyWord.textContent === 'Start'){
        showWordButton.classList.add('stop');
    }else {
        showWordButton.classList.remove('stop');
    }
}

const renderWords = (response) => {
    let count = 0;
    let wordsToWrite = response['33'];
    const mixedWordsFalse = mix(wordsToWrite)
    const mixedWordsTrue = JSON.parse(JSON.stringify(mixedWordsFalse));

    mixedWordsFalse.forEach(item => item.write = false)
    mixedWordsTrue.forEach(item => item.write = true)

    const allWords = concatAndMix(mixedWordsFalse, mixedWordsTrue)

    nextWordButton.addEventListener('click', () => {
        count > 0 && allWords.shift();

        if (allWords.length) {
            if (allWords[0].write === false) {
                vocabularyWord.textContent = allWords[0].words_eng.trim();
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
            showWord();
        } else {
            finish.classList.add('end');
            wordInput.classList.add('stop');
            vocabularyWord.classList.add('stop');
            nextWordButton.classList.add('stop');
            showWordButton.classList.add('stop');
        }

        showWordText.textContent = "";
    });

    showWordButton.addEventListener('click', () => {
        showWordText.classList.remove('stop');
        if (allWords[0].write === false) {
            showWordText.textContent = allWords[0].translate.trim()
            showWordText.blur();
            nextWordButton.focus()
        }  else {
            showWordText.textContent = allWords[0].words_eng.trim()
        }

        showWordButton.classList.add('stop');

    });

    searchForm.addEventListener('submit', event => {
        event.preventDefault();

        const wordFromVocab = allWords[0].words_eng.toLowerCase();
        const wroteWord = wordInput.value.trim().toLowerCase();
        console.log(wordFromVocab, wroteWord, wordFromVocab === wroteWord)

        if (wordFromVocab === wroteWord) {
            wordInput.style.background = 'rgba(0,128,0, 0.1)';
            nextWordButton.classList.remove('stop');
            wordInput.blur();
            nextWordButton.focus();
        } else wordInput.style.background = 'rgba(255, 0, 0, 0.1)';
    });
};

new DBService().getTestData().then(renderWords);
showWord();

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

function mix(array) {
    for (let length = array.length - 1; length > 0; length--) {
        let index = Math.floor(Math.random() * length);
        let temp = array[length];
        array[length] = array[index];
        array[index] = temp;
    }
    return array;
}
