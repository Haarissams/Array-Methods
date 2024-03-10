// Array Methods
//Solving problems using array functions on rest countries data 

// a . Get all the countries from Asia continent /region using Filter function

const countries = [
    { name: "Afghanistan", continent: "Asia" },
    { name: "India", continent: "Asia" },
    { name: "Japan", continent: "Asia" },
    { name: "Brazil", continent: "South America" },
    { name: "Australia", continent: "Oceania" }
];
const asianCountries = countries.filter(country => country.continent === "Asia");
console.log(asianCountries);



// 2 . Get all the countries with a population of less than 2 lakhs using Filter function.
const country = [
    { name: "Afghanistan", population: 38928000 },
    { name: "India", population: 1380004385 },
    { name: "Japan", population: 180000 },
    { name: "Brazil", population: 150000  },
    // Add more country objects here
];
const countriesWithLowPopulation = country.filter(country => country.population < 200000);
console.log(countriesWithLowPopulation);


// 3 . Print the following details name, capital, flag, using forEach function
const countrie = [
    { name: "Afghanistan", capital: "Kabul", flag: "AF" },
    { name: "India", capital: "New Delhi", flag: "IND" },
    { name: "Japan", capital: "Tokyo", flag: "JPN" },
    { name: "Brazil", capital: "Brasília", flag: "BRZ" },
];
countrie.forEach(country => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
});


//
// 4 . Print the total population of countries using reduce function
const countri = [
    { name: "Afghanistan", population: 38928000 },
    { name: "India", population: 1380004385 },
    { name: "Japan", population: 126476461 },
    { name: "Brazil", population: 213993437 },
    // Add more country objects here
];

// Using reduce function to calculate total population
const totalPopulation = countri.reduce((total, country) => total + country.population, 0);

console.log("Total population of countries:", totalPopulation);


//  5 . Print the country that uses US dollars as currency.

const countriess = [
    { name: "Afghanistan", currency: "Afghani" },
    { name: "United States", currency: "US Dollar" },
    { name: "Japan", currency: "Japanese Yen" },
    { name: "Brazil", currency: "Brazilian Real" },
];
const countryUsingUSD = countriess.find(country => country.currency === "US Dollar");

if (countryUsingUSD) {
    console.log("Country that uses US dollars as currency:", countryUsingUSD.name);
} else {
    console.log("No country uses US dollars as currency.");
}

