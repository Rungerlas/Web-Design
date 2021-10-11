const data = {
    countries: [],
    neighbors: [],
};

const createCard= (country) =>{
    const div =document.createElement('div');
    div.className= 'country';
    div.id = country.alpha3Code;
    div.innerHTML =`
        <img class="country__img" src="${country.flags[0]}" />
        <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${country.population}</p>
        <p class="country__row"><span>🗣️</span>${country.language[0].name}</p>
        <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
        </div>`;
    return div;
};

const renderView=()=>{
    const countryContainer = document.querySelector('.countries');
    const neighborsContainer = document.querySelector('.neighbors');
    const neighborsTitle = document.querySelector('.neighbors-title');
    countryContainer.innerHTML ='';
    neighborsContainer.innerHTML ='';

    data.countries.forEach((country) =>{
        const card = createCard(country);
        countryContainer.append(card);

    });
    if (data.neighbors.length >0) {
        neighborsTitle.className = 'neighbors-title show';

    } else {
        neighborsTitle.className = 'neighbors-title';
    }
    data.neighbors.forEach((country) =>{
        const card = createCard(country);
        neighborsContainer.append(card);
    });
};

const loadCountries=(countryName) =>{
    return fetch(`https://restcountries.com/v2/name/${countryName}`).then((resp)=>{
        return resp.json();
    }).then((countryData)=>{
        data.countries=countryData;
    });
};

const loadNeighbours = (targetId)=>{
    const targetCountry = data.countries.find((country)=>{
        return country.alpha3Code === targetId;
    });
    if (!targetCountry) {
        return;

    }
    if (!targetCountry.borders || targetCountry.borders.length ===0) {
        data.neighbors = [];
        renderView();
        return;
    }
    const borderCodeStr = targetCountry.borders.join(',');

    fetch(`https://restcountries.com/v2/alpha?codes=${borderCodeStr}`).then((resp) =>{
        return resp.json();
    }).then((respData) =>{
        const vaildCountries = respData.filter((country)=>{
            return country;
        });
      data.neighbors = vaildCountries;
      renderView();  
    });
};






const loadEvents =() =>{
    const searchButton = document.querySelector('.search');
    const countryContainer = document.querySelector('.countries');
    const input = document.querySelector('#input');
    searchButton.addEventListener('click', ()=>{
        const value = input.value;
        loadCountries(value).then(()=>{
            renderView();
        });
        input.value ='';
    });

    countryContainer.addEventListener('click', (e)=>{

        const targetId = e.target.closest('.country').id;
        loadNeighbours(targetId);
    });
};

loadEvents();