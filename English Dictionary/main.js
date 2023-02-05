const searchBar = document.getElementById("saerchedWord");
const ans = document.querySelector(".ans");
const para = document.querySelector(".wel");


searchBar.addEventListener("keyup", (e) => {

    if (e.key === "Enter") {
        getMeaningOfWord(searchBar.value);
    }
});

function getMeaningOfWord(word) {

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json()).then(data => {

            const audio = (data[0].phonetics[1].audio);
            const definition = data[0].meanings[0].definitions[0].definition;

            const card = `
                    <h3>Word Title : <span class="title">${word}</span></h3>
                    <p class="fullans">
                        <span class="meaning">Meaning : </span>${definition}
                    </p>
                    <audio src="${audio}" controls autoplay></audio>`;

            ans.innerHTML = card;

        }).catch(() => {

            ans.innerHTML = "";
            para.innerHTML = "This Word is Incorrect try other One plz ";

        });

}








