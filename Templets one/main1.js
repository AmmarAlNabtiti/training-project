
//add a dark mode to page
const darkIcon = document.querySelector("header .container .dark-mode i");
const header = document.querySelector("header");
const body = document.querySelector("body");

function toggleDarkMode() {
    header.classList.toggle("dark-header");

    (header.classList.contains("dark-header")) ? document.querySelector("label").innerHTML = "Light Mode" : document.querySelector("label").innerHTML = "Dark Mode";

    body.classList.toggle("darker");
}
darkIcon.addEventListener("click", toggleDarkMode);




//add more info to clicked card
function addMoreInfoToClickedCard() {

    //declaration for needed variables
    const urlParams = new URLSearchParams(window.location.search);
    const cardName = urlParams.get("name");
    let url = `https://restcountries.com/v3.1/name/`;
    const main = document.querySelector("main");
    url += cardName.replace(/ /g, '');


    // change the title depend on the clicked country
    document.title = cardName;

    fetch(url)
        .then((response) => (response.json()))
        .then(data => {
            console.log(data);
            let carders = `
        <article>
          <figure>
            <img src="${data[0].flags.png}" alt="flag" />
            <figcaption>
              <h3>${cardName}</h3>
              <p>Timezones : <span>${data[0].timezones}</span></p>
              <p>Capital : ${data[0].capital}</p>
              <p>Independent : ${data[0].independent}</p>
              <p>unMember : ${data[0].unMember}</p>
              <p>FIFA: ${data[0].fifa}</p>
              <p>Status : ${data[0].status}</p>
              <p>continents : ${data[0].continents}</p>
              <p>startOfWeek : ${data[0].startOfWeek}</p>
              <p>IDD: ${data[0].idd.root}</p>
              <p>Arabic name : ${data[0].translations.ara.common}</p>
              
              
              </figcaption>
          </figure>
        </article>
        `;
            main.innerHTML = carders;
            //change the favicon to website depend on the flag of clicked country 

            const favicon = document.getElementById("favicon");
            favicon.href = data[0].flags.png;
        });
}
addMoreInfoToClickedCard();



//add functionality to btn 

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {

    window.location.href = "index.html";

});