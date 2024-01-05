//AUTH FUNCTION, needs to be done so that there is an access token
const auth = async () => {
    const request = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`
    })

    const response = await request.json()

    return response.access_token
}

//api details
const BASE_URL = 'https://test.api.amadeus.com/'
const API_KEY = 'XPAJyEL1sm49Mqq2WcoXAly5EQIdoT1O'
const API_SECRET = 'bvY8sHY7bjGh0zWi'


const flightsInfo = async () => {
    //used to authorize each request
    const ACCESS_TOKEN = await auth()

    const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=SOF&destinationLocationCode=MAD&departureDate=2023-11-21&adults=1&nonStop=false&max=250`, {
        headers: {
            'Authorization' : `Bearer ${ACCESS_TOKEN}`
        }
    })
    const response = await request.json()

    console.log(response)
}
//flightsInfo()

//recommended travel location (need to play around with it really fun api)
const recommendedLocations = async () => {
    
    const ACCESS_TOKEN = await auth()
    
    const request = await fetch(`${BASE_URL}v1/reference-data/recommended-locations?cityCodes=PAR&travelerCountryCode=ES`, {
        headers: {
            'Authorization' : `Bearer ${ACCESS_TOKEN}`
        }
    })
    const response = await request.json()

    console.log(response)
}
//recommendedLocations()

//flights from airport leaving on time prediction
const onTimePrediction = async () => {

    const ACCESS_TOKEN = await auth()

    const request = await fetch(`${BASE_URL}v1/airport/predictions/on-time?airportCode=SOF&date=2023-11-21`, {
        headers: {
            'Authorization' : `Bearer ${ACCESS_TOKEN}`
        }
    })

    const response = await request.json()

    console.log(response)
}
//onTimePrediction()




//run an event function to look up airports
/*
const inputAirportSearch = document.querySelector(".airport-search")
inputAirportSearch.addEventListener("keyup", async ()=>{
    if(inputAirportSearch.value.trim()){
        let airportData = await airportsLookup(inputAirportSearch.value.trim())

        console.log(airportData)
    }
})
*/

const dateFormat = new Intl.DateTimeFormat()
let timeZoneName = dateFormat.resolvedOptions().timeZone.split("/")[1]


//header section to be made 

//start with the flights section
//create the radio buttons, class selection, persons on board and wheather the flight is direct ot now

//then create the airport search (using the user's nearest airport to begin with), the destination
//a swap button and calendar


//below that have a section with popular flights, again user's closest airport


//the dropdown for the flight class
const dropdownEl = document.querySelector(".dropdown")
const flightsEl = document.querySelector(".flight-class")
let dropBool = false

const dropdownEnable = () => {
    dropBool = true
    if(dropdownEl.innerHTML.length > 0){
        dropdownEl.innerHTML = ``
        return
    }

    dropdownEl.innerHTML = `
    <span>Economy</span>
    <span>Premium Economy</span>
    <span>Business</span>
    <span>First-class</span>
    `
    //the hover on the elements of the drop down
    //user changing the class of the flight
    const currentClassEl = document.querySelector(".current-chosen")
    const allFlightClasses = document.querySelectorAll(".dropdown span")
    allFlightClasses.forEach((span) => {
      span.addEventListener("mouseover", (e)=>{
        e.stopImmediatePropagation()
        allFlightClasses.forEach((span) =>{
            span.classList.remove("hovered")
        })
        
        span.classList.add("hovered")
      })
      span.addEventListener("click", ()=>{
        currentClassEl.textContent = span.textContent
      })  

      if(span.textContent === currentClassEl.textContent){
        span.classList.add("hovered")
      }
    })
}
const dropdownDisable = () =>{
    dropBool = false 
    window.removeEventListener("click", dropdownDisable)
    dropdownEl.innerHTML = ``
}

flightsEl.addEventListener("click", (e) =>{
    e.stopPropagation()
    dropdownEnable()
    
    if(passengersVisible){
        passengersVisible = false
        dropdownPassengers.classList.remove("show")
        dropdownPassengers.classList.add("hide")

        dropdownPassengers.addEventListener("animationend", ()=>{
            dropdownPassengers.classList.remove("hide")
        })
    }

    airportDepartureEl.style.display = "none"
    airportArrivalEl.style.display = "none"
    calendar.style.display = "none"

    airportArrivalInput.previousValue = false
    airportDepartureInput.previousValue = false

    window.addEventListener("click", dropdownDisable)
})


//direct flights touch up
const flightsDirectSVG = () => {
    checkBoxEl.classList.toggle("checked")

    if(checkBoxEl.classList.contains("checked")){
        DIRECT_FLIGHTS = true
        checkBoxEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
    }else {
        DIRECT_FLIGHTS = false
        checkBoxEl.innerHTML = ``
    }
}
const checkboxLabel = document.querySelector(".check-wrap span")
const checkBoxEl = document.querySelector(".checkbox")
let DIRECT_FLIGHTS = false


checkBoxEl.addEventListener("click", flightsDirectSVG)
checkboxLabel.addEventListener("click", flightsDirectSVG)

//passengers on flight dropdown and functionality
let passengersVisible = false
const totalPassengers = document.querySelector(".passengers") //clickable element
const dropdownPassengers = document.querySelector(".dropdown-passengers") //the dropdown el
totalPassengers.addEventListener("click", (e)=>{
    e.stopPropagation()

    if(dropBool){
        dropdownEl.innerHTML = ``
        dropBool = false
    }

    airportDepartureEl.style.display = "none"
    airportArrivalEl.style.display = "none"
    calendar.style.display = "none"

    airportArrivalInput.previousValue = false
    airportDepartureInput.previousValue = false

    if(passengersVisible){
        passengersVisible = false
        dropdownPassengers.classList.remove("show")
        dropdownPassengers.classList.add("hide")

        dropdownPassengers.addEventListener("animationend", ()=>{
            dropdownPassengers.classList.remove("hide")
        })
    }else{
        passengersVisible = true 
        dropdownPassengers.classList.add("show")
    }

    window.addEventListener("click", (e)=>{
        if(passengersVisible){
            dropdownPassengers.classList.remove("show")
            dropdownPassengers.classList.add("hide")
    
            dropdownPassengers.addEventListener("animationend", ()=>{
                dropdownPassengers.classList.remove("hide")
            })
            passengersVisible = false
        }
    })
})

dropdownPassengers.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
})


//dropdown passengers selection and deselection 
const adultsMinusEl = document.querySelector(".adults-minus")
const adultsPlusEl = document.querySelector(".adults-plus")
const adultsNumberEl = document.querySelector(".adults-number")

const childrenPlusEl = document.querySelector(".children-plus")
const childrenMinusEl = document.querySelector(".children-minus")
const childrenNumberEl = document.querySelector(".children-number")

const totalPassengersSpan = document.querySelector(".number-of-passengers")

let adultPassengers = 1
let childrenPassengers = 0

