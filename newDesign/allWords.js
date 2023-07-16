const buttonClick = document.querySelector('.button-click');

const DBServiceTwo = class {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw  new Error(' you  have error ' + url)
        }
    }
    getTestData = () => {
        return this.getData('../database/all.json')
    }
}

const renderWordsTwo = (response) => {
    console.log(12, response)
}

// new DBServiceTwo().getTestData().then(renderWordsTwo);

async function postName() {
    const object = { name: 'James Gordon' };
    const response = await fetch('test.json', {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseText = await response.text();
    console.log(responseText); // logs 'OK'

}

async function getName() {
    const res = await fetch('test.json');
    if (res.ok) {
        return res.json();
    } else {
        throw  new Error(' you  have error ' + url)
    }
}

buttonClick?.addEventListener('click', async () => {
    console.log(123)
    // new DBServiceTwo().getTestData().then(renderWordsTwo);

    await postName()
    console.log(await getName())

})
