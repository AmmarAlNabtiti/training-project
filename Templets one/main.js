
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



// Fetch data from the API

function fetchALLcountryDataFromAPI() {
  const main = document.querySelector("main");

  fetch("https://restcountries.com/v2/all")
    .then((response) => (response.json()))
    .then(data => data.forEach(element => {
      let carders = `
    <article  id="${element.name}">
      <figure>
        <img src="${element.flags.png}" alt="flag" />
        <figcaption>
          <h3>${element.name}</h3>
          <p>Population : <span>${element.population}</span></p>
          <p>Region: <span>${element.region}</span></p>
          <p>Capital:${element.capital}</p>
        </figcaption>
      </figure>
    </article>`;
      main.innerHTML += carders;


    })).then(() => {
      // add more info when you click on cards
      const allCards = document.querySelectorAll("main article");
      // console.log(allCards);
      allCards.forEach(element => {
        element.addEventListener("click", () => {
          console.log(1);
          console.log(window.location.href = `index1.html?name= + ${element.getAttribute("id")}`);
        });
      });

    });
}
fetchALLcountryDataFromAPI();



//implement a search function

function searchFunction() {
  const search = document.getElementById('search');

  search.addEventListener('input', e => {
    const keyword = e.target.value.toLowerCase();
    const main = document.querySelector("main");
    fetch(`https://restcountries.com/v2/name/${keyword}`)
      .then((response) => (response.json()))
      .then((data) => {
        let carders = `
            <article>
              <figure>
                <img src="${data[0].flags.png}" alt="flag" />
                <figcaption>
                  <h3>${data[0].name}</h3>
                  <p>Population : <span>${data[0].population}</span></p>
                  <p>Region: <span>${data[0].region}</span></p>
                  <p>Capital:${data[0].capital}</p>
                </figcaption>
              </figure>
            </article>`;
        main.innerHTML = carders;
      }).catch(() => {
        main.innerHTML = "";
        fetchALLcountryDataFromAPI();
        addMoreInfoToClickedCard();
      });
  });
}
searchFunction();

// Implement region Filter 

const regionFilter = document.querySelector('#Contries');

regionFilter.addEventListener('change', e => {
  const region = e.target.value;
  const main = document.querySelector("main");
  fetch("https://restcountries.com/v2/all")
    .then((response) => (response.json()))
    .then(data => {
      main.innerHTML = "";

      data.forEach(element => {
        if (element.region == region) {
          let carders = `
          <article id="${element.name}">
            <figure>
              <img src="${element.flags.png}" alt="flag" />
              <figcaption>
                <h3>${element.name}</h3>
                <p>Population : <span>${element.population}</span></p>
                <p>Region: <span>${element.region}</span></p>
                <p>Capital:${element.capital}</p>
              </figcaption>
            </figure>
          </article>`;
          main.innerHTML += carders;

          // //add more info when you click on cards

          // document.querySelector("#" + element.name).addEventListener("click", () => {
          //   // Open the new HTML page and pass the information to it
          //   window.location.href = "country-details.html?name=" + element.name;
          // });
        } else if (region == "ALL") {
          window.location.reload();
        }

      });
    });


});



