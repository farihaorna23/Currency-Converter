
//importing countryList from another file
import {countryList} from "./countries.js";
let fromDropdown = document.querySelector(".from-dropdown");
let toDropdown = document.querySelector(".to-dropdown");



//creating the dropdown options for the From and To dropdown
for(let currency in countryList){
    let opt = document.createElement('option')
    opt.textContent = currency
    fromDropdown.append(opt)
    toDropdown.append(opt)
}



console.log(fromDropdown)
console.log(toDropdown)
console.log(countryList)