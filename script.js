//importing countryList from another file
import {countryList} from "./countries.js";
let fromDropdown = document.querySelector(".from-dropdown");
let toDropdown = document.querySelector(".to-dropdown");
let flag1img = document.querySelector(".flag1")
let flag2img = document.querySelector(".flag2")

//variables
let currency1 = ""
let currency2  = ""
//creating the dropdown options for the From and To dropdown from countryList object
for(let currency in countryList){
    let fromOption = document.createElement('option')
    fromOption.textContent = currency
    fromDropdown.append(fromOption)
    
    let toOption = document.createElement('option')
    toOption.textContent = currency
    toDropdown.append(toOption)
}

//will fetch all the countries's currency and their rate with base being the currency that was passed
const fetchCurrency = async(currency) => {
    //let response = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
    let data = await response.json()
    return data
}

const messageBoard = async() => {
    if (currency1 && currency2){
       let data = await fetchCurrency(currency1)
       console.log(data)
    }
}

//event handler for from dropdown
const fromDropdownHandler = (e) => {
    //get the currency
    currency1 = e.target.value;
    //get the corresponding country
    let country = countryList[currency1]
    //make a get request to the flag api to get flag image to set the image src
    flag1img.src = `https://flagsapi.com/${country}/flat/64.png`
}


const toDropdownHandler = (e) => {
    //get the currency
    currency2  = e.target.value;
    //get the corresponding country
    let country = countryList[currency2]
    //make a get request to the flag api to get flag image to set the image src
    flag2img.src = `https://flagsapi.com/${country}/flat/64.png`

}


//adding event listeners to the dropdown
fromDropdown.addEventListener('change', fromDropdownHandler)
fromDropdown.addEventListener('change',messageBoard)
toDropdown.addEventListener('change',toDropdownHandler)
toDropdown.addEventListener('change',messageBoard)