adultsPlusEl.addEventListener("click", ()=>{
    adultPassengers ++
    if(adultPassengers + childrenPassengers > 8){
        adultsPlusEl.classList.add("disabled")
        childrenPlusEl.classList.add("disabled")
        if(adultPassengers + childrenPassengers > 9){
            adultPassengers--
        }
    }

    if(adultPassengers != 1){
        adultsMinusEl.classList.remove("disabled")
    }
    
    adultsNumberEl.textContent = adultPassengers
    if(childrenPassengers > 0){
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travellers`
    }else{
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults`
    }
})
adultsMinusEl.addEventListener("click", ()=>{
    adultPassengers--
    if(adultPassengers < 2){
        adultPassengers = 1
        adultsMinusEl.classList.add("disabled")
    }
    if(adultPassengers != 1 || adultPassengers + childrenPassengers < 9){
        childrenPlusEl.classList.remove("disabled")
        adultsPlusEl.classList.remove("disabled")
    }

    adultsNumberEl.textContent = adultPassengers
    
    if(childrenPassengers > 0){
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travellers`
    }else{
        if(adultPassengers == 1){
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adult`
        }else{
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults`
        }
    }
})
childrenPlusEl.addEventListener("click", ()=>{
    childrenPassengers++
    if(childrenPassengers + adultPassengers > 8){
        adultsPlusEl.classList.add("disabled")
        childrenPlusEl.classList.add("disabled")

        if(adultPassengers + childrenPassengers > 9){
            childrenPassengers--
        }
    }

    if(childrenPassengers > 0){
        childrenMinusEl.classList.remove("disabled")
    }
    
    childrenNumberEl.textContent = childrenPassengers
    if(childrenPassengers > 0){
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travellers` 
    }else{
        if(adultPassengers == 1){
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adult` 
        }else{
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults` 
        }
    } 
    
    const childAgeWrapper = document.querySelector(".children-age") 
    if(childAgeWrapper.children.length < childrenPassengers){
        createElementChildAge()
    }
})
childrenMinusEl.addEventListener("click", ()=>{
    childrenPassengers--
    if(childrenPassengers < 1){
        childrenPassengers = 0
        childrenMinusEl.classList.add("disabled")
        if(childrenPassengers + adultPassengers < 9){
            childrenPlusEl.classList.remove("disabled")
            adultsPlusEl.classList.remove("disabled")
        }
    }else {
        adultsPlusEl.classList.remove("disabled")
        childrenPlusEl.classList.remove("disabled")
    }

    childrenNumberEl.textContent = childrenPassengers
    
    if(childrenPassengers > 0){
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travellers`
    }else{
        if(adultPassengers == 1){
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adult`
        }else{
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults`
        }
    }

    const childAgeWrapper = document.querySelector(".children-age")
    

    if(childAgeWrapper.children.length > 0){
        childAgeWrapper.children[childAgeWrapper.children.length - 1].remove()
    }
})



//the method of choosing the childs age of the flight
const createElementChildAge = () =>{
    const childAgeWrapper = document.querySelector(".children-age")

    const newElementChildAge = document.createElement("div")
    newElementChildAge.classList.add("each-child")

    childAgeWrapper.appendChild(newElementChildAge)

    const last2Letters = () =>{
        if(childAgeWrapper.children.length == 1){
            return "st"
        }else if(childAgeWrapper.children.length == 2){
            return "nd"
        }else if(childAgeWrapper.children.length == 3){
            return "rd"
        }else{
            return "th"
        }
    }

    newElementChildAge.innerHTML = `
    <span>${childAgeWrapper.children.length}${last2Letters()} child's age</span>
    <select id="child-age-selection">
        <option value="">Select age at time of flying</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
    </select>
    <span class="little-text">Select the age this child will be on the date of your final flight</span>
    `
    const allAgeSelect = document.querySelectorAll("#child-age-selection")
    allAgeSelect.forEach((select) =>{
        select.addEventListener("change", (e)=>{
            if(select.value !== "" && select.options[0].value === ""){
                select.options[0].remove()
            }
        })
    })
}


//swapping airports
//FUNCTIONALITY OF SWAPPING AIRPORTS
const swapAirports = document.querySelector(".swap-airports")
const swapAirportsSVG = document.querySelector(".swap-airports svg")

swapAirports.addEventListener("click", ()=>{
    swapAirportsSVG.classList.toggle("rotate")

    if(FROM_AIRPORTS.length || TO_AIRPORTS.length){
        [FROM_AIRPORTS, TO_AIRPORTS] = [TO_AIRPORTS, FROM_AIRPORTS]

        

        if(!FROM_AIRPORTS.length){
            whereFromSpanAirports.textContent = "Where from?"
        }else{
            const separator = () =>{
                if(whereFromSpanAirports.children.length === 1){
                    return ""
                }else{
                    return "・"
                }
    
            }
            whereFromSpanAirports.innerHTML = ``
            selectedAirports.innerHTML = ``

            for(let i = 0; i < FROM_AIRPORTS.length; i++){
                if(whereFromSpanAirports.children.length === 0){
                    whereFromSpanAirports.innerHTML = ``
                }
                const newAirport = document.createElement("span")
                newAirport.classList.add("airport-black")
                whereFromSpanAirports.appendChild(newAirport)

                newAirport.innerHTML = `${separator()} <span class="bold">${FROM_AIRPORTS[i].iataCode}</span> ${FROM_AIRPORTS[i].name} `
            }
        }

        if(!TO_AIRPORTS.length){
            whereToSpanAirports.textContent = "Where to?"
        }else{
            const separator = () =>{
                if(whereToSpanAirports.children.length === 1){
                    return ""
                }else{
                    return "・"
                }
    
            }

            whereToSpanAirports.innerHTML = ``
            selectedAirportsArrival.innerHTML = ``

            for(let i = 0; i < TO_AIRPORTS.length; i++){
                if(whereToSpanAirports.children.length === 0){
                    whereToSpanAirports.innerHTML = ``
                }
                const newAirport = document.createElement("span")
                newAirport.classList.add("airport-black")
                whereToSpanAirports.appendChild(newAirport)

                newAirport.innerHTML = `${separator()} <span class="bold">${TO_AIRPORTS[i].iataCode}</span> ${TO_AIRPORTS[i].name} `
            }
        }
    }
})


//making the functionality for the airport search
//function to look up airports
const airportsLookup = async (input) => {
    const ACCESS_TOKEN = await auth()

    const request = await fetch(`${BASE_URL}v1/reference-data/locations?subType=AIRPORT&keyword=${input}&page[limit]=20`, {
        headers: {
            'Authorization' : `Bearer ${ACCESS_TOKEN}`
        }
    })

    const response = await request.json()

    return response
}
//airportsLookup()

//departure airport search and select
//DEPARTURE SEGMENT FINISHED
const whereFromEl = document.querySelector(".flying-airport")
const airportDepartureEl = document.querySelector(".where-from-dropdown")
const listInputEl = document.querySelector(".list-input")

const airportsElementWrap = document.querySelector(".airport-results-wrap")

//fix input focus bug
airportDepartureEl.addEventListener("click", (e)=>{ 
    e.stopPropagation()
    listInputEl.classList.remove("focus")
})


whereFromEl.addEventListener("click", (e)=>{
    e.stopPropagation()
    airportDepartureEl.style.display = "block"
    listInputEl.classList.add("focus")
    
    airportDepartureInput.focus()
    airportDepartureInput.value = ""

    calendar.style.display = "none"

    airportsElementWrap.innerHTML = `
    <span>Select multiple airports at once  and compare flights</span>
    `
    if(airportArrivalEl.style.display == "block"){
        airportArrivalEl.style.display = "none"
        airportArrivalInput.previousValue = false
    }

    if(dropBool){
        dropdownEl.innerHTML = ``
        dropBool = false
    }

    if(passengersVisible){
        passengersVisible = false
        dropdownPassengers.classList.remove("show")
        dropdownPassengers.classList.add("hide")

        dropdownPassengers.addEventListener("animationend", ()=>{
            dropdownPassengers.classList.remove("hide")
        })
    }

    window.addEventListener("click", ()=>{
        airportDepartureEl.style.display = "none"
        airportDepartureEl.classList.remove("focus")
        airportDepartureInput.previousValue = false
    })

    if(!FROM_AIRPORTS.length){
        selectedAirports.innerHTML = ``
        selectedAirports.style.display = "none"
    }else {
        const checkForDupes = (airportName) => {
            if(selectedAirports.children.length === 0){
                return false
            }else{
                let duped = false 
                for(let i = 0; i<selectedAirports.children.length; i++){
                    if(selectedAirports.children[i].children[0].children[0].textContent === airportName){
                        duped = true
                        break
                    }
                }
                return duped
            }
        }

        for(let i = 0; i < FROM_AIRPORTS.length; i++){
            if(checkForDupes(FROM_AIRPORTS[i].iataCode)){
                continue
            }

            const newAirportForSelected = document.createElement("div")
            newAirportForSelected.classList.add("each-selected-airport")
            selectedAirports.appendChild(newAirportForSelected)

            newAirportForSelected.innerHTML = `
            <span> <span class="bold">${FROM_AIRPORTS[i].iataCode}</span> ${FROM_AIRPORTS[i].address.cityName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            `
            selectedAirports.style.display = "flex"

            
            //user clicks on a selected airport will remove it
            newAirportForSelected.addEventListener("click", (e)=>{
                const indexToRemove = Array.from(selectedAirports.children).indexOf(newAirportForSelected)

                if(airportsElementWrap.children[0].tagName !== "SPAN"){
                    for(let i = 0; i < airportsElementWrap.children.length; i++){
                        if(e.target.children[0].textContent === airportsElementWrap.children[i].children[0].children[1].children[0].textContent){
                            airportsElementWrap.children[i].children[0].children[2].innerHTML = ``
                            airportsElementWrap.children[i].children[0].children[2].classList.remove("checked")
                        }
                    }
                }

                whereFromSpanAirports.children[indexToRemove].remove()
                FROM_AIRPORTS.splice(indexToRemove, 1)
                newAirportForSelected.remove()

                if(whereFromSpanAirports.children.length > 0){
                    whereFromSpanAirports.children[0].innerHTML = whereFromSpanAirports.children[0].innerHTML.replace("・", "")
                }
                
                if(whereFromSpanAirports.children.length === 0){
                    whereFromSpanAirports.textContent = "Where from?"
                }

                if(selectedAirports.children.length === 0){
                    selectedAirports.style.display = "none"
                }

                
            })
            
        }
    }
})
//airports array 
let FROM_AIRPORTS = []
const airportDepartureInput = document.querySelector(".flying-airport input")
//airports span element
const whereFromSpanAirports = document.querySelector(".where-from")
// the selected airports
const selectedAirports = document.querySelector(".selected-airports")

listInputEl.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    airportDepartureInput.focus()
    listInputEl.classList.add("focus")
})

airportDepartureInput.addEventListener("keyup", async (e)=>{
    let inputValue = airportDepartureInput.value.trim() 

    if(inputValue.length > 1){
        let airportData = await airportsLookup(inputValue)

        //console.log(airportData.data[0])

        if(airportData.data.length){
            airportsElementWrap.innerHTML = ``

            //checks if user selected it from the checkbox
            const checkIfSelected = (airportName) =>{
                    
                if(FROM_AIRPORTS.length === 0){
                    return `<div class="check-airport"></div>`
                }

                for(let j = 0; j < FROM_AIRPORTS.length; j++){
                    if(FROM_AIRPORTS[j].iataCode === airportName){
                        return `<div class="check-airport checked"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>`
                    }
                }

                return `<div class="check-airport"></div>`
            }

            for(let i = 0; i < airportData.data.length; i++){
                const airport = document.createElement("div")
                airportsElementWrap.appendChild(airport)
                airport.classList.add("each-airport")

                

                airport.innerHTML = `
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3L497.8 278.5c8.9 5.9 14.2 15.9 14.2 26.6v56.7c0 10.9-10.7 18.6-21.1 15.2L320 320v80l57.6 43.2c4 3 6.4 7.8 6.4 12.8v42c0 7.8-6.3 14-14 14c-1.3 0-2.6-.2-3.9-.5L256 480 145.9 511.5c-1.3 .4-2.6 .5-3.9 .5c-7.8 0-14-6.3-14-14V456c0-5 2.4-9.8 6.4-12.8L192 400V320L21.1 377C10.7 380.4 0 372.7 0 361.8V305.1c0-10.7 5.3-20.7 14.2-26.6L192 160V93.7z"/></svg>
                    <span> <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].name}</span>
                    ${checkIfSelected(airportData.data[i].iataCode)}
                </div>
                <div>
                    <span>${airportData.data[i].address.cityName}, ${airportData.data[i].address.countryName}</span>
                </div>
                `

                airport.addEventListener("click", ()=>{
                    airportDepartureEl.style.display = "none"
                    airportDepartureInput.previousValue = false

                    //add a checker for duplicates
                    const checkForDupes = (airportName) => {
                        if(FROM_AIRPORTS.length === 0){
                            return false
                        }else{
                            let duped = false 
                            for(let i = 0; i<FROM_AIRPORTS.length; i++){
                                if(FROM_AIRPORTS[i].iataCode === airportName){
                                    duped = true
                                    break
                                }
                            }
                            return duped
                        }
                    }

                    if(!checkForDupes(airportData.data[i].iataCode)){
                        FROM_AIRPORTS.push(airportData.data[i])

                        //wheather or not to have a separator at the end or not
                        const separator = () =>{
                            if(whereFromSpanAirports.children.length === 1){
                                return ""
                            }else{
                                return "・"
                            }

                        }

                        //changing the text for where from airports
                        if(whereFromSpanAirports.children.length === 0){
                            whereFromSpanAirports.innerHTML = ``
                        }
                        const newAirport = document.createElement("span")
                        newAirport.classList.add("airport-black")
                        whereFromSpanAirports.appendChild(newAirport)

                        newAirport.innerHTML = `${separator()} <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].name} `
                        
                        
                        //creating a new element in the other div
                        const newAirportForSelected = document.createElement("div")
                        newAirportForSelected.classList.add("each-selected-airport")
                        selectedAirports.appendChild(newAirportForSelected)

                        newAirportForSelected.innerHTML = `
                        <span> <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].address.cityName}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        `
                        selectedAirports.style.display = "flex"

                        //user clicks on a selected airport will remove it
                        newAirportForSelected.addEventListener("click", (e)=>{
                            const indexToRemove = Array.from(selectedAirports.children).indexOf(newAirportForSelected)

                            if(airportsElementWrap.children[0].tagName !== "SPAN"){
                                for(let i = 0; i < airportsElementWrap.children.length; i++){
                                    if(e.target.children[0].textContent === airportsElementWrap.children[i].children[0].children[1].children[0].textContent){
                                        airportsElementWrap.children[i].children[0].children[2].innerHTML = ``
                                        airportsElementWrap.children[i].children[0].children[2].classList.remove("checked")
                                    }
                                }
                            }

                            whereFromSpanAirports.children[indexToRemove].remove()

                            newAirport.remove()
                            FROM_AIRPORTS.splice(indexToRemove, 1)
                            newAirportForSelected.remove()

                            if(whereFromSpanAirports.children.length > 0){
                                whereFromSpanAirports.children[0].innerHTML = whereFromSpanAirports.children[0].innerHTML.replace("・", "")
                            }
                            
                            if(whereFromSpanAirports.children.length === 0){
                                whereFromSpanAirports.textContent = "Where from?"
                            }

                            if(selectedAirports.children.length === 0){
                                selectedAirports.style.display = "none"
                            }

                            
                        })
                    }
                })
            }

            //logic behind selecting and deselecting airports
            const airportCheck = document.querySelectorAll(".check-airport")
            airportCheck.forEach((checkbox, idx)=>{
                checkbox.addEventListener("click", (e)=>{
                    e.stopPropagation()

                    checkbox.classList.toggle("checked")

                    if(checkbox.classList.contains("checked")){
                        checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`

                        //adding and removing elements when checkbox clicked
                        FROM_AIRPORTS.push(airportData.data[idx])

                        const separator = () =>{
                            if(whereFromSpanAirports.children.length === 1){
                                return ""
                            }else{
                                return "・"
                            }

                        }

                        //changing the text for where from airports
                        if(whereFromSpanAirports.children.length === 0){
                            whereFromSpanAirports.innerHTML = ``
                        }
                        const newAirport = document.createElement("span")
                        newAirport.classList.add("airport-black")
                        whereFromSpanAirports.appendChild(newAirport)

                        newAirport.innerHTML = `${separator()} <span class="bold">${airportData.data[idx].iataCode}</span> ${airportData.data[idx].name} `
                        
                        
                        //creating a new element in the other div
                        const newAirportForSelected = document.createElement("div")
                        newAirportForSelected.classList.add("each-selected-airport")
                        selectedAirports.appendChild(newAirportForSelected)

                        newAirportForSelected.innerHTML = `
                        <span> <span class="bold">${airportData.data[idx].iataCode}</span> ${airportData.data[idx].address.cityName}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        `
                        selectedAirports.style.display = "flex"

                        airportDepartureInput.value = ""
                        listInputEl.classList.remove("focus")
                        airportDepartureInput.previousValue = false

                        newAirportForSelected.addEventListener("click", (e)=>{
                            const indexToRemove = Array.from(selectedAirports.children).indexOf(newAirportForSelected)
                            
                            if(airportsElementWrap.children[0].tagName !== "SPAN"){
                                for(let i = 0; i < airportsElementWrap.children.length; i++){
                                    if(e.target.children[0].textContent === airportsElementWrap.children[i].children[0].children[1].children[0].textContent){
                                        airportsElementWrap.children[i].children[0].children[2].innerHTML = ``
                                        airportsElementWrap.children[i].children[0].children[2].classList.remove("checked")
                                    }
                                }
                            }

                            whereFromSpanAirports.children[indexToRemove].remove()

                            newAirport.remove()
                            FROM_AIRPORTS.splice(indexToRemove, 1)
                            newAirportForSelected.remove()

                            if(whereFromSpanAirports.children.length > 0){
                                whereFromSpanAirports.children[0].innerHTML = whereFromSpanAirports.children[0].innerHTML.replace("・", "")
                            }
                            
                            if(whereFromSpanAirports.children.length === 0){
                                whereFromSpanAirports.textContent = "Where from?"
                            }

                            if(selectedAirports.children.length === 0){
                                selectedAirports.style.display = "none"
                            }
                        })
                    }else{
                        checkbox.innerHTML = ``

                        //for(let i = 0; i < FROM_AIRPORTS.length; i++){}
                            
                        
                        //let indexToRemove = FROM_AIRPORTS.indexOf(airportData.data[idx])
                        //FROM_AIRPORTS.splice(indexToRemove, 1)

                        for(let i = 0; i < FROM_AIRPORTS.length; i++){
                            if(FROM_AIRPORTS[i].iataCode === airportData.data[idx].iataCode){
                                FROM_AIRPORTS.splice(i, 1)
                                whereFromSpanAirports.children[i].remove() 
                                selectedAirports.children[i].remove()
                                break
                            }
                        }
                        
                        if(whereFromSpanAirports.children.length > 0){
                            whereFromSpanAirports.children[0].innerHTML = whereFromSpanAirports.children[0].innerHTML.replace("・", "")
                        }
                        
                        if(whereFromSpanAirports.children.length === 0){
                            whereFromSpanAirports.textContent = "Where from?"
                        }

                        if(selectedAirports.children.length === 0){
                            selectedAirports.style.display = "none"
                        }
                    }
                })
            })

        }else{
            airportsElementWrap.innerHTML = `
            <span>No results for this search, try something else.</span>
            `
        }

        //console.log(airportData.data[0].iataCode)
        //console.log(airportData.data[0].name)
        //console.log(airportData.data[0].address.cityName)
    }

    //deleting the last airport when the input has no length and backspace is pressed
    if(airportDepartureInput.value === "" && !airportDepartureInput.previousValue && e.key === "Backspace"){
        if(selectedAirports.children.length){
            
            for(let i = 0; i < airportsElementWrap.children.length; i++){
                if(airportsElementWrap.children[0].tagName === "SPAN"){
                    break
                }

                if(FROM_AIRPORTS[FROM_AIRPORTS.length - 1].iataCode === airportsElementWrap.children[i].children[0].children[1].children[0].textContent){
                    airportsElementWrap.children[i].children[0].children[2].classList.remove("checked")
                    airportsElementWrap.children[i].children[0].children[2].innerHTML = ``
                }
                
            }

            selectedAirports.children[selectedAirports.children.length - 1].remove()
            FROM_AIRPORTS.pop()
            whereFromSpanAirports.children[whereFromSpanAirports.children.length - 1].remove()

            if(selectedAirports.children.length === 0){
                selectedAirports.style.display = "none"
                whereFromSpanAirports.innerHTML = "Where from?"
            }
        }
    }
    airportDepartureInput.previousValue = airportDepartureInput.value
    
})
airportDepartureInput.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    listInputEl.classList.add("focus")
})


