const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(" form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// for (let code in countryList) {
//     console.log(code, countryList[code]);
// }

for (let select of dropdowns) {
  for (currcode in countryList) {
    let newOption = document.createElement("option"); //option element created
    newOption.innerText = currcode; //text of the option
    newOption.value = currcode; //value of the option
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected"; //default selected option
    } else if (select.name === "to" && currcode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption); //append the option to the select element
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target); // update the flag when the select element changes
  });
}

const updateFlag = (element) => {
  let currCode = element.value; // get the selected currency code 
  let countryCode = countryList[currCode]; //get the country code from the countryList object
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // create the new image source URL
  let img = element.parentElement.querySelector("img"); // get the image element
  img.src = newSrc; // set the new image source
};

btn.addEventListener("click", async (evt) => { //
  evt.preventDefault();
  let amount = document.querySelector(".amount input"); // get the amount input element
  let amtVal = amount.value; // get the value in at varibale
  if (amtVal === "" || amtVal <= 0) {
    alert("Please enter a valid amount");
    amtVal = 1;
    amount.value = "1";
  }
  console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;
  let response = await fetch(URL); // fetch the data from the API
  let data = await response.json(); // convert the response to JSON
  console.log(data);
  let from = fromCurr.value.toLowerCase(); 
  let to = toCurr.value.toLowerCase();
  console.log(from, to);
  let rate = data[from][to]; //get the exchange rate from the data
  let finalAmount = amtVal * rate;
  console.log(finalAmount);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`; // display the result
});
