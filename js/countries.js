const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    // console.log(countries[0].currencies?.UYU?.name);
    /* countries.forEach( country =>{
        // console.log(country);
    }) */
    const countriesHTML = countries.map( country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}
// original
/* const getCountryHTML = country => {
    return `
        <div class = "country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="">
        </div>
    `
} */
// option 1 
/* const getCountryHTML = country => {
    const{name, flags} = country;
    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <img src="${flags.png}" alt="">
        </div>
    `
} */
// option 2
const getCountryHTML = ({name, flags,area,continents,region}) => {
    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <p>Area : ${area}</p>
            <p>Continents : ${continents}</p>
            <p>Region : ${region}</p>
            <img src="${flags.png}" alt="">
        </div>
    `
}
loadCountries();