//WORKING
const whereToEl = document.querySelector(".destination-airports")
const airportArrivalEl = document.querySelector(".where-to-dropdown")
const listInputArrivalEl = document.querySelector(".list-input-arrival")

const airportsElementWrapArrival = document.querySelector(".airport-results-wrap-arrival")

const airportArrivalInput = document.querySelector(".destination-airports input")

airportArrivalEl.addEventListener("click", (e)=>{ 
    e.stopPropagation()
    listInputArrivalEl.classList.remove("focus")
})

whereToEl.addEventListener("click", (e)=>{
    e.stopPropagation()
    airportArrivalEl.style.display = "block"
    listInputArrivalEl.classList.add("focus")
    
    airportArrivalInput.focus()
    airportArrivalInput.value = ""

    airportsElementWrapArrival.innerHTML = `
    <span>Select multiple airports at once  and compare flights</span>
    `

    calendar.style.display = "none"

    if(dropBool){
        dropdownEl.innerHTML = ``
        dropBool = false
    }

    if(airportDepartureEl.style.display == "block"){
        airportDepartureEl.style.display = "none"
        airportDepartureInput.previousValue = false
    }

    if(passengersVisible){
        passengersVisible = false
        dropdownPassengers.classList.remove("show")
        dropdownPassengers.classList.add("hide")

        dropdownPassengers.addEventListener("animationend", ()=>{
            dropdownPassengers.classList.remove("hide")
        })
    }

    window.addEventListener("click", ()=>{
        airportArrivalEl.style.display = "none"
        airportArrivalEl.classList.remove("focus")
        airportArrivalInput.previousValue = false
    })

    if(!TO_AIRPORTS.length){
        selectedAirportsArrival.innerHTML = ``
        selectedAirportsArrival.style.display = "none"
    }else {
        const checkForDupes = (airportName) => {
            if(selectedAirportsArrival.children.length === 0){
                return false
            }else{
                let duped = false 
                for(let i = 0; i<selectedAirportsArrival.children.length; i++){
                    if(selectedAirportsArrival.children[i].children[0].children[0].textContent === airportName){
                        duped = true
                        break
                    }
                }
                return duped
            }
        }

        for(let i = 0; i < TO_AIRPORTS.length; i++){
            if(checkForDupes(TO_AIRPORTS[i].iataCode)){
                continue
            }

            const newAirportForSelected = document.createElement("div")
            newAirportForSelected.classList.add("each-selected-airport-arrival")
            selectedAirportsArrival.appendChild(newAirportForSelected)

            newAirportForSelected.innerHTML = `
            <span> <span class="bold">${TO_AIRPORTS[i].iataCode}</span> ${TO_AIRPORTS[i].address.cityName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            `
            selectedAirportsArrival.style.display = "flex"

            
            //user clicks on a selected airport will remove it
            newAirportForSelected.addEventListener("click", (e)=>{
                const indexToRemove = Array.from(selectedAirportsArrival.children).indexOf(newAirportForSelected)

                if(airportsElementWrapArrival.children[0].tagName !== "SPAN"){
                    for(let i = 0; i < airportsElementWrapArrival.children.length; i++){
                        if(e.target.children[0].textContent === airportsElementWrapArrival.children[i].children[0].children[1].children[0].textContent){
                            airportsElementWrapArrival.children[i].children[0].children[2].innerHTML = ``
                            airportsElementWrapArrival.children[i].children[0].children[2].classList.remove("checked")
                        }
                    }
                }

                whereToSpanAirports.children[indexToRemove].remove()
                TO_AIRPORTS.splice(indexToRemove, 1)
                newAirportForSelected.remove()

                if(whereToSpanAirports.children.length > 0){
                    whereToSpanAirports.children[0].innerHTML = whereToSpanAirports.children[0].innerHTML.replace("・", "")
                }
                
                if(whereToSpanAirports.children.length === 0){
                    whereToSpanAirports.textContent = "Where from?"
                }

                if(selectedAirportsArrival.children.length === 0){
                    selectedAirportsArrival.style.display = "none"
                }

                
            })
            
        }
    }
})

