
const vocabularyWord = document.querySelector('.vocabulary_word'),
    nextWordButton = document.querySelector('.next-word__button'),
    searchForm = document.querySelector('.search__form'),
    wordInput = document.querySelector('.check-word__input'),
    finish = document.querySelector('.finish');


const  DBService = class {
    getData =  async (url) => {
        const res  = await fetch(url);
        if(res.ok){
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

    let wordsToWrite = response.results;
    let wordsUA =  JSON.parse(JSON.stringify( wordsToWrite ));
    wordsUA.map(item => item.write = false)
    const allWords = [...wordsUA,...wordsToWrite]
    let count = 0;

    function mix(array){
        for(let length = array.length -1; length > 0; length--){
            let index = Math.floor(Math.random() * length);
            let temp = array[length];
            array[length] = array[index];
            array[index] = temp;
        }
    }
    nextWordButton.addEventListener('click' , () => {

        console.log(allWords.length )
        if(count > 0){
            allWords.shift();
        } else  mix(allWords);
        wordInput.focus();
        if(allWords.length){
           allWords[0].write === false
               ? vocabularyWord.textContent = allWords[0].words_eng
               : vocabularyWord.textContent = allWords[0].translate;
           count++;
        } else {
            count = 0;
            finish.classList.add('end');
            wordInput.classList.add('stop');
            vocabularyWord.classList.add('stop');
        }
        console.log(allWords[0])
        if (allWords[0].write === false){
            wordInput.classList.add('stop');
            nextWordButton.classList.remove('stop');
        }else {
            wordInput.value = '';
            wordInput.style.background = '';
            wordInput.classList.remove('stop');
            nextWordButton.classList.add('stop');
        }
    });
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        if(allWords[0].words_eng === wordInput.value.trim()){
            wordInput.style.background = 'rgba(0,128,0, 0.1)';
            nextWordButton.classList.remove('stop');
            wordInput.blur();
            nextWordButton.focus();
        }
        else wordInput.style.background = 'rgba(255, 0, 0, 0.1)';
    });
};

new DBService().getTestData().then(renderWords);


