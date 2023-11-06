const btnContainer = document.querySelector('.btn_container');
const quote = document.querySelector('.quote');
const character = document.querySelector('.character');
const anime = document.querySelector('.anime');
const btnArr = ['real.', 'word.', 'facts.', 'ykb.', 'yessir.', 'right.', 'too real.', 'tatakae.'];


function randomBtnWord() {
    return btnArr[Math.floor(Math.random() * btnArr.length)];
}


btnContainer.addEventListener('click', (e) => {

    e.target.addEventListener('click', () => {
        fetch('https://animechan.xyz/api/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('network is not okay')
                }
                response.json()
            })
            .then(quote => {
                console.log(quote)
                quote.textContent = quote.quote;
                character.textContent = `~ ${quote.character}`;
                anime.textContent = quote.title;
            })
            .catch(error => {
                console.log('Error', error)
            })

        e.target.textContent = randomBtnWord();
    })

})