let TO_AIRPORTS = []
const whereToSpanAirports = document.querySelector(".where-to")
const selectedAirportsArrival = document.querySelector(".selected-airports-arrival")

listInputArrivalEl.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    airportArrivalInput.focus()
    listInputArrivalEl.classList.add("focus")
})
airportArrivalInput.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    listInputArrivalEl.classList.add("focus")
})

//BOTH SEGMENTS WORKING PROPERLY
airportArrivalInput.addEventListener("keyup", async (e)=>{
    let inputValue = airportArrivalInput.value.trim()

    //LAST SEGMENT TO FINISH
    if(inputValue.length > 1){
        let airportData = await airportsLookup(inputValue)

        if(airportData.data.length){
            airportsElementWrapArrival.innerHTML = ``

            const checkIfSelected = (airportName) =>{
                    
                if(TO_AIRPORTS.length === 0){
                    return `<div class="check-airport-arrival"></div>`
                }

                for(let j = 0; j < TO_AIRPORTS.length; j++){
                    if(TO_AIRPORTS[j].iataCode === airportName){
                        return `<div class="check-airport-arrival checked"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>`
                    }
                }

                return `<div class="check-airport-arrival"></div>`
            }

            for(let i = 0; i < airportData.data.length; i++){
                const airport = document.createElement("div")
                airportsElementWrapArrival.appendChild(airport)
                airport.classList.add("each-airport-arrival")
               

                airport.innerHTML = `
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3L497.8 278.5c8.9 5.9 14.2 15.9 14.2 26.6v56.7c0 10.9-10.7 18.6-21.1 15.2L320 320v80l57.6 43.2c4 3 6.4 7.8 6.4 12.8v42c0 7.8-6.3 14-14 14c-1.3 0-2.6-.2-3.9-.5L256 480 145.9 511.5c-1.3 .4-2.6 .5-3.9 .5c-7.8 0-14-6.3-14-14V456c0-5 2.4-9.8 6.4-12.8L192 400V320L21.1 377C10.7 380.4 0 372.7 0 361.8V305.1c0-10.7 5.3-20.7 14.2-26.6L192 160V93.7z"/></svg>
                    <span> <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].name}</span>
                    ${checkIfSelected(airportData.data[i].iataCode)}
                </div>
                <div>
                    <span>${airportData.data[i].address.cityName}, ${airportData.data[i].address.countryName}</span>
                </div>
                `

                airport.addEventListener("click", ()=>{
                    airportArrivalEl.style.display = "none"
                    airportArrivalInput.previousValue = false

                    //add a checker for duplicates
                    const checkForDupes = (airportName) => {
                        if(TO_AIRPORTS.length === 0){
                            return false
                        }else{
                            let duped = false 
                            for(let i = 0; i<TO_AIRPORTS.length; i++){
                                if(TO_AIRPORTS[i].iataCode === airportName){
                                    duped = true
                                    break
                                }
                            }
                            return duped
                        }
                    }

                    if(!checkForDupes(airportData.data[i].iataCode)){
                        TO_AIRPORTS.push(airportData.data[i])

                        //wheather or not to have a separator at the end or not
                        const separator = () =>{
                            if(whereToSpanAirports.children.length === 1){
                                return ""
                            }else{
                                return "・"
                            }

                        }

                        //changing the text for where from airports
                        if(whereToSpanAirports.children.length === 0){
                            whereToSpanAirports.innerHTML = ``
                        }
                        const newAirport = document.createElement("span")
                        newAirport.classList.add("airport-black")
                        whereToSpanAirports.appendChild(newAirport)

                        newAirport.innerHTML = `${separator()} <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].name} `
                        
                        
                        //creating a new element in the other div
                        const newAirportForSelectedArrival = document.createElement("div")
                        newAirportForSelectedArrival.classList.add("each-selected-airport-arrival")
                        selectedAirportsArrival.appendChild(newAirportForSelectedArrival)

                        newAirportForSelectedArrival.innerHTML = `
                        <span> <span class="bold">${airportData.data[i].iataCode}</span> ${airportData.data[i].address.cityName}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        `
                        selectedAirportsArrival.style.display = "flex"

                        //user clicks on a selected airport will remove it
                        
                        newAirportForSelectedArrival.addEventListener("click", (e)=>{
                            const indexToRemove = Array.from(selectedAirportsArrival.children).indexOf(newAirportForSelectedArrival)
                            
                            if(airportsElementWrapArrival.children[0].tagName !== "SPAN"){
                                for(let i = 0; i < airportsElementWrapArrival.children.length; i++){
                                    console.log(airportsElementWrapArrival)

                                    if(e.target.children[0].textContent === airportsElementWrapArrival.children[i].children[0].children[1].children[0].textContent){
                                        airportsElementWrapArrival.children[i].children[0].children[2].innerHTML = ``
                                        airportsElementWrapArrival.children[i].children[0].children[2].classList.remove("checked")
                                    }
                                }
                            }

                            newAirport.remove()
                            TO_AIRPORTS.splice(indexToRemove, 1)
                            newAirportForSelectedArrival.remove()

                            if(whereToSpanAirports.children.length > 0){
                                whereToSpanAirports.children[0].innerHTML = whereToSpanAirports.children[0].innerHTML.replace("・", "")
                            }
                            
                            if(whereToSpanAirports.children.length === 0){
                                whereToSpanAirports.textContent = "Where to?"
                            }

                            if(selectedAirportsArrival.children.length === 0){
                                selectedAirportsArrival.style.display = "none"
                            }

                            
                        }) 
                        
                    }
                })
            }

            const airportCheck = document.querySelectorAll(".check-airport-arrival")
            airportCheck.forEach((checkbox, idx)=>{
                checkbox.addEventListener("click", (e)=>{
                    e.stopPropagation()

                    checkbox.classList.toggle("checked")

                    if(checkbox.classList.contains("checked")){
                        checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`

                        //adding and removing elements when checkbox clicked
                        TO_AIRPORTS.push(airportData.data[idx])

                        const separator = () =>{
                            if(whereToSpanAirports.children.length === 1){
                                return ""
                            }else{
                                return "・"
                            }

                        }

                        //changing the text for where from airports
                        if(whereToSpanAirports.children.length === 0){
                            whereToSpanAirports.innerHTML = ``
                        }
                        const newAirport = document.createElement("span")
                        newAirport.classList.add("airport-black")
                        whereToSpanAirports.appendChild(newAirport)

                        newAirport.innerHTML = `${separator()} <span class="bold">${airportData.data[idx].iataCode}</span> ${airportData.data[idx].name} `
                        
                        
                        //creating a new element in the other div
                        const newAirportForSelected = document.createElement("div")
                        newAirportForSelected.classList.add("each-selected-airport-arrival")
                        selectedAirportsArrival.appendChild(newAirportForSelected)

                        newAirportForSelected.innerHTML = `
                        <span> <span class="bold">${airportData.data[idx].iataCode}</span> ${airportData.data[idx].address.cityName}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        `
                        selectedAirportsArrival.style.display = "flex"

                        airportArrivalInput.value = ""
                        listInputArrivalEl.classList.remove("focus")
                        airportArrivalInput.previousValue = false

                        newAirportForSelected.addEventListener("click", (e)=>{
                            const indexToRemove = Array.from(selectedAirports.children).indexOf(newAirportForSelected)
                            
                            if(airportsElementWrapArrival.children[0].tagName !== "SPAN"){
                                for(let i = 0; i < airportsElementWrapArrival.children.length; i++){
                                    if(e.target.children[0].textContent === airportsElementWrapArrival.children[i].children[0].children[1].children[0].textContent){
                                        airportsElementWrapArrival.children[i].children[0].children[2].innerHTML = ``
                                        airportsElementWrapArrival.children[i].children[0].children[2].classList.remove("checked")
                                    }
                                }
                            }

                            newAirport.remove()
                            TO_AIRPORTS.splice(indexToRemove, 1)
                            newAirportForSelected.remove()

                            if(whereToSpanAirports.children.length > 0){
                                whereToSpanAirports.children[0].innerHTML = whereToSpanAirports.children[0].innerHTML.replace("・", "")
                            }
                            
                            if(whereToSpanAirports.children.length === 0){
                                whereToSpanAirports.textContent = "Where to?"
                            }

                            if(selectedAirportsArrival.children.length === 0){
                                selectedAirportsArrival.style.display = "none"
                            }
                        })
                    }else{
                        checkbox.innerHTML = ``

                        //for(let i = 0; i < FROM_AIRPORTS.length; i++){}
                            
                        
                        //let indexToRemove = FROM_AIRPORTS.indexOf(airportData.data[idx])
                        //FROM_AIRPORTS.splice(indexToRemove, 1)

                        for(let i = 0; i < TO_AIRPORTS.length; i++){
                            if(TO_AIRPORTS[i].iataCode === airportData.data[idx].iataCode){
                                TO_AIRPORTS.splice(i, 1)
                                whereToSpanAirports.children[i].remove() 
                                selectedAirportsArrival.children[i].remove()
                                break
                            }
                        }
                        
                        if(whereToSpanAirports.children.length > 0){
                            whereToSpanAirports.children[0].innerHTML = whereToSpanAirports.children[0].innerHTML.replace("・", "")
                        }
                        
                        if(whereToSpanAirports.children.length === 0){
                            whereToSpanAirports.textContent = "Where to?"
                        }

                        if(selectedAirportsArrival.children.length === 0){
                            selectedAirportsArrival.style.display = "none"
                        }
                    }
                })
            })

        }else{
            airportsElementWrapArrival.innerHTML = `
            <span>No results for this search, try something else.</span>
            `
        }
    }

    if(airportArrivalInput.value === "" && !airportArrivalInput.previousValue && e.key === "Backspace"){
        if(selectedAirportsArrival.children.length){
            
            for(let i = 0; i < airportsElementWrapArrival.children.length; i++){
                if(airportsElementWrapArrival.children[0].tagName === "SPAN"){
                    break
                }

                if(TO_AIRPORTS[TO_AIRPORTS.length - 1].iataCode === airportsElementWrapArrival.children[i].children[0].children[1].children[0].textContent){
                    airportsElementWrapArrival.children[i].children[0].children[2].classList.remove("checked")
                    airportsElementWrapArrival.children[i].children[0].children[2].innerHTML = ``
                }
                
            }

            selectedAirportsArrival.children[selectedAirportsArrival.children.length - 1].remove()
            TO_AIRPORTS.pop()
            whereToSpanAirports.children[whereToSpanAirports.children.length - 1].remove()

            if(selectedAirportsArrival.children.length === 0){
                selectedAirportsArrival.style.display = "none"
                whereToSpanAirports.innerHTML = "Where to?"
            }
        }
    }
    airportArrivalInput.previousValue = airportArrivalInput.value
})




//NEXT SEGMENT CALENDAR DATES

//get a date next month based on the current date
const oneMonthAfterToday = (userPickedDate) =>{
    userPickedDate.setMonth(userPickedDate.getMonth() + 1)

    const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
    const date = userPickedDate.getDate()
    const month = userPickedDate.toLocaleDateString("default", {month: "short"})
    const year = userPickedDate.getFullYear()
    
    const fullDate = `${weekday} ${date} ${month} ${year}`

    return fullDate
}

//get the date after a week from our first date
const oneWeekAfter = () =>{
    let oneMonthAfterDate = new Date(flyingDate)
    oneMonthAfterDate.setDate(oneMonthAfterDate.getDate() + 8)

    const weekday = oneMonthAfterDate.toLocaleDateString("default", {weekday: "short"})
    const date = oneMonthAfterDate.getDate()
    const month = oneMonthAfterDate.toLocaleDateString("default", {month: "short"})
    const year = oneMonthAfterDate.getFullYear()

    const fullDate = `${weekday} ${date} ${month} ${year}`

    return fullDate
}

//going back one month
const oneMonthBack = (userPickedDate) =>{
    userPickedDate.setMonth(userPickedDate.getMonth() - 1)

    const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
    const date = userPickedDate.getDate()
    const month = userPickedDate.toLocaleDateString("default", {month: "short"})
    const year = userPickedDate.getFullYear()
    
    const fullDate = `${weekday} ${date} ${month} ${year}`

    return fullDate
}

//foramt date
const formatDate = (userPickedDate) =>{
    const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
    const date = userPickedDate.getDate()
    const month = userPickedDate.toLocaleDateString("default", {month: "short"})
    const year = userPickedDate.getFullYear()
    
    const fullDate = `${weekday} ${date} ${month} ${year}`

    return fullDate
}

//the flying and return dates variables
let flyingDate = oneMonthAfterToday(new Date())
let returnDate = oneWeekAfter()

//get the span and display the dates initially
const flyingDatesSpan = document.querySelector(".flying-dates-span")
flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`

//remove add the return date based on user prefrence
const roundTripRadio = document.querySelector(".radio-wrap.round")
const oneWayRadio = document.querySelector(".radio-wrap.one-way")

//set initally
let roundTrip = true
//this will determine when will the element hide (only for round trip)
let firstClick = true

roundTripRadio.addEventListener("click", (e)=> {
    if(e.target.checked){
        flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
        roundTrip = true
    }
})

oneWayRadio.addEventListener("click", (e)=>{
    if(e.target.checked){
        flyingDatesSpan.innerHTML = flyingDate
        roundTrip = false
    }
})

//clicking the dates div and making the user pick from the calendar
const datesDiv = document.querySelector(".dates")

const calendar = document.querySelector(".calendar")
//fix event propagation bug
calendar.addEventListener("click", (e)=>{
    e.stopPropagation()
})

datesDiv.addEventListener("click", (e)=>{
    //make the calendar element appear and disappear
    //also go up and make the variables in the other elements
    e.stopPropagation()

    calendar.style.display = "flex"

    if(dropBool){
        dropdownEl.innerHTML = ``
        dropBool = false
    }

    if(airportDepartureEl.style.display == "block"){
        airportDepartureEl.style.display = "none"
        airportDepartureInput.previousValue = false
    }

    if(airportArrivalEl.style.display == "block"){
        airportArrivalEl.style.display = "none"
        airportArrivalInput.previousValue = false
    }

    if(passengersVisible){
        passengersVisible = false
        dropdownPassengers.classList.remove("show")
        dropdownPassengers.classList.add("hide")

        dropdownPassengers.addEventListener("animationend", ()=>{
            dropdownPassengers.classList.remove("hide")
        })
    }

    window.addEventListener("click", ()=>{
        calendar.style.display = "none"
    })

    //this event will show the initial calendar
    

    //console.log(monthPlusMinusOne, monthPlusMinusOneForRightPage)

    if(new Date(flyingDate).getMonth() === new Date().getMonth() && new Date(flyingDate).getFullYear() > new Date().getFullYear()){
        leftMonthPage.innerHTML = createCalendar(new Date(oneMonthBack(new Date(flyingDate))).getFullYear(), new Date(oneMonthBack(new Date(flyingDate))).getMonth() + 1, monthLeftSpan)
        rightMonthPage.innerHTML = createCalendar(new Date(flyingDate).getFullYear(), new Date(flyingDate).getMonth() + 1, monthRightSpan)

        monthPlusMinusOne = new Date(oneMonthBack(new Date(flyingDate)))
        monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))

    }else if(new Date(flyingDate).getMonth() !== new Date(returnDate).getMonth() && new Date(flyingDate).getFullYear() === new Date(returnDate).getFullYear()){
        leftMonthPage.innerHTML = createCalendar(new Date(flyingDate).getFullYear(), new Date(flyingDate).getMonth() + 1, monthLeftSpan)
        rightMonthPage.innerHTML = createCalendarRightPage(new Date(flyingDate).getFullYear(), new Date(flyingDate).getMonth() + 1, monthRightSpan)

        monthPlusMinusOne = new Date(flyingDate)
        monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))

        //console.log("mistake")
    }else {
        leftMonthPage.innerHTML = createCalendar(new Date(flyingDate).getFullYear(), new Date(flyingDate).getMonth() + 1, monthLeftSpan)
        rightMonthPage.innerHTML = createCalendarRightPage(new Date(returnDate).getFullYear(), new Date(returnDate).getMonth() + 1, monthRightSpan)
    
        monthPlusMinusOne = new Date(flyingDate)
        monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
    
        //console.log(new Date(oneMonthAfterToday(new Date(flyingDate))))
    }

    if(new Date().getMonth() === new Date(monthPlusMinusOne).getMonth() && new Date().getFullYear() === new Date(monthPlusMinusOne).getFullYear()){
        prevMonth.style.display = "none"
    }else {
        prevMonth.style.display = "flex"
    }

    if(new Date().getMonth() === new Date(monthRightSpan.textContent).getMonth() && new Date().getFullYear() < new Date(monthRightSpan.textContent).getFullYear()){
        //disable button and make the date go back one month
        nextMonth.style.display = "none"
    }else{
        nextMonth.style.display = "flex"
    }

    
    

    //event listener for user to change dates
    const allValidDateElements = document.querySelectorAll(".valid")
    allValidDateElements.forEach((element) => {
        if(!element.classList.contains("invalid")){
            element.addEventListener("click", (e)=>{
                e.preventDefault()
                eventFunction(element)
            })
        }
    })
})


//COME HERE TO ADD HOVER EVENT LISTENER
const eventFunction = (element) =>{
    if(roundTrip){
        if(firstClick){
            //if its the first click remove the class elements
            const allValidDateElements = document.querySelectorAll(".valid")
            allValidDateElements.forEach((el) =>{
                el.classList.remove("starting", "last", "in-between", "only-date")
            })

            element.classList.add("starting")
            //then set the firstClick to false
            firstClick = false

            if(element.parentElement.parentElement.parentElement.classList.contains("month-one")){
                flyingDate = new Date(`${element.textContent} ${monthLeftSpan.textContent}`)
            }else{
                //adding the logic here as well as making the logic for one way trips
                flyingDate = new Date(`${element.textContent} ${monthRightSpan.textContent}`)
            }
    
            flyingDate = formatDate(flyingDate)
            monthPlusMinusOne = (new Date(flyingDate))
            monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
    
            if(returnDate !== "Return"){
                returnDate = "Return"
            }

            flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
        }else{
            //check if the date picked is before the flyingDate
            if(element.parentElement.parentElement.parentElement.classList.contains("month-one")){
                if(new Date(`${element.textContent} ${monthLeftSpan.textContent}`).getTime() < new Date(flyingDate).getTime()){
                    const allValidDateElements = document.querySelectorAll(".valid")
                    allValidDateElements.forEach((el) =>{
                        el.classList.remove("starting", "last", "in-between", "only-date")
                    })

                    element.classList.add("starting")
                    
                    flyingDate = new Date(`${element.textContent} ${monthLeftSpan.textContent}`)

                    flyingDate = formatDate(flyingDate)
                    monthPlusMinusOne = (new Date(flyingDate))
                    monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
    
                    if(returnDate !== "Return"){
                        returnDate = "Return"
                    }

                    flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
                }else {
                    //close element and create the return date
                    //also add mouse over event
                    returnDate = new Date(`${element.textContent} ${monthLeftSpan.textContent}`)

                    firstClick = true 
                    calendar.style.display = "none"

                    returnDate = formatDate(returnDate)
                    flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
                }
            }else{
                if(new Date(`${element.textContent} ${monthRightSpan.textContent}`).getTime() < new Date(flyingDate).getTime()){
                    const allValidDateElements = document.querySelectorAll(".valid")
                    allValidDateElements.forEach((el) =>{
                        el.classList.remove("starting", "last", "in-between", "only-date")
                    })

                    element.classList.add("starting")
                    
                    flyingDate = new Date(`${element.textContent} ${monthRightSpan.textContent}`)

                    flyingDate = formatDate(flyingDate)
                    monthPlusMinusOne = (new Date(flyingDate))
                    monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
    
                    if(returnDate !== "Return"){
                        returnDate = "Return"
                    }

                    flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
                }else {
                    returnDate = new Date(`${element.textContent} ${monthRightSpan.textContent}`)

                    firstClick = true 
                    calendar.style.display = "none"

                    returnDate = formatDate(returnDate)
                    flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
                }
            }
            //if true listen for a click again
            //else close the element
        }
    }else {
        if(element.parentElement.parentElement.parentElement.classList.contains("month-one")){
            flyingDate = new Date(`${element.textContent} ${monthLeftSpan.textContent}`)
        }else{
            //adding the logic here as well as making the logic for one way trips
            flyingDate = new Date(`${element.textContent} ${monthRightSpan.textContent}`)
        }

        flyingDate = formatDate(flyingDate)
        monthPlusMinusOne = (new Date(flyingDate))
        monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))

        flyingDatesSpan.innerHTML = `${flyingDate}`

        calendar.style.display = "none"

        if(returnDate !== "Return"){
            returnDate = "Return"
        }
    }

    /*
    if(element.parentElement.parentElement.parentElement.classList.contains("month-one")){
        flyingDate = new Date(`${element.textContent} ${monthLeftSpan.textContent}`)
        flyingDate = formatDate(flyingDate)
        monthPlusMinusOne = (new Date(flyingDate))
        monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))

        returnDate = "Return"
        
        flyingDatesSpan.innerHTML = `${flyingDate} - ${returnDate}`
    }else{
        //adding the logic here as well as making the logic for one way trips
        console.log(monthRightSpan.textContent)
    }
    */
}

//creating the calendar function
const prevMonth = document.querySelector(".button-prev")
const nextMonth = document.querySelector(".button-next")

//WILL HAVE TO GET DOWN THE LOGIC BEHIND SWITCHING DATES
let monthPlusMinusOne = new Date(flyingDate)
let monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
//event listener to change months
prevMonth.addEventListener("click", ()=>{
    nextMonth.style.display = "flex"

    monthPlusMinusOne = oneMonthBack(new Date(monthPlusMinusOne))
    monthPlusMinusOneForRightPage = oneMonthBack(new Date(monthPlusMinusOneForRightPage))

    //console.log(monthPlusMinusOne, monthPlusMinusOneForRightPage)

    leftMonthPage.innerHTML = createCalendar(new Date(monthPlusMinusOne).getFullYear(), new Date(monthPlusMinusOne).getMonth() + 1, monthLeftSpan)
    rightMonthPage.innerHTML = createCalendarRightPage(new Date(monthPlusMinusOneForRightPage).getFullYear(), new Date(monthPlusMinusOneForRightPage).getMonth(), monthRightSpan)

    if(new Date().getMonth() === new Date(monthPlusMinusOne).getMonth() && new Date().getFullYear() === new Date(monthPlusMinusOne).getFullYear()){
        prevMonth.style.display = "none"
    }

    const allValidDateElements = document.querySelectorAll(".valid")
    allValidDateElements.forEach((element) => {
        if(!element.classList.contains("invalid")){
            element.addEventListener("click", (e)=>{
                e.preventDefault()
                eventFunction(element)
            })
        }
    })
})
nextMonth.addEventListener("click", ()=>{
    prevMonth.style.display = "flex"

    //calling this changes the variable to go one month in the future
    monthPlusMinusOne = oneMonthAfterToday(new Date(monthPlusMinusOne))
    monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOneForRightPage))

    leftMonthPage.innerHTML = createCalendar(new Date(monthPlusMinusOne).getFullYear(), new Date(monthPlusMinusOne).getMonth() + 1, monthLeftSpan)
    rightMonthPage.innerHTML = createCalendarRightPage(new Date(monthPlusMinusOneForRightPage).getFullYear(), new Date(monthPlusMinusOneForRightPage).getMonth(), monthRightSpan)

    
    //if the variable reaches the same month a year later stop the event from happening
    if(new Date().getMonth() === new Date(monthRightSpan.textContent).getMonth() && new Date().getFullYear() < new Date(monthRightSpan.textContent).getFullYear()){
        //disable button and make the date go back one month
        nextMonth.style.display = "none"
    }

    const allValidDateElements = document.querySelectorAll(".valid")
    allValidDateElements.forEach((element) => {
        if(!element.classList.contains("invalid")){
            element.addEventListener("click", (e)=>{
                e.preventDefault()
                eventFunction(element)
            })
        }
    })
})

//using the user departure date
const leftMonthPage = document.querySelector(".month-one .days")
const rightMonthPage = document.querySelector(".month-two .days")

//span to display the month and year on each page
const monthLeftSpan = document.querySelector(".monthLeft")
const monthRightSpan = document.querySelector(".monthRight")

//function creating the calendar inside of the element
const createCalendar = (year, month, span) =>{
    
    const firstDay = new Date(year, month - 1, 1)
    const lastDay = new Date(year, month, 0)
    const daysInMonth = lastDay.getDate()

    span.textContent = `${firstDay.toLocaleDateString("default", {month: "long"})} ${year}`

    let calendarHTML = `
      <div class="weekdays-header">
        <div class="weekday">Sun</div>
        <div class="weekday">Mon</div>
        <div class="weekday">Tue</div>
        <div class="weekday">Wed</div>
        <div class="weekday">Thu</div>
        <div class="weekday">Fri</div>
        <div class="weekday">Sat</div>
      </div>

      <div class="calendar-body">
    `

    let date = 1

    //create the valid and invalid date and add event listeners properly
    //after that this segment should be finished
    const checkingForDateRange = () =>{
        //console.log(new Date(year, month - 1, date))
        if(roundTrip){
            if(new Date(year, month - 1, date).getTime() == new Date(flyingDate).getTime()){
                return "starting"
            }else if(new Date(year, month - 1, date).getTime() > new Date(flyingDate).getTime() && new Date(year, month - 1, date).getTime() < new Date(returnDate).getTime()){
                return "in-between"
            }else if(new Date(year, month - 1, date).getTime() == new Date(returnDate).getTime()){
                return "last"
            }else if(new Date(year, month - 1, date).getTime() < new Date(formatDate(new Date())).getTime()) {
                return "invalid"
            }else {
                return ""
            }
        }else {
            if(new Date(year, month - 1, date).getTime() == new Date(flyingDate).getTime()){
                return "only-date"
            }else if(new Date(year, month - 1, date).getTime() < new Date(formatDate(new Date())).getTime()) {
                return "invalid"
            }else {
                return ""
            }
        }
    }
    
    for(let j = 0; j < 42; j++){
        if (j < firstDay.getDay()) {
            calendarHTML += '<span></span>';
        }else if (date > daysInMonth) {
            calendarHTML += '<span></span>';
        }else {
            calendarHTML += `<span class="valid ${checkingForDateRange()}">${date}</span>`;
            date++;
        }
    }
    
   //console.log(firstDay.getDay())

    calendarHTML += `</div>`

    return calendarHTML
}

const createCalendarRightPage = (year, month, span) =>{
    let firstDay
    let lastDay
    let daysInMonth

    //variable to fix bug
    let wasYearFalse = false
    //if the return date is not set (user clicked once then didnt select return date)
    if(!year){
        year = new Date(oneMonthAfterToday(new Date(flyingDate))).getFullYear()
        month = new Date(flyingDate).getMonth()
        
        firstDay = new Date(year, month + 1, 1)
        lastDay = new Date(year, month + 2, 0)
        daysInMonth = lastDay.getDate()
        wasYearFalse = true

    
    } else{
        if(new Date(flyingDate).getMonth() === new Date(returnDate).getMonth()){

            firstDay = new Date(year, month, 1)
            lastDay = new Date(year, month + 1, 0)
            daysInMonth = lastDay.getDate() 

            //console.log(year, month)
        }else{


            firstDay = new Date(year, month , 1)
            lastDay = new Date(year, month + 1, 0) 
            daysInMonth = lastDay.getDate()

            //console.log(year, month)
        }
    }
    
    span.textContent = `${firstDay.toLocaleDateString("default", {month: "long"})} ${year}`

    let calendarHTML = `
      <div class="weekdays-header">
        <div class="weekday">Sun</div>
        <div class="weekday">Mon</div>
        <div class="weekday">Tue</div>
        <div class="weekday">Wed</div>
        <div class="weekday">Thu</div>
        <div class="weekday">Fri</div>
        <div class="weekday">Sat</div>
      </div>

      <div class="calendar-body">
    `

    let date = 1

    const checkingForDateRange = () =>{
        if(returnDate !== "Return" && roundTrip){
            if(new Date(year, month, date).getTime() == new Date(flyingDate).getTime()){
                return "starting"
            }else if(new Date(year, month, date).getTime() > new Date(flyingDate).getTime() && new Date(year, month , date).getTime() < new Date(returnDate).getTime()){
                return "in-between"
            }else if(new Date(year, month , date).getTime() == new Date(returnDate).getTime()){
                return "last"
            }else {
                return ""
            }
        }else if (wasYearFalse && roundTrip){
            if(new Date(year, month + 1, date).getTime() == new Date(flyingDate).getTime()){
                return "starting"
            }else if(new Date(year, month + 1, date).getTime() > new Date(flyingDate).getTime() && new Date(year, month , date).getTime() < new Date(returnDate).getTime()){
                return "in-between"
            }else if(new Date(year, month + 1, date).getTime() == new Date(returnDate).getTime()){
                return "last"
            }else {
                return ""
            }
            
        }else if (wasYearFalse && !roundTrip) {
            if(new Date(year, month + 1, date).getTime() == new Date(flyingDate).getTime()){
                return "only-date"
            }else{
                return ""
            }

        }else if (roundTrip){
            if(new Date(year, month, date).getTime() == new Date(flyingDate).getTime()){
                return "starting"
            }else if(new Date(year, month, date).getTime() > new Date(flyingDate).getTime() && new Date(year, month , date).getTime() < new Date(returnDate).getTime()){
                return "in-between"
            }else if(new Date(year, month , date).getTime() == new Date(returnDate).getTime()){
                return "last"
            }else {
                return ""
            }
        }else {
            if(new Date(year, month , date).getTime() == new Date(flyingDate).getTime()){
                return "only-date"
            }else {
                return ""
            }
        }
    }

    for(let j = 0; j < 42; j++){
        if (j < firstDay.getDay()) {
            calendarHTML += '<span></span>';
        }else if (date > daysInMonth) {
            calendarHTML += '<span></span>';
        }else {
            calendarHTML += `<span class="valid ${checkingForDateRange()}">${date}</span>`;
            date++;
        }
    }
    
   //console.log(firstDay.getDay())

    calendarHTML += `</div>`

    return calendarHTML
}