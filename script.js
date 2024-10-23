
//importing countryList from another file
import {countryList} from "./countries.js";
let fromDropdown = document.querySelector(".from-dropdown");
let toDropdown = document.querySelector(".to-dropdown");
let flag1img = document.querySelector(".flag1")
let flag2img = document.querySelector(".flag2")
//creating the dropdown options for the From and To dropdown from countryList object
for(let currency in countryList){
    let fromOption = document.createElement('option')
    fromOption.textContent = currency
    fromDropdown.append(fromOption)
    
    let toOption = document.createElement('option')
    toOption.textContent = currency
    toDropdown.append(toOption)
}


//event handler for from dropdown
const fromDropdownHandler = (e) => {
    //get the currency
    let currency = e.target.value;
    //get the corresponding country
    let country = countryList[currency]
    //make a get request to the flag api to get flag image to set the image src
    flag1img.src = `https://flagsapi.com/${country}/flat/64.png`
}



const toDropdownHandler = (e) => {
    //get the currency
    let currency = e.target.value;
    //get the corresponding country
    let country = countryList[currency]
    //make a get request to the flag api to get flag image to set the image src
    // flag2img.src = `https://flagsapi.com/${country}/flat/64.png`
}

//adding event listeners to the dropdown
fromDropdown.addEventListener('change', fromDropdownHandler)
toDropdown.addEventListener('change',toDropdownHandler)