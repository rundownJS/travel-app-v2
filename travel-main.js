//flight segment
const segmentsElement = document.querySelector(".segment-body")
const generateFlightContent = () =>{

    segmentsElement.innerHTML = `
    <div class="main-search-section">
    <div class="el-wrap">
        <span class="title">Compare and book flights with ease</span>
        <span class="small">Discover your next dream destination</span>

        <div class="search-properties">
            <div class="radio-wrap round">
                <input checked name="trip" id="round" type="radio">
                <label for="round">Round trip</label>
            </div>

            <div class="radio-wrap one-way">
                <input name="trip" id="one-way" type="radio">
                <label for="one-way">One way</label>
            </div>

            <div class="flight-class">
                <span id="ECONOMY" class="current-chosen">Economy</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <div class="dropdown"></div>
            </div>

            <div class="passengers">
                <span class="number-of-passengers">1 adult</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                
                <div class="dropdown-passengers">
                        <div class="adults-wrap">
                            <div class="adults-span-wrap">
                                <span class="adults">Adult</span>
                                <span>Age 18+</span>
                            </div>
                            <div class="adults-counter">
                                <div class="adults-minus disabled"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></div>
                                <span class="adults-number">1</span>
                                <div class="adults-plus"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>
                            </div>
                        </div>

                        <div class="children-wrap">
                            <div class="children-span-wrap">
                                <span class="children">Children</span>
                                <span>Age 0 - 17</span>
                            </div>

                            <div class="children-counter">
                                <div class="children-minus disabled"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></div>
                                <span class="children-number">0</span>
                                <div class="children-plus"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>
                            </div>
                        </div>

                        <div class="infantError">
                            <div>
                                <div class="circle-err">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                                </div>
                            </div>
                            
                            <span>For safety reasons there must be one adult traveller with every infant traveller.</span>
                        </div>

                        <div class="children-age">
                        </div>
                </div>

                <div class="childrenAgeError">
                    <div class="child-error-triangle"></div>
                    <span>Traveller issue</span>
                </div>
            </div>

            <div class="check-wrap">
                <div class="checkbox"></div>
                <span>Direct flights only</span>
            </div>
        </div> 

        <div class="search-wrap">
            <div class="flying-airport">
                <div class="airportError">
                    <div class="airport-error-triangle"></div>
                    <span>Add an airport or city</span>
                </div>

                <div class="airportSameError">
                    <div class="airport-error-triangle"></div>
                    <span>Origin and destination can't be the same</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>
                <span class="where-from">Where from?</span>

                <div class="where-from-dropdown">
                    <div class="triangle-airport"></div>
                    <div class="list-input">
                        <div class="selected-airports"></div>
                        <input type="text" placeholder="Airport or city">
                    </div>
                    <div class="airport-results-wrap">
                        
                    </div>
                </div>
            </div>
            <div class="swap-airports">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/></svg>
            </div>
            <div class="destination-airports">
                <div class="airportErrorSecond">
                    <div class="airport-error-triangle"></div>
                    <span>Add an airport or city</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                <span class="where-to">Where to?</span>

                <div class="where-to-dropdown">
                    <div class="list-input-arrival">
                        <div class="selected-airports-arrival"></div>
                        <input type="text" placeholder="Airport or city">
                    </div>
                    <div class="airport-results-wrap-arrival"></div>
                </div>
            </div>
            
            
            <div class="dates">
                <div class="datesError">
                    <div class="dates-error-triangle"></div>
                    <span>Add your flight dates</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                <span class="flying-dates-span"></span>
                <div class="calendar">
                    <div class="triangle-dates"></div>

                    <div class="month-one">
                        <div class="button-month-wrap">
                            <div class="button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                            </div>
                            <span class="monthLeft"></span>
                        </div>
                        <div class="days"></div>
                    </div>
                    <div class="month-two">
                        <div class="button-month-wrap">
                            <span class="monthRight"></span>
                            <div class="button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                            </div>
                        </div>
                        <div class="days"></div>
                    </div>
                </div>
            </div>
            <div class="search-btn">Search</div>
        </div>
    </div>
</div>

<div class="initial-flights-content">
    <div class="popular-flights">
        <div class="elements-wrap">
            <span class="popular-flights-title">Popular flights</span>
            <span class="popular-flights-small">Get inspired for your next destination</span>

            <div class="popular-city-wrapper"> 
                <div class="carousel-left">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>  
                <div class="carousel-right show">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div> 
                
                <div class="the-cities-wrapper"></div>
            </div>
        </div>

        <div class="trending-elements-wrap">
            <span class="trending-cities-title">Trending cities</span>
            <span class="trending-cities-small"></span>

            <div class="trending-cities-btn-wrap">
                <div class="trending-carousel-left">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div>  
                <div class="trending-carousel-right show">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </div> 

                <div class="trending-each-city-wrapper"></div>
            </div>
        </div>
    </div>

    <div class="extra-perks">
        <div class="perks-wrapper">
            <div class="perk">
                <div class="perk-img">
                    <img src="./images/search.png" alt="magni-glass">
                </div>
                <div class="perk-text">
                    <span class="perk-title">Search a huge selection</span>
                    <span class="perk-small">Easily compare flights, airlines and prices - all in one place</span>
                </div>
            </div>
            <div class="perk">
                <div class="perk-img">
                    <img src="./images/loan.png" alt="no-hidden-fees">
                </div>
                <div class="perk-text">
                    <span class="perk-title">Pay no hidden fees</span>
                    <span class="perk-small">Get a clear price breakdown, every step of the way</span>
                </div>
            </div>
            <div class="perk">
                <div class="perk-img">
                    <img src="./images/plane-ticket.png" alt="flexible-tickets">
                </div>
                <div class="perk-text">
                    <span class="perk-title">Get more flexibility</span>
                    <span class="perk-small">Change your travel dates with the Flexible ticket option*</span>
                </div>
            </div>
        </div>
    </div>
    <div class="extra-text">
        *Flexible plane tickets are available for an additional cost on selected airfares
    </div>

    <div class="flying-worldwide-segment">
        <div class="worldwide-wrapper">
            <span class="worldwide-title">Fly worldwide with ExploreHub</span>
            <span class="worldwide-small">Flights from wherever you want to go</span>

            
            
            <div class="continent-wrapper">
                <div class="continent selected">Europe</div>
                <div class="continent ">Asia</div>
                <div class="continent ">South America</div>
                <div class="continent ">North America</div>
                <div class="continent ">Africa</div>
                <div class="continent ">Oceania</div>
                <div class="hover-element"></div>
            </div>

            <div class="cheapest-worldwide-wrapper">
                
            </div>

            <div class="extra-cheap-info">
                
            </div>
        </div>
    </div>

    <div class="faq-wrapper">
        <span class="faq-title">Frequently asked questions</span>
        <div class="question-wrap">
            <div class="question">
                <span>How do I search for flights on Explore Hub?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer">To search for flights, simply enter your departure and destination cities, select your travel dates, and click on the "Search" button. You'll be presented with a list of available flights based on your criteria.</span>
            </div>
        </div>
        <div class="question-wrap">
            <div class="question">
                <span>Can I book a one-way ticket using Explore Hub?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer">Yes, Explore Hub allows you to book both round-trip and one-way flights. When entering your travel details, you can choose the "One-way" option if you only need a single leg of the journey.</span>
            </div>
        </div>
        <div class="question-wrap">
            <div class="question">
                <span>Are there any filters to customize my flight search results?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer">Absolutely! Explore Hub provides various filters to refine your flight search. You can filter results based on airlines, max amount of stops, cheapest or fastest flight, and price ranges, ensuring you find the most suitable options for your travel preferences.</span>
            </div>
        </div>
        <div class="question-wrap">
            <div class="question">
                <span>Are there any hidden fees associated with flight bookings on Explore Hub?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer"> No, Explore Hub has no hidden fees. You can see a detailed breakdown of the flight's price during the booking process, allowing you to understand exactly where your money is going.</span>
            </div>
        </div>
        <div class="question-wrap">
            <div class="question">
                <span>How does Explore Hub handle flight cancellations and refunds?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer">Refund processes vary based on the airline's policies and ticket type. Explore Hub simplifies communication with airlines for cancellations.</span>
            </div>
        </div>
        <div class="question-wrap">
            <div class="question">
                <span>How do I receive my flight confirmation and details after booking?</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            <div class="answer-wrap">
                <span class="answer">Once you complete the flight booking process on Explore Hub, you will receive a confirmation email with all the relevant details.</span>
            </div>
        </div>
    </div>
</div>
    `
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

//flight api details
const BASE_URL = 'https://test.api.amadeus.com/'
const API_KEY = 'ugLgXfxlS5dVMlp3jIZjAeqSLL9yix3e'
const API_SECRET = 'j67Z720DLfs27elb'

//the dropdown for the flight class
const dropdownEl = document.querySelector(".dropdown")
const flightsEl = document.querySelector(".flight-class")
let dropBool = false

const dropdownEnable = () => {
    dropBool = true
    if(dropdownEl.innerHTML.length > 0){
        dropdownEl.innerHTML = ``
        dropdownEl.style.display = "none"
        return
    }

    dropdownEl.style.display = "flex"
    dropdownEl.innerHTML = `
    <span id="ECONOMY">Economy</span>
    <span id="PREMIUM_ECONOMY">Premium Economy</span>
    <span id="BUSINESS">Business</span>
    <span id="FIRST">First-class</span>
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
        currentClassEl.id = span.id
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
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travelers`
    }else{
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults`
    }

    const travellerErrorElement = document.querySelector(".childrenAgeError")
    const infantErrorElement = document.querySelector(".infantError")

    const allAgeSelect = document.querySelectorAll("#child-age-selection")
    if(!allAgeSelect.length){
        childrenAgeError = false 

        travellerErrorElement.style.display = "none"
    }

    let infants = 0
    for(let i = 0; i < allAgeSelect.length; i++){
        if(allAgeSelect[i].value === "0" || allAgeSelect[i].value === "1" || allAgeSelect[i].value === "2"){
            infants++
        }

        if(allAgeSelect[i].value === "" || infants > adultPassengers){
            childrenAgeError = true 

            travellerErrorElement.style.display = "block"
        }else{
            childrenAgeError = false 

            travellerErrorElement.style.display = "none"
        }
    }

    if(infants <= adultPassengers){
        infantErrorElement.style.display = "none"

        infantError = false
    }else{
        infantErrorElement.style.display = "flex"

        infantError = true
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
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travelers`
    }else{
        if(adultPassengers == 1){
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adult`
        }else{
            totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} adults`
        }
    }

    const travellerErrorElement = document.querySelector(".childrenAgeError")
    const infantErrorElement = document.querySelector(".infantError")

    const allAgeSelect = document.querySelectorAll("#child-age-selection")
    if(!allAgeSelect.length){
        childrenAgeError = false 

        travellerErrorElement.style.display = "none"
    }

    let infants = 0
    for(let i = 0; i < allAgeSelect.length; i++){
        if(allAgeSelect[i].value === "0" || allAgeSelect[i].value === "1" || allAgeSelect[i].value === "2"){
            infants++
        }

        if(allAgeSelect[i].value === "" || infants > adultPassengers){
            childrenAgeError = true 

            travellerErrorElement.style.display = "block"
        }else{
            childrenAgeError = false 

            travellerErrorElement.style.display = "none"
        }
    }

    if(infants <= adultPassengers){
        infantErrorElement.style.display = "none"

        infantError = false
    }else{
        infantErrorElement.style.display = "flex"

        infantError = true
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
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travelers` 
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

    const travellerErrorElement = document.querySelector(".childrenAgeError")
    const infantErrorElement = document.querySelector(".infantError")

    const allAgeSelect = document.querySelectorAll("#child-age-selection")
    if(!allAgeSelect.length){
        childrenAgeError = false 

        travellerErrorElement.style.display = "none"
    }

    let infants = 0
    for(let i = 0; i < allAgeSelect.length; i++){
        if(allAgeSelect[i].value === "0" || allAgeSelect[i].value === "1" || allAgeSelect[i].value === "2"){
            infants++
        }

        if(allAgeSelect[i].value === "" || infants > adultPassengers){
            childrenAgeError = true 

            travellerErrorElement.style.display = "block"
        }else{
            childrenAgeError = false 

            travellerErrorElement.style.display = "none"
        }
    }

    if(infants <= adultPassengers){
        infantErrorElement.style.display = "none"

        infantError = false
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
        totalPassengersSpan.textContent = `${adultPassengers + childrenPassengers} travelers`
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

    const travellerErrorElement = document.querySelector(".childrenAgeError")
    const infantErrorElement = document.querySelector(".infantError")

    const allAgeSelect = document.querySelectorAll("#child-age-selection")
    if(!allAgeSelect.length){
        childrenAgeError = false 

        travellerErrorElement.style.display = "none"
    }

    let infants = 0
    for(let i = 0; i < allAgeSelect.length; i++){
        if(allAgeSelect[i].value === "0" || allAgeSelect[i].value === "1" || allAgeSelect[i].value === "2"){
            infants++
        }

        if(allAgeSelect[i].value === "" || infants > adultPassengers){
            childrenAgeError = true 

            travellerErrorElement.style.display = "block"
        }else{
            childrenAgeError = false 

            travellerErrorElement.style.display = "none"
        }
    }

    if(infants <= adultPassengers){
        infantErrorElement.style.display = "none"

        infantError = false
    }else{
        infantErrorElement.style.display = "flex"

        infantError = true
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

            const travellerErrorElement = document.querySelector(".childrenAgeError")
            const infantErrorElement = document.querySelector(".infantError")

            
            let infants = 0
            for(let i = 0; i < allAgeSelect.length; i++){
                if(allAgeSelect[i].value === "0" || allAgeSelect[i].value === "1" || allAgeSelect[i].value === "2"){
                    infants++

                    //console.log(allAgeSelect[i])
                }
            }

            if(infants > adultPassengers){
                infantError = true

                infantErrorElement.style.display = "flex"
                travellerErrorElement.style.display = "block"
            }

            if(infants <= adultPassengers){
                infantErrorElement.style.display = "none"

                infantError = false
            }
            
            for(let i = 0; i < allAgeSelect.length; i++){
                if(allAgeSelect[i].value === ""){
                    travellerErrorElement.style.display = "block"

                    childrenAgeError = true
                    break
                }else if(allAgeSelect[i].value !== "" && adultPassengers >= infants){
                    travellerErrorElement.style.display = "none"

                    childrenAgeError = false
                }
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

    const fromAirportError = document.querySelector(".airportError")
    const toAirportError = document.querySelector(".airportErrorSecond")

    if(FROM_AIRPORTS.length){
        fromAirportError.style.display = "none"
    }

    if(TO_AIRPORTS.length){
        toAirportError.style.display = "none"
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

    const fromAirportError = document.querySelector(".airportError")
    const sameAirportErrorElement = document.querySelector(".airportSameError")

    fromAirportError.style.display = "none"
    sameAirportErrorElement.style.display = "none"

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

    window.addEventListener("click", (e)=>{
        airportDepartureEl.style.display = "none"
        airportDepartureEl.classList.remove("focus")
        airportDepartureInput.previousValue = false

        if(!FROM_AIRPORTS.length){
            airportMissingError = true
            fromAirportError.style.display = "block"
        }else{
            if(TO_AIRPORTS.length && FROM_AIRPORTS.length){
                airportMissingError = false
            }

            if(TO_AIRPORTS.length){
                for(let i = 0; i < FROM_AIRPORTS.length; i++){
                    for(let j = 0; j < TO_AIRPORTS.length; j++){
                        if(FROM_AIRPORTS[i].iataCode === TO_AIRPORTS[j].iataCode){
                            sameAirportError = true 
                            sameAirportErrorElement.style.display = "block"
                          
                        }else{
                            sameAirportError = false
                        }
                    }
                }
            }
        }
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

    const toAirportError = document.querySelector(".airportErrorSecond")
    const sameAirportErrorElement = document.querySelector(".airportSameError")

    toAirportError.style.display = "none"
    sameAirportErrorElement.style.display = "none"

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

        if(!TO_AIRPORTS.length){
            airportMissingError = true
            toAirportError.style.display = "block"
        }else{
            if(TO_AIRPORTS.length && FROM_AIRPORTS.length){
                airportMissingError = false
            }

            if(FROM_AIRPORTS.length){
                for(let i = 0; i < TO_AIRPORTS.length; i++){
                    for(let j = 0; j < FROM_AIRPORTS.length; j++){
                        if(TO_AIRPORTS[i].iataCode === FROM_AIRPORTS[j].iataCode){
                            sameAirportError = true 
                            sameAirportErrorElement.style.display = "block"
                          
                        }else{
                            sameAirportError = false
                        }
                    }
                }
            }
        }
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
const oneWeekAfter = (userPickedDate) =>{
    let oneMonthAfterDate = new Date(userPickedDate)
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

const formatDateForAPI = (userPickedDate) =>{
    return `${userPickedDate.getFullYear()}-${(userPickedDate.getMonth() + 1).toString().padStart(2, "0")}-${userPickedDate.getDate().toString().padStart(2, "0")}`
}

//the flying and return dates variables
let flyingDate = oneMonthAfterToday(new Date())
let returnDate = oneWeekAfter(new Date(flyingDate))

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

        if(returnDate === "Return"){
            const dateErrorElement = document.querySelector(".datesError")
            datesError = true 
            dateErrorElement.style.display = "block"
        }
    }
})

oneWayRadio.addEventListener("click", (e)=>{
    if(e.target.checked){
        flyingDatesSpan.innerHTML = flyingDate
        roundTrip = false

        const dateErrorElement = document.querySelector(".datesError")
        datesError = false 
        dateErrorElement.style.display = "none"
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

    const dateErrorElement = document.querySelector(".datesError")
    dateErrorElement.style.display = "none"

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

        const dateErrorElement = document.querySelector(".datesError")
        
        if(datesError){
            dateErrorElement.style.display = "block"
        }else{
            dateErrorElement.style.display = "none"
        }
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
        rightMonthPage.innerHTML = createCalendarRightPage(new Date(oneMonthAfterToday(new Date(flyingDate))).getFullYear(), new Date(oneMonthAfterToday(new Date(flyingDate))).getMonth(), monthRightSpan)
    
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

    if(roundTrip && !firstClick){
        allValidDateElements.forEach((element) =>{
            element.addEventListener("mouseover", (e)=>{
                mouseOverEvent(element, e)
            })
            element.addEventListener("mouseleave", (e)=>{
                mouseLeaveEvent(element, e)
            })
        })
    }

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
            //monthPlusMinusOne = new Date(flyingDate)
            //monthPlusMinusOneForRightPage = oneMonthAfterToday(new Date(monthPlusMinusOne))
    
            if(returnDate !== "Return"){
                returnDate = "Return"
                datesError = true
            }

            
            allValidDateElements.forEach((element) =>{
                element.addEventListener("mouseover", (e)=>{
                    mouseOverEvent(element, e)
                })
                element.addEventListener("mouseleave", (e)=>{
                    mouseLeaveEvent(element, e)
                })
            })

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

                    datesError = false

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

                    datesError = false

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


//create a function to use as an event listener on hover for dates
const mouseOverEvent = (element, e) =>{
    let date = e.target.textContent
    let monthYear = ""

    //create 2 loops that will go over the elements
    if(element.parentElement.parentElement.parentElement.classList.contains("month-one")){
        monthYear = monthLeftSpan.textContent
    }else {
        monthYear = monthRightSpan.textContent
    }
    
    const dayHovered = new Date(`${date} ${monthYear}`)

    const monthLeftDays = document.querySelectorAll(".month-one .valid")
    const monthRightDays = document.querySelectorAll(".month-two .valid")
    
    if(dayHovered.getTime() > new Date(flyingDate).getTime()){
        /*
        allValidDateElements.forEach((el)=>{
            el.classList.remove("starting", "last", "in-between", "only-date")

            //logic needs touching
            if(new Date(`${el.textContent} ${monthYear}`).getTime() == new Date(flyingDate).getTime()){
                el.classList.add("starting")
            }else if(new Date(`${el.textContent} ${monthYear}`).getTime() > new Date(flyingDate).getTime() && new Date(`${el.textContent} ${monthYear}`).getTime() <= dayHovered.getTime()){
                //finish up the logic
                el.classList.add("in-between")
            }
        })*/
        
        monthLeftDays.forEach((el) =>{
            el.classList.remove("starting", "last", "in-between", "only-date")

            if(new Date(`${el.textContent} ${monthLeftSpan.textContent}`).getTime() == new Date(flyingDate).getTime()){
                el.classList.add("starting")
            }else if(new Date(`${el.textContent} ${monthLeftSpan.textContent}`).getTime() > new Date(flyingDate).getTime() && new Date(`${el.textContent} ${monthLeftSpan.textContent}`).getTime() <= dayHovered.getTime()){
                el.classList.add("in-between")
            }
        })
        
        monthRightDays.forEach((el) =>{
            el.classList.remove("starting", "last", "in-between", "only-date")

            if(new Date(`${el.textContent} ${monthRightSpan.textContent}`).getTime() == new Date(flyingDate).getTime()){
                el.classList.add("starting")
            }else if(new Date(`${el.textContent} ${monthRightSpan.textContent}`).getTime() > new Date(flyingDate).getTime() && new Date(`${el.textContent} ${monthRightSpan.textContent}`).getTime() <= dayHovered.getTime()){
                el.classList.add("in-between")
            }
        })
    }
}

//removing the classses when user leaves element
const mouseLeaveEvent = (element, e) =>{
    const monthLeftDays = document.querySelectorAll(".month-one .valid")
    const monthRightDays = document.querySelectorAll(".month-two .valid")

    monthLeftDays.forEach((el) =>{
        el.classList.remove("starting", "last", "in-between", "only-date")

        if(new Date(`${el.textContent} ${monthLeftSpan.textContent}`).getTime() == new Date(flyingDate).getTime()){
            el.classList.add("starting")
        }
    })

    monthRightDays.forEach((el) =>{
        el.classList.remove("starting", "last", "in-between", "only-date")

        if(new Date(`${el.textContent} ${monthRightSpan.textContent}`).getTime() == new Date(flyingDate).getTime()){
            el.classList.add("starting")
        }
    })
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

    //console.log(monthPlusMinusOne, monthPlusMinusOneForRightPage)

    const allValidDateElements = document.querySelectorAll(".valid")
    allValidDateElements.forEach((element) => {
        if(!element.classList.contains("invalid")){
            element.addEventListener("click", (e)=>{
                e.preventDefault()
                eventFunction(element)
            })
        }
    })

    if(roundTrip && !firstClick){
        allValidDateElements.forEach((element) =>{
            element.addEventListener("mouseover", (e)=>{
                mouseOverEvent(element, e)
            })
            element.addEventListener("mouseleave", (e)=>{
                mouseLeaveEvent(element, e)
            })
        })
    }
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

    if(roundTrip && !firstClick){
        allValidDateElements.forEach((element) =>{
            element.addEventListener("mouseover", (e)=>{
                mouseOverEvent(element, e)
            })
            element.addEventListener("mouseleave", (e)=>{
                mouseLeaveEvent(element, e)
            })
        })
    }
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
            if(new Date(year, month - 1, date).getTime() == new Date(flyingDate).getTime() && new Date(flyingDate).getTime() === new Date(returnDate).getTime()){
                return "only-date"
            }else if(new Date(year, month - 1, date).getTime() == new Date(flyingDate).getTime()){
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
    
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
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

    const checkingForDateRange = () =>{
        if(returnDate !== "Return" && roundTrip){
            if(new Date(year, month, date).getTime() == new Date(flyingDate).getTime() && new Date(flyingDate).getTime() === new Date(returnDate).getTime()){
                return "only-date"
            }else if(new Date(year, month, date).getTime() == new Date(flyingDate).getTime()){
                return "starting"
            }else if(new Date(year, month, date).getTime() > new Date(flyingDate).getTime() && new Date(year, month , date).getTime() < new Date(returnDate).getTime()){
                return "in-between"
            }else if(new Date(year, month , date).getTime() == new Date(returnDate).getTime()){
                return "last"
            }else {
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
//the condition check variables
let airportMissingError = true 
let datesError = false 
let sameAirportError = false 
let childrenAgeError = false 
let infantError = false 

//the search conditions 
const searchBtn = document.querySelector(".search-btn")
searchBtn.addEventListener("click", async ()=>{
    if(!airportMissingError && !datesError && !sameAirportError && !childrenAgeError && !infantError){
        //run flight engine search
        //entire new page
        if(FROM_AIRPORTS.length && TO_AIRPORTS.length){
            
            //quick function right here which will make the skeleton loaders
            newElemnetsSkeleton()

            const getFlights = async (flyingAirport, destinationAirport) =>{
                const ACCESS_TOKEN = await auth()

                const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=${flyingAirport}&destinationLocationCode=${destinationAirport}&departureDate=${formatDateForAPI(new Date(flyingDate))}${roundTripProperty}&adults=${adultPassengers}&max=150&children=${childrenPassengers}&travelClass=${travelClass}&nonStop=${DIRECT_FLIGHTS}`, {
                    headers: {
                        'Authorization' : `Bearer ${ACCESS_TOKEN}`
                    }
                })
                const flights = await request.json()

                allFlightsArray.push(flights)
            }

            const travelClass = document.querySelector(".current-chosen").id

            //console.log(travelClass)

            let roundTripProperty
            //get all search properties needed
            if(roundTrip){
                roundTripProperty = `&returnDate=${formatDateForAPI(new Date(returnDate))}`
            }else{
                roundTripProperty = ""
            }

            //console.log(`&departureDate=${formatDateForAPI(new Date(flyingDate))}${roundTripProperty}&adults=${adultPassengers}&max=150&children=${childrenPassengers}&travelClass=${travelClass}&nonStop=${DIRECT_FLIGHTS}`)

            const allFlightsArray = []
            if(FROM_AIRPORTS.length === 1 && TO_AIRPORTS.length === 1){
                const awaitingFlights = await getFlights(FROM_AIRPORTS[0].iataCode, TO_AIRPORTS[0].iataCode)
                
                displayFlights(allFlightsArray[0].data)
                //console.log(allFlightsArray)
                //console.log(FROM_AIRPORTS[0].iataCode, TO_AIRPORTS[0].iataCode)
            }else{
                for(let i = 0; i < FROM_AIRPORTS.length; i++){
                    for(let j = 0; j < TO_AIRPORTS.length; j++){
                        const awaitingFlights = await getFlights(FROM_AIRPORTS[i].iataCode, TO_AIRPORTS[j].iataCode)
                        
                        //console.log(FROM_AIRPORTS[i].iataCode, TO_AIRPORTS[j].iataCode)
                    }
                }
                const filteredArrayFlights = allFlightsArray.map((flight) =>{
                    return flight.data[0]
                })

                //now use the following array to call a function which will make the elements
                displayFlights(filteredArrayFlights)
            }
        }
    }else{

        const fromAirportError = document.querySelector(".airportError")
        const toAirportError = document.querySelector(".airportErrorSecond")
        const sameAirportErrorElement = document.querySelector(".sameAirportError")

        if(airportMissingError){
            if(!FROM_AIRPORTS.length){
                fromAirportError.style.display = "block"
            }

            if(!TO_AIRPORTS.length){
                toAirportError.style.display = "block"
            }
        }

        const allChildrenSelectEl = document.querySelectorAll(".each-child select")
        const infantErrorElement = document.querySelector(".infantError")
        const travellerErrorElement = document.querySelector(".childrenAgeError")
            
        let infants = 0
        for(let i = 0; i < allChildrenSelectEl.length; i++){
            if(allChildrenSelectEl[i].value === "0" || allChildrenSelectEl[i].value === "1" || allChildrenSelectEl[i].value === "2"){
                infants++
    
                if(infants > adultPassengers){
                    infantError = true
                    childrenAgeError = true

                    travellerErrorElement.style.display = "block"
                    infantErrorElement.style.display = "flex"
                }
            }

            if(allChildrenSelectEl[i].value === ""){
                childrenAgeError = true

                travellerErrorElement.style.display = "block"
            }
        }

        const dateErrorElement = document.querySelector(".datesError")
        if(datesError){
            dateErrorElement.style.display = "block"
        }
    }
})

const newElemnetsSkeleton = () =>{
    const mainTitle = document.querySelector(".el-wrap .title")
    const mainSmall = document.querySelector(".el-wrap .small")
    const initialFlightContent = document.querySelector(".initial-flights-content")

    mainTitle.innerHTML = ``
    mainSmall.innerHTML = ``
    initialFlightContent.innerHTML = `
    <div class="content-wrapper">
        
        <div class="filters-wrapper">
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
            <div class="filter"> <div class="long"></div> <div class="short"></div> </div>
        </div>

        <div class="result-flights-wrapper">
            <div class="best-fast-cheap-wrapper">
                <div class="sort best selected">
                    <span class="section-text">Best</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div>
                <div class="sort cheapest">
                    <span class="section-text">Cheapest</span>
                </div>
                <div class="sort fastest">
                    <span class="section-text">Fastest</span>
                </div>
                <div class="hover-el-best-cheap"></div>
                <span class="best-more-info">We look at the price, travel time, number of stops and baggage allowance to determine which options you might like best.</span>
            </div>
            

            <div class="all-flights">
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    `

    const moreInfo = document.querySelector(".best-more-info")
    const hoverSVG = document.querySelector(".best svg")

    let timeoutId

    hoverSVG.addEventListener("mouseover", (e)=>{
        e.stopPropagation()
        moreInfo.classList.add("show")

        clearTimeout(timeoutId)
    })

    hoverSVG.addEventListener("mouseleave", (e)=>{
        e.stopPropagation()

        timeoutId = setTimeout(() => {
            moreInfo.classList.remove("show")
            moreInfo.classList.add("hide")

            moreInfo.addEventListener("animationend", ()=>{
                moreInfo.classList.remove("hide")
            })
        }, 200);
    })

    moreInfo.addEventListener("mouseover", ()=>{
        clearTimeout(timeoutId)
    })

    moreInfo.addEventListener("mouseleave", ()=>{
        timeoutId = setTimeout(() => {
            moreInfo.classList.remove("show")

            moreInfo.classList.add("hide")

            moreInfo.addEventListener("animationend", ()=>{
                moreInfo.classList.remove("hide")
            })
        }, 200);
    })
}

const displayFlights = (flightsData) =>{
    //if there are no reseults from the search display a different screen
    if(!flightsData.length){
        const contentWrapper = document.querySelector(".content-wrapper")
        contentWrapper.innerHTML = `
        <div class="no-results-screen">
            <img src="./images/no-results.png" class="no-result-flights"/>
            <span>We didn't find any flights that match your criteria</span>
        </div>
        `
        return
    }

    //if we find flights for one location but not the other
    flightsData = flightsData.filter(element => element !== undefined)

    //console.log(flightsData)

    const filterWrapper = document.querySelector(".filters-wrapper")
    filterWrapper.innerHTML = `
    <div class="all-filters">
        <div>
            <span class="filter-bold">Filters</span>
            <span class="reset-all">Reset all</span>
        </div>
        <span class="filter-small">Showing ${flightsData.length} results</span>
    </div>
    <div class="airlines-filter-wrapper">
        <div>
            <span class="airlines-filter-bold">Airlines</span>
            <span class="reset-airlines">Reset</span>
        </div>
        <div class="all-airlines">

        </div>
    </div>
    `
    const allAirlines = []
    let filteredAirlines = []

    const checkForDupes = (airlineCode) =>{
        for(let i = 0; i < allAirlines.length; i++){
            if(airlineCode === allAirlines[i]){
                return true 
            }
        }
        return false
    }


    //console.log(flightsData)
    const allAirlinesWrap = document.querySelector(".all-airlines")
    for(let i = 0; i < flightsData.length; i++){
        if(!allAirlines.length || !checkForDupes(flightsData[i].validatingAirlineCodes[0])){
            const airline = document.createElement("div")
            airline.innerHTML = `
            <div class="square-airline selected">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
            </div>
            <span class="airline-name">${flightsData[i].validatingAirlineCodes[0]}</span>
            <span class="only-this">Only this airline</span>
            `
            airline.classList.add("airline")
            allAirlinesWrap.appendChild(airline)

            allAirlines.push(flightsData[i].validatingAirlineCodes[0])
        }
    }

    //getting the shortest and longest flight times
    const shortestLongestTimes = () =>{
        let shortestTime = Number(flightsData[0].itineraries[0].duration.split("PT")[1]?.split("H")[0])
        let longestTime = Number(flightsData[0].itineraries[0].duration.split("PT")[1]?.split("H")[0])

        for(let i = 0; i < flightsData.length; i++){
            for(let j = 0; j < flightsData[i].itineraries.length; j++){
                
                if(Number(flightsData[i].itineraries[j].duration.split("PT")[1]?.split("H")[0]) > longestTime){
                    
                    longestTime = Number(flightsData[i].itineraries[j].duration.split("PT")[1]?.split("H")[0])
                
                }else if(Number(flightsData[i].itineraries[j].duration.split("PT")[1]?.split("H")[0]) < shortestTime){

                    shortestTime = Number(flightsData[i].itineraries[j].duration.split("PT")[1]?.split("H")[0])
                }
            }
        }

        return [shortestTime, longestTime]
    }
    //shortestLongestTimes()

    //console.log(flightsData)

    if(allAirlines.length > 5){
        filterWrapper.innerHTML += `
        <div class="show-more">
            <span>Show all</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </div>
        `
    }
    
    filterWrapper.innerHTML += `
    <div class="duration-filter-wrap">
        <div>
            <span class="duration-bold">Duration</span>
            <span class="duration-reset">Reset</span>
        </div>
        <div>
            <span>Maximum travel time</span>
            <span class="time-text">${shortestLongestTimes()[1]} hours</span>
        </div>

        <div class="slider-wrap">
            <input id="duration-slider" type="range" min="${shortestLongestTimes()[0]}" max="${shortestLongestTimes()[1]}" value="${shortestLongestTimes()[1]}"/>
            <div class="fillElement"></div>
        </div>
    </div>
    `

    const airlineEl = document.querySelectorAll(".airline")
    const onlyThis = document.querySelectorAll(".only-this")

    const airlineNameEl = document.querySelectorAll(".airline-name")
    const allCheckboxes = document.querySelectorAll(".square-airline")

    const resetAirlines = document.querySelector(".reset-airlines")
    
    //resetting all filters
    const resetAll = document.querySelector(".reset-all")

    resetAll.addEventListener("click", ()=>{
        rangeInput.value = rangeInput.max

        resetAll.style.display = "none"

        durationReset.style.display = "none"

        fillElement.style.width = `100%`

        const durationSpan = document.querySelector(".time-text").textContent = `${rangeInput.value} hours`

        filteredAirlines = []
        resetAirlines.style.display = "none"

        allCheckboxes.forEach((checkbox) =>{
            checkbox.classList.add("selected")
            checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
        })

        displayingAllFlights()
    })

    //function adding removing classes and filtering the airlines
    const airlinesFiltering = (idx) => {
        filteredAirlines = []
        allCheckboxes[idx].classList.toggle("selected")
    
        if(allCheckboxes[idx].classList.contains("selected")){
            allCheckboxes[idx].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
        }else {
            allCheckboxes[idx].innerHTML = ``
        }

        for(let i = 0; i < airlineNameEl.length; i++){
            if(allCheckboxes[i].classList.contains("selected")){
                filteredAirlines.push(airlineNameEl[i].textContent)
            }
        }

        //console.log(filteredAirlines)

        for(let i = 0; i < airlineNameEl.length; i++){
            if(!allCheckboxes[i].classList.contains("selected")){
                resetAirlines.style.display = "block"
                resetAll.style.display = "block"

                break
            }else{
                resetAirlines.style.display = "none"

                if(rangeInput.value !== rangeInput.max){
                    resetAll.style.display = "block"
                }else{
                    resetAll.style.display = "none"
                }
            }
        }
    }

    //adding removing the visibility of the only this filter
    airlineEl.forEach((airline, idx) =>{
        airline.addEventListener("mouseover", ()=>{
            onlyThis[idx].style.display = "block"
        })
    
        airline.addEventListener("mouseleave", ()=>{
            onlyThis[idx].style.display = "none"
        })
    })

    //adding and removing airlines based on click on the name
    airlineNameEl.forEach((airlineName, idx) =>{
        airlineName.addEventListener("click", () =>{
            airlinesFiltering(idx)
            displayingAllFlights()
        })
    })
    //or checkbox
    allCheckboxes.forEach((checkbox, idx) =>{
        checkbox.addEventListener("click", () =>{
            airlinesFiltering(idx)
            displayingAllFlights()
        })
    })

    //logic for only this airline
    onlyThis.forEach((onlyAirline, idx) =>{
        onlyAirline.addEventListener("click", ()=>{
            allCheckboxes.forEach((checkbox) => {
                checkbox.classList.remove("selected")
                checkbox.innerHTML = ``
            })
    
            allCheckboxes[idx].classList.add("selected")
            allCheckboxes[idx].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
    
            filteredAirlines = [airlineNameEl[idx].textContent]
    
            //console.log(filteredAirlines)

            resetAirlines.style.display = "block"
            resetAll.style.display = "block"

            displayingAllFlights()
        })
    })

    //resetting the airlines filter using reset button
    resetAirlines.addEventListener("click", ()=>{
        filteredAirlines = []
        resetAirlines.style.display = "none"

        allCheckboxes.forEach((checkbox) =>{
            checkbox.classList.add("selected")
            checkbox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
        })

        if(rangeInput.value === rangeInput.max){
            resetAll.style.display = "none"
        }

        displayingAllFlights()
    })

    //duretion filtering
    const durationReset = document.querySelector(".duration-reset")

    const rangeInput = document.querySelector("#duration-slider")
    const fillElement = document.querySelector(".fillElement")

    const range = rangeInput.max - rangeInput.min 
    const finalValue = ((rangeInput.value - rangeInput.min) / range) * 100
    fillElement.style.width = `${finalValue}%`

    //the amount of space needed to be filled and update the text element
    rangeInput.addEventListener("input", (e)=>{
        const durationSpan = document.querySelector(".time-text").textContent = `${rangeInput.value} hours`
        
        const range = rangeInput.max - rangeInput.min 
        const finalValue = ((rangeInput.value - rangeInput.min) / range) * 100
        fillElement.style.width = `${finalValue}%`

        if(rangeInput.value !== rangeInput.max){
            durationReset.style.display = "block"
            resetAll.style.display = "block"
        }else{
            durationReset.style.display = "none"

            for(let i = 0; i < airlineNameEl.length; i++){
                if(!allCheckboxes[i].classList.contains("selected")){
                    resetAll.style.display = "block"
                    break
                }else{
                    resetAll.style.display = "none"
                }
            }
        }

        displayingAllFlights()
    })

    durationReset.addEventListener("click", ()=>{
        rangeInput.value = rangeInput.max

        durationReset.style.display = "none"

        fillElement.style.width = `100%`

        const durationSpan = document.querySelector(".time-text").textContent = `${rangeInput.value} hours`

        for(let i = 0; i < airlineNameEl.length; i++){
            if(!allCheckboxes[i].classList.contains("selected")){
                resetAll.style.display = "block"
                break
            }else{
                resetAll.style.display = "none"
            }
        }

        displayingAllFlights()
    })

    if(allAirlines.length > 5){
        const showMore = document.querySelector(".show-more")
        const showMoreSVG = document.querySelector(".show-more svg")
        const showMoreLess = document.querySelector(".show-more span")
        const allAirlinesWrap = document.querySelector(".all-airlines")

        showMore.addEventListener("click", () =>{
            showMoreSVG.classList.toggle("flipped")
            allAirlinesWrap.classList.toggle("showing")
            
            if(showMoreSVG.classList.contains("flipped")){
                showMoreLess.textContent = `Show less`
            }else{
                showMoreLess.textContent = `Show all`
            }
        })
    }

    //switching between the sorting by user click
    const allSortMethods = document.querySelectorAll(".sort")
    allSortMethods.forEach((sort) =>{
        sort.addEventListener("click", ()=>{
            if(!sort.classList.contains("selected")){
                //remove all classes first
                allSortMethods.forEach(method => method.classList.remove("selected"))

                sort.classList.add("selected")

                //move the hover element
                const hoverEl = document.querySelector(".hover-el-best-cheap")
                hoverEl.style.width = `${sort.clientWidth}px`
                hoverEl.style.transform = `translateX(${sort.offsetLeft}px)`

                displayingAllFlights()
            }
        })
    })

    //adding the flight elements with events
    //will be done with a function
    //take into account the filters
    const displayingAllFlights = () =>{
        //have a skeleton appear really quick here
        const wrapper = document.querySelector(".all-flights")
        wrapper.innerHTML = `
        <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
                <div class="flight">
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="long"></div>
                        <div class="short"></div>
                    </div>
                    <div>
                        <div class="square"></div>
                        <div class="medium"></div>
                    </div>
                </div>
        `

        const sortCondition = document.querySelector(".sort.selected span").textContent
        
        //flight data after airline filters
        let arrayAfterFilters = []

        if(filteredAirlines.length > 0){
            arrayAfterFilters = flightsData.filter((data) =>{
                return filteredAirlines.includes(data.validatingAirlineCodes[0])
            })
        }else{
            arrayAfterFilters = flightsData.slice()
        }

        //flight data after flight time filters
        arrayAfterFilters = arrayAfterFilters.filter((data) =>{

            let duration1 = Number(data.itineraries[0].duration.split("PT")[1]?.split("H")[0])
            
            if(data.itineraries.length > 1){
                let duration2 = Number(data.itineraries[1].duration.split("PT")[1]?.split("H")[0])
                
                return duration1 <= rangeInput.value && duration2 <= rangeInput.value
            }else{
                return duration1 <= rangeInput.value
            }
        })

        const filterSmall = document.querySelector(".filter-small").textContent = `Showing ${arrayAfterFilters.length} results`

        const hoverEl = document.querySelector(".hover-el-best-cheap")
        //sorting the data after the filters and based on what user has picked
        if(sortCondition === "Best"){
            arrayAfterFilters.sort((a, b) =>{
                let duration1 = Number(a.itineraries[0].duration.split("PT")[1]?.split("H")[0])
                let duration2

                let durationB = Number(b.itineraries[0].duration.split("PT")[1]?.split("H")[0])
                let duration2B

                let finalDurationA = duration1
                let finalDurationB = durationB

                if(a.itineraries.length > 1){
                    duration2 = Number(a.itineraries[1].duration.split("PT")[1]?.split("H")[0])

                    if(duration1 <= duration2){
                        finalDurationA = duration1
                    }else{
                        finalDurationA = duration2
                    }
                }

                if(b.itineraries.length > 1){
                    duration2B = Number(b.itineraries[1].duration.split("PT")[1]?.split("H")[0])

                    if(durationB <= duration2B){
                        finalDurationB = durationB
                    }else{
                        finalDurationB = duration2B
                    }
                }

                if(finalDurationA !== finalDurationB){
                    return finalDurationA - finalDurationB
                }

                //else sort by price
                return a.price.total - b.price.total
            })
            hoverEl.style.borderRadius = `0 0 0 8px`

        }else if(sortCondition === "Cheapest"){
            arrayAfterFilters.sort((a, b) =>{
                return a.price.total - b.price.total
            })
            hoverEl.style.borderRadius = `0`
        }else if(sortCondition === "Fastest"){
            arrayAfterFilters.sort((a, b) =>{
                let duration1 = Number(a.itineraries[0].duration.split("PT")[1]?.split("H")[0])
                let duration2

                let durationB = Number(b.itineraries[0].duration.split("PT")[1]?.split("H")[0])
                let duration2B

                let finalDurationA = duration1
                let finalDurationB = durationB

                if(a.itineraries.length > 1){
                    duration2 = Number(a.itineraries[1].duration.split("PT")[1]?.split("H")[0])

                    if(duration1 <= duration2){
                        finalDurationA = duration1
                    }else{
                        finalDurationA = duration2
                    }
                }

                if(b.itineraries.length > 1){
                    duration2B = Number(b.itineraries[1].duration.split("PT")[1]?.split("H")[0])

                    if(durationB <= duration2B){
                        finalDurationB = durationB
                    }else{
                        finalDurationB = duration2B
                    }
                }

                return finalDurationA - finalDurationB
            })
            hoverEl.style.borderRadius = `0 0 8px 0`
        }

        //console.log(arrayAfterFilters)
        wrapper.innerHTML = ``
        for(let i = 0; i < arrayAfterFilters.length; i++){
            const flightCard = document.createElement("div")
            flightCard.classList.add("flight-card")
            wrapper.appendChild(flightCard)

            flightCard.innerHTML = `
                <div class="flight-details"></div>
                <div class="price-wrap">
                    <span class="total-bold">${arrayAfterFilters[i].price.total} ${arrayAfterFilters[i].price.currency}</span>
                    <span class="text-flights">Total price for all travellers</span>
                    <div class="details-button">
                        <span>View details</span>
                    </div>
                </div>
            `
            //console.log(arrayAfterFilters[i])

            const flightDetailsWrap = document.querySelectorAll(".flight-details")
            for(let j = 0; j < arrayAfterFilters[i].itineraries.length; j++){
                const eachDetailWrap = document.createElement("div")
                eachDetailWrap.classList.add("each-detail")
                flightDetailsWrap[i].appendChild(eachDetailWrap)

                //string to return for amount of stops
                const amountOfStops = (segment) =>{
                    if(segment.length === 1){
                        return `Direct`
                    }else if(segment.length === 2){
                        return `1 stop`
                    }else{
                        return `${segment.length - 1} stops`
                    }
                }

                const numberOfStops = (segment) =>{
                    if(segment.length === 1){
                        return ""
                    }else if(segment.length === 2){
                        return `<div class="little-ball"></div>`
                    }else if(segment.length === 3){
                        return `<div class="little-ball"></div>
                                <div class="little-ball"></div>`
                    }
                }

                eachDetailWrap.innerHTML = `
                    <div class="airline-wrap">
                        <img src="./images/${arrayAfterFilters[i].itineraries[j].segments[0].carrierCode}.png"/>
                        <span>${arrayAfterFilters[i].itineraries[j].segments[0].carrierCode}</span>
                    </div>
                    <div class="flight-details-departure">
                        <span>${arrayAfterFilters[i].itineraries[j].segments[0].departure.at.split("T")[1].slice(0, -3)}</span>
                        <span>${arrayAfterFilters[i].itineraries[j].segments[0].departure.iataCode} ・ ${new Date(arrayAfterFilters[i].itineraries[j].segments[0].departure.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric"})}</span>
                    </div>

                    <div class="direct-stops">
                        <span>${arrayAfterFilters[i].itineraries[j].duration.replace(/PT(?:(\d+)H)?(?:(\d+)M)?/, (_, h, m) => `${h || 0}h ${m || 0}m`)}</span>
                        <div class="number-of-stops">
                            <div class="straight-line"></div>
                            <div class="balls-wrap">${numberOfStops(arrayAfterFilters[i].itineraries[j].segments)}</div>
                        </div>
                        <span>${amountOfStops(arrayAfterFilters[i].itineraries[j].segments)}</span>
                    </div>

                    <div class="flight-details-arrival">
                        <span>${arrayAfterFilters[i].itineraries[j].segments[arrayAfterFilters[i].itineraries[j].segments.length - 1].arrival.at.split("T")[1].slice(0, -3)}</span>
                        <span>${arrayAfterFilters[i].itineraries[j].segments[arrayAfterFilters[i].itineraries[j].segments.length - 1].arrival.iataCode} ・ ${new Date(arrayAfterFilters[i].itineraries[j].segments[arrayAfterFilters[i].itineraries[j].segments.length - 1].arrival.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric"})}</span>
                    </div>
                `
            }

            //displaying more details about the flight
            const moreDetailsBtn = document.querySelectorAll(".details-button")
            moreDetailsBtn[i].addEventListener("click", async ()=>{
                const flightMoreDetails = document.createElement("div")
                flightMoreDetails.classList.add("more-details")
                wrapper.appendChild(flightMoreDetails)

                document.body.style.overflowY = "hidden"

                const convertCityToAirport = async (code) =>{
                    const API_KEY = "CvxWuBqQBkNbUps7dGZwoQ==UER2qHHtdA2hfmhC"
                    const request = await fetch(`https://api.api-ninjas.com/v1/airports?iata=${code}`, {
                        headers: {
                            'X-Api-Key': API_KEY
                        }
                    })
                
                    const response = await request.json()
                    //console.log(response)
                    return response[0].city
                }

                const amountOfStops = (segment) =>{
                    if(segment.length === 1){
                        return `Direct`
                    }else if(segment.length === 2){
                        return `1 stop`
                    }else{
                        return `${segment.length - 1} stops`
                    }
                }
                
                const city = await convertCityToAirport(arrayAfterFilters[i].itineraries[0].segments[arrayAfterFilters[i].itineraries[0].segments.length - 1].arrival.iataCode)

                flightMoreDetails.innerHTML = `
                <div class="details-content">
                    <div class="top-text">
                        <span>Your flight to ${city}</span>
                        <div class="close-element">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </div>
                    </div>
                    <div class="bottom-wrap">

                    </div>
                </div>
                `
                const bottomWrap = document.querySelector(".bottom-wrap")
                for(let j = 0; j < arrayAfterFilters[i].itineraries.length; j++){
                    const flightCity = await convertCityToAirport(arrayAfterFilters[i].itineraries[j].segments[arrayAfterFilters[i].itineraries[j].segments.length - 1].arrival.iataCode)
                    
                    bottomWrap.innerHTML += `
                        <div class="flight-to-wrap">
                            <span>Flight to ${flightCity}</span>
                            <span>${amountOfStops(arrayAfterFilters[i].itineraries[j].segments)} ・ ${arrayAfterFilters[i].itineraries[j].duration.replace(/PT(?:(\d+)H)?(?:(\d+)M)?/, (_, h, m) => `${h || 0}h ${m || 0}m`)}</span>
                        </div>
                    `
                    if(arrayAfterFilters[i].itineraries[j].segments.length > 1){
                        //different structure of balls and lines div as well as layover segment
                        
                        for(let s = 0; s < arrayAfterFilters[i].itineraries[j].segments.length; s++){
                            const airportName = await convertCityToAirport(arrayAfterFilters[i].itineraries[j].segments[s].departure.iataCode)
                            const airportNameArrival = await convertCityToAirport(arrayAfterFilters[i].itineraries[j].segments[s].arrival.iataCode)

                            bottomWrap.innerHTML += `
                            <div class="detailed-view-wrap">
                                <div class="balls-lines-wrap">
                                    <div class="ball"></div>
                                    <div class="line"></div>
                                    <div class="ball"></div>
                                </div>
                                <div class="airports-times-wrap">
                                    <div>
                                        <span class="date-duration">${new Date(arrayAfterFilters[i].itineraries[j].segments[s].departure.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric", weekday: "short"})} ・ ${arrayAfterFilters[i].itineraries[j].segments[s].departure.at.split("T")[1].slice(0, -3)}</span>
                                        <span class="iata-airport">${arrayAfterFilters[i].itineraries[j].segments[s].departure.iataCode} ・ ${airportName}</span>
                                    </div>

                                    <div>
                                        <span class="date-duration">${new Date(arrayAfterFilters[i].itineraries[j].segments[s].arrival.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric", weekday: "short"})} ・ ${arrayAfterFilters[i].itineraries[j].segments[s].arrival.at.split("T")[1].slice(0, -3)}</span>
                                        <span class="iata-airport">${arrayAfterFilters[i].itineraries[j].segments[s].arrival.iataCode} ・ ${airportNameArrival}</span>
                                    </div>
                                </div>
                                <div class="airline-times">
                                    <img src="./images/${arrayAfterFilters[i].itineraries[j].segments[s].carrierCode}.png" />
                                    <div>
                                        <span>${arrayAfterFilters[i].itineraries[j].segments[s].carrierCode}</span>
                                        <span>${arrayAfterFilters[i].travelerPricings[0].fareDetailsBySegment[0].cabin}</span>
                                        <span>Flight time ${arrayAfterFilters[i].itineraries[j].segments[s].duration.replace(/PT(?:(\d+)H)?(?:(\d+)M)?/, (_, h, m) => `${h || 0}h ${m || 0}m`)}</span>
                                    </div>
                                </div>
                            </div>
                            `

                            if(s !== arrayAfterFilters[i].itineraries[j].segments.length - 1){
                                const calculateTimeDifference = (timestamp1, timestamp2)=> {
                                    const time1 = new Date(`1970-01-01T${timestamp1}:00`)
                                    const time2 = new Date(`1970-01-01T${timestamp2}:00`)
                                
                                    let timeDifference = (time2 - time1) / (60 * 1000)
                                
                                    if (time2 < time1) {
                                        timeDifference += 24 * 60
                                    }
                                    const hours = Math.floor(timeDifference / 60)
                                    const minutes = Math.floor(timeDifference % 60)
                                
                                    if(hours > 0){
                                        return `${hours}h ${minutes}m`
                                    }else{
                                        return `${minutes}m`
                                    }
                                    
                                }
                                //console.log(calculateTimeDifference(arrayAfterFilters[i].itineraries[j].segments[0].arrival.at.split("T")[1].slice(0, -3), arrayAfterFilters[i].itineraries[j].segments[1].departure.at.split("T")[1].slice(0, -3)))
                                bottomWrap.innerHTML += `
                                    <div class="layover-wrapper">
                                        <div class="dotted-line"></div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                                            <span class="layover">Layover ${calculateTimeDifference(arrayAfterFilters[i].itineraries[j].segments[s].arrival.at.split("T")[1].slice(0, -3), arrayAfterFilters[i].itineraries[j].segments[s + 1].departure.at.split("T")[1].slice(0, -3))}</span>
                                        </div>
                                    </div>
                                `
                            }
                        }

                    }else{
                        const airportName = await convertCityToAirport(arrayAfterFilters[i].itineraries[j].segments[0].departure.iataCode)

                        bottomWrap.innerHTML += `
                            <div class="detailed-view-wrap">
                                <div class="balls-lines-wrap">
                                    <div class="ball"></div>
                                    <div class="line"></div>
                                    <div class="ball"></div>
                                </div>
                                <div class="airports-times-wrap">
                                    <div>
                                        <span class="date-duration">${new Date(arrayAfterFilters[i].itineraries[j].segments[0].departure.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric", weekday: "short"})} ・ ${arrayAfterFilters[i].itineraries[j].segments[0].departure.at.split("T")[1].slice(0, -3)}</span>
                                        <span class="iata-airport">${arrayAfterFilters[i].itineraries[j].segments[0].departure.iataCode} ・ ${airportName}</span>
                                    </div>

                                    <div>
                                        <span class="date-duration">${new Date(arrayAfterFilters[i].itineraries[j].segments[0].arrival.at.split("T")[0]).toLocaleDateString("default", {month: "short", day: "numeric", weekday: "short"})} ・ ${arrayAfterFilters[i].itineraries[j].segments[0].arrival.at.split("T")[1].slice(0, -3)}</span>
                                        <span class="iata-airport">${arrayAfterFilters[i].itineraries[j].segments[0].arrival.iataCode} ・ ${airportName}</span>
                                    </div>
                                </div>
                                <div class="airline-times">
                                    <img src="./images/${arrayAfterFilters[i].itineraries[j].segments[0].carrierCode}.png" />
                                    <div>
                                        <span>${arrayAfterFilters[i].itineraries[j].segments[0].carrierCode}</span>
                                        <span>${arrayAfterFilters[i].travelerPricings[0].fareDetailsBySegment[0].cabin}</span>
                                        <span>Flight time ${arrayAfterFilters[i].itineraries[j].segments[0].duration.replace(/PT(?:(\d+)H)?(?:(\d+)M)?/, (_, h, m) => `${h || 0}h ${m || 0}m`)}</span>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                }

                //console.log(arrayAfterFilters[i])

                bottomWrap.innerHTML += `
                    <div class="price-button">
                        <div>
                            <span>${arrayAfterFilters[i].price.total} ${arrayAfterFilters[i].price.currency}</span>
                            <span>Total price for all travelers</span>
                        </div>
                        <div class="button-select">
                            <span>Select</span>
                        </div>
                    </div>
                `

                const contentElement = document.querySelector(".details-content")
                contentElement.addEventListener("click", (e)=>{
                    e.stopImmediatePropagation()
                })

                if(contentElement.clientHeight > window.innerHeight){
                    flightMoreDetails.style.alignItems = "unset"
                }else{
                    flightMoreDetails.style.alignItems = "center"
                }

                flightMoreDetails.addEventListener("click", (e)=>{
                    flightMoreDetails.remove()
                    document.body.style.overflowY = "auto"
                })

                const closeElement = document.querySelector(".close-element")
                closeElement.addEventListener("click", ()=>{
                    flightMoreDetails.remove()
                    document.body.style.overflowY = "auto"
                })
            })
        }

        if(!arrayAfterFilters.length){
            wrapper.innerHTML = `
            <span class="no-results-after-filter">No flights match your filters - try changing them around.</span>
            <img src="./images/risk.png" class="no-results-filter-img"/>
            `
        }
    }
    displayingAllFlights()
}

//segment finished
//continue down later come back and have a look at the button event and some conditions

const fetchPhotos = async (location) =>{
    return `./images/${location.toLowerCase()}.jpg`
}

//recommended country codes
const cityCodes = [
    {code: ["Paris", "FR", "CDG"]},
    {code: ["Rome", "IT", "FCO"]},
    {code: ["London", "GB","LHR"]},
    {code: ["Barcelona", "ES", "BCN"]},
    {code: ["Madrid", "ES", "MAD"]},
    {code: ["Amsterdam", "NL", "AMS"]},
    {code: ["Milan", "IT", "MXP"]},
    {code: ["Lisbon", "PT", "LIS"]},
    {code: ["Venice", "IT", "VCE"]},
    {code: ["Brussels", "BE", "BRU"]},
    {code: ["Istanbul", "TR", "IST"]},
    {code: ["Athens", "GR", "ATH"]},
    {code: ["Mykonos", "GR", "JMK"]},
    {code: ["Munich", "DE", "MUC"]},
    {code: ["Prague", "CZ", "PRG"]},
    
]

//get the user country
const userCountry = async ()=>{
    const fetching = await fetch("http://ip-api.com/json/")
    const data = await fetching.json()

    return data
}

//function to create the elements
const popularCitiesWrap = document.querySelector(".the-cities-wrapper")
const cityElements = async () =>{
    let userCountryString = await userCountry()
    userCountryString = userCountryString.countryCode

    const filterCities = cityCodes.filter((city)=>{
        return city.code[1] !== userCountryString
    })


    //some approximate location
    let userCloseBigCity = Intl.DateTimeFormat()
    userCloseBigCity =  userCloseBigCity.resolvedOptions().timeZone.split("/")[1]


    //the dates used
    let departure = new Date(oneWeekAfter(new Date()))
    let departureForEl = departure.toLocaleDateString("default", {day: "numeric", month: "short"})

    let arrival = new Date(oneWeekAfter(new Date(departure)))
    let arrivalForEl = arrival.toLocaleDateString("default", {day: "numeric", month: "short"})

    for(let i = 0; i < filterCities.length; i++){
        const cityElements = document.createElement("div")
        cityElements.classList.add("each-city")

        popularCitiesWrap.appendChild(cityElements)

        const photoURL = await fetchPhotos(filterCities[i].code[0])
        
        //calling a different api to grab a nice quality picture
        cityElements.innerHTML = `
        <img src=${photoURL} class="city-image">
        <span class="from-to">${userCloseBigCity} to ${filterCities[i].code[0]}</span>
        <span class="city-dates">${departureForEl} - ${arrivalForEl} · Round trip</span>
        `

        cityElements.addEventListener("click", async ()=>{
            newElemnetsSkeleton()
            const getFlights = async () =>{
                const airportCode = await convertCityToAirport(userCloseBigCity)

                const ACCESS_TOKEN = await auth()

                const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=${airportCode}&destinationLocationCode=${filterCities[i].code[2]}&departureDate=${formatDateForAPI(new Date(departure))}&returnDate=${formatDateForAPI(new Date(arrival))}&adults=1&max=150`, {
                    headers: {
                        'Authorization' : `Bearer ${ACCESS_TOKEN}`
                    }
                })
                const flights = await request.json()
                
                allFlightsArray.push(flights)
            }
            //getFlights()
            //console.log(formatDateForAPI(new Date(arrival)))
            const allFlightsArray = []
            const awaitingFlights = await getFlights()
                
            displayFlights(allFlightsArray[0].data)
        })
    }
}
cityElements()

const rightCarouselBtn = document.querySelector(".carousel-right")
const leftCarouselBtn = document.querySelector(".carousel-left")

//get the inniital index
//let currentIndex = 0

//move the carousel each time there is a click
rightCarouselBtn.addEventListener("click", ()=>{
    //add logic to move the scroll
    //currentIndex++
    const allCityElelemnts = document.querySelectorAll(".each-city")
    //width used to scroll
    const elementWidth = allCityElelemnts[0].clientWidth

    //const amountToScroll = currentIndex * elementWidth

    //console.log(amountToScroll)

    popularCitiesWrap.scrollLeft += elementWidth
})

leftCarouselBtn.addEventListener("click", ()=>{
    //currentIndex--

    const allCityElelemnts = document.querySelectorAll(".each-city")
    const elementWidth = allCityElelemnts[0].clientWidth
    //const amountToScroll = currentIndex * elementWidth

    popularCitiesWrap.scrollLeft -= elementWidth
})



//add the scroll event listener to know when to remove the buttons
popularCitiesWrap.addEventListener("scroll", (e)=>{
    const leftCarouselBtn = document.querySelector(".carousel-left")
    const rightCarouselBtn = document.querySelector(".carousel-right")
    if(popularCitiesWrap.scrollLeft === 0){
        if(window.innerWidth > 950){
            leftCarouselBtn.classList.remove("show")
            leftCarouselBtn.classList.add("hide")

            leftCarouselBtn.addEventListener("animationend", ()=>{
               leftCarouselBtn.classList.remove("hide")
            })
        }
    }else {
        if(window.innerWidth > 950){
            leftCarouselBtn.classList.add("show")
        }
    }
    
    const allCityElelemnts = document.querySelectorAll(".each-city")
    //the max amount of the scroll
    const maxScroll = allCityElelemnts[allCityElelemnts.length - 1].offsetLeft + allCityElelemnts[allCityElelemnts.length - 1].clientWidth - popularCitiesWrap.clientWidth

    
    if(Math.round(popularCitiesWrap.scrollLeft) == maxScroll){
        if(window.innerWidth > 950){
            rightCarouselBtn.classList.remove("show")
            rightCarouselBtn.classList.add("hide")

            rightCarouselBtn.addEventListener("animationend", ()=>{
                rightCarouselBtn.classList.remove("hide")
            })
        }
    }else{
        if(window.innerWidth > 950){
            rightCarouselBtn.classList.add("show")
        }
    }

    //set the index everytime a manual scroll is made
    //currentIndex = Math.round(popularCitiesWrap.scrollLeft / allCityElelemnts[0].clientWidth)
})

window.addEventListener("resize", ()=>{
    const leftCarouselBtn = document.querySelector(".carousel-left")
    if(leftCarouselBtn === null){
        return
    }
    const rightCarouselBtn = document.querySelector(".carousel-right")

    if(window.innerWidth > 950 && popularCitiesWrap.scrollLeft !== 0){
        leftCarouselBtn.classList.add("show")
    }else{
        leftCarouselBtn.classList.remove("show")
    }

    if(window.innerWidth > 950 && trendingCityWrap.scrollLeft !== 0){
        trendingCarouselLeft.classList.add("show")
    }else{
        trendingCarouselLeft.classList.remove("show")
    }

    const allCityElelemnts = document.querySelectorAll(".each-city")
    const maxScroll = allCityElelemnts[allCityElelemnts.length - 1].offsetLeft + allCityElelemnts[allCityElelemnts.length - 1].clientWidth - popularCitiesWrap.clientWidth

    if(window.innerWidth > 950 && Math.round(popularCitiesWrap.scrollLeft) < maxScroll){
        rightCarouselBtn.classList.add("show")
    }else{
        rightCarouselBtn.classList.remove("show")
    }

    const allCityTrending = document.querySelectorAll(".each-city-trending")
    const maxScrollTrending = allCityTrending[allCityTrending.length - 1].offsetLeft + allCityTrending[allCityTrending.length - 1].clientWidth - trendingCityWrap.clientWidth

    if(window.innerWidth > 950 && Math.round(trendingCityWrap.scrollLeft) < maxScrollTrending){
        trendingCarouselRight.classList.add("show")
    }else {
        trendingCarouselRight.classList.remove("show")
    }
})


const trendingCityWrap = document.querySelector(".trending-each-city-wrapper")
const cityCodesTrending = [
    {code: ["Porto", "PT", "OPO"]},
    {code: ["Dubai", "AE", "DXB"]},
    {code: ["Marrakech", "MA", "RAK"]},
    {code: ["Palma", "ES", "PMI"]},
    {code: ["Casablanca", "MA", "CMN"]},
    {code: ["Malaga", "ES", "APG"]},
    {code: ["Naples", "IT", "NAP"]},
    {code: ["Berlin", "DE", "BER"]},
    {code: ["Budapest", "HU", "BUD"]},
    {code: ["Vatican", "VA", "FCO"]},
    {code: ["Thessaloniki", "GR", "SKG"]},
    {code: ["Vienna", "AT", "VIE"]},
    {code: ["Bucharest", "RO", "OTP"]},
]

//creating the elements for the trending cities
const trendingCityElements = async () =>{
    const trendingCities = []

    let apiRes = await userCountry()
    let userCountryString = apiRes.country 
    let userCountryCode = apiRes.countryCode

    const elementSpan = document.querySelector(".trending-cities-small")
    elementSpan.innerHTML = `Book flights to a destination popular with travellers from ${userCountryString}`
    
    const filterCities = cityCodesTrending.filter((city)=>{
        return city.code[1] !== userCountryCode
    })

    let userCloseBigCity = Intl.DateTimeFormat()
    userCloseBigCity =  userCloseBigCity.resolvedOptions().timeZone.split("/")[1]


    let departure = new Date(oneWeekAfter(new Date()))
    let departureForEl = departure.toLocaleDateString("default", {day: "numeric", month: "short"})

    let arrival = new Date(oneWeekAfter(new Date(departure)))
    let arrivalForEl = arrival.toLocaleDateString("default", {day: "numeric", month: "short"})

    for(let i = 0; i < filterCities.length; i++){
        const cityElements = document.createElement("div")
        cityElements.classList.add("each-city-trending")

        trendingCityWrap.appendChild(cityElements)

        const photoURL = await fetchPhotos(filterCities[i].code[0])
        
        //calling a different api to grab a nice quality picture
        cityElements.innerHTML = `
        <img src=${photoURL} class="city-image">
        <span class="from-to">${filterCities[i].code[0]}</span>
        <span class="city-dates">${departureForEl} - ${arrivalForEl} · Round trip</span>
        `
        cityElements.addEventListener("click", async () =>{
            newElemnetsSkeleton()
            const getFlights = async () =>{
                const airportCode = await convertCityToAirport(userCloseBigCity)
                const ACCESS_TOKEN = await auth()
    
                const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=${airportCode}&destinationLocationCode=${filterCities[i].code[2]}&departureDate=${formatDateForAPI(new Date(departure))}&returnDate=${formatDateForAPI(new Date(arrival))}&adults=1&max=150`, {
                    headers: {
                        'Authorization' : `Bearer ${ACCESS_TOKEN}`
                    }
                })
                const flights = await request.json()
                
                allFlightsArray.push(flights)
            }
            //getFlights()
            //console.log(formatDateForAPI(new Date(departure)))

            const allFlightsArray = []
            const awaitingFlights = await getFlights()
                
            displayFlights(allFlightsArray[0].data)
        })
    }
}
trendingCityElements()

const trendingCarouselLeft = document.querySelector(".trending-carousel-left")
const trendingCarouselRight = document.querySelector(".trending-carousel-right")

let trendingCurrentIndex = 0

trendingCarouselRight.addEventListener("click", ()=>{
    trendingCurrentIndex++
    const allCityElelemnts = document.querySelectorAll(".each-city-trending")
    //width used to scroll
    const elementWidth = allCityElelemnts[0].clientWidth

    const amountToScroll = elementWidth

    //console.log(amountToScroll)

    trendingCityWrap.scrollLeft += elementWidth
})
trendingCarouselLeft.addEventListener("click", ()=>{
    trendingCurrentIndex--

    const allCityElelemnts = document.querySelectorAll(".each-city-trending")
    const elementWidth = allCityElelemnts[0].clientWidth
    const amountToScroll = trendingCurrentIndex * elementWidth

    trendingCityWrap.scrollLeft -= elementWidth
})

trendingCityWrap.addEventListener("scroll", ()=>{
    const leftCarouselBtn = document.querySelector(".trending-carousel-left")
    const rightCarouselBtn = document.querySelector(".trending-carousel-right")
    if(trendingCityWrap.scrollLeft === 0){
        if(window.innerWidth > 950){
            leftCarouselBtn.classList.remove("show")
            leftCarouselBtn.classList.add("hide")

            leftCarouselBtn.addEventListener("animationend", ()=>{
               leftCarouselBtn.classList.remove("hide")
            })
        }
    }else {
        if(window.innerWidth > 950){
            leftCarouselBtn.classList.add("show")
        }
    }
    
    const allCityElelemnts = document.querySelectorAll(".each-city-trending")
    //the max amount of the scroll
    const maxScroll = allCityElelemnts[allCityElelemnts.length - 1].offsetLeft + allCityElelemnts[allCityElelemnts.length - 1].clientWidth - trendingCityWrap.clientWidth

    
    if(Math.round(trendingCityWrap.scrollLeft) == maxScroll){
        if(window.innerWidth > 950){
            rightCarouselBtn.classList.remove("show")
            rightCarouselBtn.classList.add("hide")

            rightCarouselBtn.addEventListener("animationend", ()=>{
                rightCarouselBtn.classList.remove("hide")
            })
        }
    }else{
        if(window.innerWidth > 950){
            rightCarouselBtn.classList.add("show")
        }
    }

    //set the index everytime a manual scroll is made
    trendingCurrentIndex = Math.round(trendingCityWrap.scrollLeft / allCityElelemnts[0].clientWidth)
})



if(window.innerWidth < 950){
    rightCarouselBtn.classList.remove("show")
    trendingCarouselRight.classList.remove("show")
}

const continentLocations = [
    [
        {code: ["Paris", "FR", "CDG"]},
        {code: ["Rome", "IT", "FCO"]},
        {code: ["London", "GB","LHR"]},
        {code: ["Barcelona", "ES", "BCN"]},
        {code: ["Madrid", "ES", "MAD"]},
        {code: ["Amsterdam", "NL", "AMS"]},
        {code: ["Milan", "IT", "MXP"]},
        {code: ["Lisbon", "PT", "LIS"]},
    ],
    [
        {code: ["Bangkok", "TH", "BKK"]},
        {code: ["Hong Kong", "CN", "HKG"]},
        {code: ["Singapore", "SG", "SIN"]},
        {code: ["Dubai", "AE", "DXB"]},
        {code: ["Tokyo", "JP", "HND"]},
        {code: ["Seoul", "KR", "ICN"]},
        {code: ["Shanghai", "CN", "PVG"]},
        {code: ["Mumbai", "IN", "BOM"]},
    ],
    [
        {code: ["Rio de Janeiro", "BR", "GIG"]},
        {code: ["Buenos Aires", "AR", "EZE"]},
        {code: ["Cusco", "PE", "CUZ"]},
        {code: ["Santiago", "CL", "SCL"]},
        {code: ["Sao Paulo", "BR", "GRU"]},
        {code: ["Lima", "PE", "LIM"]},
        {code: ["Bogota", "CO", "BOG"]},
    ],
    [
        {code: ["New York City", "US", "JFK"]},
        {code: ["Miami", "US", "MIA"]},
        {code: ["Los Angeles", "US", "LAX"]},
        {code: ["Las Vegas", "US", "LAS"]},
        {code: ["Cancun", "MX", "CUN"]},
        {code: ["Toronto", "CA", "YYZ"]},
        {code: ["Vancouver", "CA", "YVR"]},
        {code: ["San Francisco", "US", "SFO"]},
    ],
    [
        {code: ["Dakar", "SN", "DSS"]},
        {code: ["Accra", "GH", "ACC"]},
        {code: ["Casablanca", "MA", "CMN"]},
        {code: ["Zanzibar City", "TZ", "ZNZ"]},
        {code: ["Johannesburg", "ZA", "JNB"]},
        {code: ["Cairo", "EG", "CAI"]},
        {code: ["Cape Town", "ZA", "CPT"]},
        {code: ["Marrakech", "MA", "RAK"]},
    ],
    [
        {code: ["Melbourne", "AU", "MEL"]},
        {code: ["Sydney", "AU", "SYD"]},
        {code: ["Darwin", "AU", "DRW"]},
        {code: ["Auckland", "NZ", "AKL"]},
        {code: ["Brisbane", "AU", "BNE"]},
        {code: ["Perth", "AU", "PER"]},
        {code: ["Canberra", "AU", "CBR"]},
    ],
]



//new segment
const hoverEl = document.querySelector(".hover-element")
const continentPicked = document.querySelectorAll(".continent")


const convertCityToAirport = async (city) =>{
    const API_KEY = "CvxWuBqQBkNbUps7dGZwoQ==UER2qHHtdA2hfmhC"
    const request = await fetch(`https://api.api-ninjas.com/v1/airports?city=${city}`, {
        headers: {
            'X-Api-Key': API_KEY
        }
    })

    const response = await request.json()

    return response[0].iata
}

const cheapestFlightsWorldwide = async (array) =>{
    //loop over the days from the next week to see the cheapest flight
    const currentDate = new Date()
    const weekAfterStart = new Date(oneWeekAfter(currentDate))
    const weekAfterEnd = new Date(oneWeekAfter(weekAfterStart))

    let userCloseBigCity = Intl.DateTimeFormat()
    userCloseBigCity = userCloseBigCity.resolvedOptions().timeZone.split("/")[1]

    const filterArray = array.filter((city) =>{
        return userCloseBigCity !== city.code[0]
    })

    const airportCode = await convertCityToAirport(userCloseBigCity)

    const getFlights = async (datestring, returnDateString, airport, iataCode) =>{
        const ACCESS_TOKEN = await auth()

        const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=${iataCode}&destinationLocationCode=${airport}&departureDate=${datestring}&returnDate=${returnDateString}&adults=1&max=5`, {
            headers: {
                'Authorization' : `Bearer ${ACCESS_TOKEN}`
            }
        })
        const flights = await request.json()

        //find the cheapest flight out out the array
        let cheapest = Number(flights.data[0].price.total)

        for(let i = 0; i < flights.data.length; i++){
            if(Number(flights.data[i].price.total) < cheapest){
                cheapest = Number(flights.data[i].price.total)
                //console.log(flights.data[i])
            }
            //console.log(flights.data[i])
        }

        return cheapest
    } 

    const cheapestFlightsWrapper = document.querySelector(".cheapest-worldwide-wrapper")
    cheapestFlightsWrapper.innerHTML = ``

    const formattedDate = `${weekAfterStart.getFullYear()}-${(weekAfterStart.getMonth() + 1).toString().padStart(2, "0")}-${weekAfterStart.getDate().toString().padStart(2, "0")}`
    const weekAfter = formatDateForAPI(new Date (oneWeekAfter(formattedDate)))
    //now run a loop over the city array and create the elements
    //then api request to find the cheapest flight
    //console.log(formattedDate, weekAfter)

    for(let j = 0; j < filterArray.length; j++){
        const childEl = document.createElement("div")
        childEl.classList.add("each-cheap")
        cheapestFlightsWrapper.appendChild(childEl)

        const photoURL = await fetchPhotos(filterArray[j].code[0])

        childEl.innerHTML = `
        <img src="${photoURL}"/>
        <div class="price-locations">
            <span class="location">${userCloseBigCity} - ${filterArray[j].code[0]}</span>
            <span class="price">
                <div class="skeleton"></div>
            </span>
        </div>
        `

        childEl.addEventListener("click", async ()=>{
            newElemnetsSkeleton()
            const getFlights = async () =>{
                const airportCode = await convertCityToAirport(userCloseBigCity)

                const ACCESS_TOKEN = await auth()

                const request = await fetch(`${BASE_URL}v2/shopping/flight-offers?originLocationCode=${airportCode}&destinationLocationCode=${filterArray[j].code[2]}&departureDate=${formatDateForAPI(new Date(weekAfterStart))}&returnDate=${formatDateForAPI(new Date(weekAfterEnd))}&adults=1&max=150`, {
                    headers: {
                        'Authorization' : `Bearer ${ACCESS_TOKEN}`
                    }
                })
                const flights = await request.json()
                
                allFlightsArray.push(flights)
            }
            //getFlights()
            //console.log(filterArray[j].code[2])
            const allFlightsArray = []
            const awaitingFlights = await getFlights()
                
            displayFlights(allFlightsArray[0].data)
        })
    }

    //using a delayed form of a for loop to get around the request limiter
    const delayedLoop = async (i) => {
        if (i < filterArray.length) {
            const allEl = document.querySelectorAll(".price")
            const cheapestFlightPrice = await getFlights(formattedDate, weekAfter, filterArray[i].code[2], airportCode)
            allEl[i].innerHTML = `Cheapest flight: ${cheapestFlightPrice} €`
            
            //getFlights(formattedDate, weekAfter, filterArray[i].code[2], airportCode)
            //console.log(filterArray[i].code[2])
            setTimeout(() => delayedLoop(i + 1), 350) 
        }
    }

    //delayedLoop(0);
}
//cheapestFlightsWorldwide(continentLocations[0])


continentPicked.forEach((el, idx) =>{
    if(el.classList.contains("selected")){
        hoverEl.style.width = `${el.clientWidth}px`
        cheapestFlightsWorldwide(continentLocations[idx])
    }
    el.addEventListener("click", ()=>{
        if(el.classList.contains("selected")){
            return
        }

        continentPicked.forEach((el) =>{
            el.classList.remove("selected")
        })

        el.classList.add("selected")

        hoverEl.style.width = `${el.clientWidth}px`
        hoverEl.style.transform = `translateX(${el.offsetLeft}px)`

        cheapestFlightsWorldwide(continentLocations[idx])
    })
})

const extraInfo = document.querySelector(".extra-cheap-info")
extraInfo.innerHTML = `Cheapest round flight for 1 adult, with dates <span class="bold">${oneWeekAfter(new Date())} - </span><span class="bold">${oneWeekAfter(oneWeekAfter(new Date()))}</span>`

//handling of the accordion
const allQuestionEl = document.querySelectorAll(".question")
const allSVGs = document.querySelectorAll(".question svg")
const allAnswerEl = document.querySelectorAll(".answer-wrap")

allQuestionEl.forEach((question, i) =>{
    question.addEventListener("click", ()=>{
        
        question.classList.toggle("border")
        allSVGs[i].classList.toggle("rotate")
        allAnswerEl[i].classList.toggle("show")
        
    })
})
}
//generateFlightContent()

//creating the next segment
//stays/ hotels segment
const generateHotelsContent = () =>{
    //function to look up a city from user search
    const citySearch = async (cityCode) =>{
        const request = await fetch(`https://api.api-ninjas.com/v1/city?name=${cityCode}&limit=20`, {
            headers: {
                'X-Api-Key': 'ms8RqOGfUGGtDh0DlpcY1g==Jth5NhF3AhqmYlOP'
            }
        })

        const response = await request.json()

        return response
    }
    //citySearch("velin")

    //choosing the city
    const staysElement = document.querySelector(".place-to-go")
    const staysInput = document.querySelector(".place-to-go input")
    const staysDropdown = document.querySelector(".stays-dropdown")
    const staysCitiesWrap = document.querySelector(".stays-results-wrap")
    staysElement.addEventListener("click", (e)=>{
        e.stopPropagation()

        staysDropdown.style.display = "flex"
        calendar.style.display = "none"
        guestDropdown.style.display = "none"

        staysInput.focus()
        staysInput.value = ""
        staysCitiesWrap.innerHTML = `<span>City you plan to stay at</span>`

        window.addEventListener("click", ()=>{
            staysDropdown.style.display = "none"
            
            if(placeError){
                staysErrorDiv.style.display = "block"
            }else{
                staysErrorDiv.style.display = "none"
            }
        })

        staysErrorDiv.style.display = "none"
    })

    staysDropdown.addEventListener("click", (e)=>{
        e.stopPropagation()
    })

    staysInput.addEventListener("keyup", async ()=>{
        let inputValue = staysInput.value.trim() 

        if(inputValue.length > 2){
            const cityResults = await citySearch(inputValue)  
            
            if(cityResults.length > 0){
                staysCitiesWrap.innerHTML = ``
                for(let i = 0; i < cityResults.length; i++){
                    const city = document.createElement("div")
                    city.classList.add("stays-city")
                    staysCitiesWrap.appendChild(city)

                    city.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <span class="stays-name-bold"><span class="final-city">${cityResults[i].name}</span>, ${cityResults[i].country}</span>
                    `

                    if(i !== cityResults.length - 1){
                        city.classList.add("with-border")
                    }

                    city.addEventListener("click", ()=>{
                        staysDropdown.style.display = "none" 
                        const staysSpan = document.querySelector(".stays-span").textContent = cityResults[i].name
                        calendar.style.display = "flex"
                        
                        placeError = false

                        const displayingCalendar = () =>{
                            if(new Date().getMonth() + 1 === new Date(checkInDate).getMonth() + 1 && new Date().getFullYear() === new Date(checkInDate).getFullYear()){
                                prevButton.style.display = "none"
                            }else{
                                prevButton.style.display = "flex"
                            }
                    
                            if(new Date(checkInDate).getFullYear() > new Date().getFullYear() && new Date().getMonth() + 1 === new Date(checkInDate).getMonth() + 1){
                                leftPage.innerHTML = createCalendar(new Date(oneMonthBack(new Date(checkInDate))).getFullYear(), new Date(oneMonthBack(new Date(checkInDate))).getMonth() + 1, leftMonthSpan)
                                rightPage.innerHTML = createCalendar(new Date(oneMonthBack(new Date(checkInDate))).getFullYear(), new Date(oneMonthBack(new Date(checkInDate))).getMonth() + 1, rightMonthSpan)
                            }else{
                                leftPage.innerHTML = createCalendar(new Date(checkInDate).getFullYear(), new Date(checkInDate).getMonth() + 1, leftMonthSpan)
                                rightPage.innerHTML = createCalendar(new Date(checkInDate).getFullYear(), new Date(checkInDate).getMonth() + 1, rightMonthSpan)
                            }
                    
                            if(new Date().getMonth() + 1 === new Date(rightMonthSpan.textContent).getMonth() + 1 && new Date().getFullYear() < new Date(rightMonthSpan.textContent).getFullYear()){
                                nextButton.style.display = "none"
                            }else{
                                nextButton.style.display = "flex"
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
                    
                            if(!firstClick){
                                allValidDateElements.forEach((element) =>{
                                    element.addEventListener("mouseover", (e)=>{
                                        mouseOverEvent(element, e)
                                    })
                                    element.addEventListener("mouseleave", (e)=>{
                                        mouseLeaveEvent(element, e)
                                    })
                                })
                            }

                            
                            
                            datesErrorDiv.style.display = "none"
                            
                        }
                        displayingCalendar()

                        window.addEventListener("click", ()=>{
                            calendar.style.display = "none"
                            if(datesError){
                                datesErrorDiv.style.display = "block"
                            }else{
                                datesErrorDiv.style.display = "none"
                            }
                        })
                    })
                }
            }else{
                staysCitiesWrap.innerHTML = `<span>No results for this search, try something else.</span>`
            }
        }
    })


    //the calendar
    let checkInDate = new Date()
    let checkOutDate = ""
    let nextDate = "" //used for the event listeners
    let firstClick = true //closing the calendar or not
    
    const datesDiv = document.querySelector(".stays-dates")
    const calendar = document.querySelector(".calendar-stays")

    const nextButton = document.querySelector(".button-next-stays")
    const prevButton = document.querySelector(".button-prev-stays")

    const leftMonthSpan = document.querySelector(".month-left-stays")
    const rightMonthSpan = document.querySelector(".month-right-stays")

    const leftPage = document.querySelector(".month-one-stays .days")
    const rightPage = document.querySelector(".month-two-stays .days")

    const checkInSpan = document.querySelector(".check-in")
    const checkOutSpan = document.querySelector(".check-out")

    //displaying the calendar
    datesDiv.addEventListener("click", (e) =>{
        e.stopPropagation()

        calendar.style.display = "flex"
        staysDropdown.style.display = "none"
        guestDropdown.style.display = "none"

        window.addEventListener("click", ()=>{
            calendar.style.display = "none"

            if(datesError){
                datesErrorDiv.style.display = "block"
            }else{
                datesErrorDiv.style.display = "none"
            }
        })

        const displayingCalendar = () =>{
            if(new Date().getMonth() + 1 === new Date(checkInDate).getMonth() + 1 && new Date().getFullYear() === new Date(checkInDate).getFullYear()){
                prevButton.style.display = "none"
            }else{
                prevButton.style.display = "flex"
            }
    
            if(new Date(checkInDate).getFullYear() > new Date().getFullYear() && new Date().getMonth() + 1 === new Date(checkInDate).getMonth() + 1){
                leftPage.innerHTML = createCalendar(new Date(oneMonthBack(new Date(checkInDate))).getFullYear(), new Date(oneMonthBack(new Date(checkInDate))).getMonth() + 1, leftMonthSpan)
                rightPage.innerHTML = createCalendar(new Date(oneMonthBack(new Date(checkInDate))).getFullYear(), new Date(oneMonthBack(new Date(checkInDate))).getMonth() + 1, rightMonthSpan)
            }else{
                leftPage.innerHTML = createCalendar(new Date(checkInDate).getFullYear(), new Date(checkInDate).getMonth() + 1, leftMonthSpan)
                rightPage.innerHTML = createCalendar(new Date(checkInDate).getFullYear(), new Date(checkInDate).getMonth() + 1, rightMonthSpan)
            }
    
            if(new Date().getMonth() + 1 === new Date(rightMonthSpan.textContent).getMonth() + 1 && new Date().getFullYear() < new Date(rightMonthSpan.textContent).getFullYear()){
                nextButton.style.display = "none"
            }else{
                nextButton.style.display = "flex"
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
    
            if(!firstClick){
                allValidDateElements.forEach((element) =>{
                    element.addEventListener("mouseover", (e)=>{
                        mouseOverEvent(element, e)
                    })
                    element.addEventListener("mouseleave", (e)=>{
                        mouseLeaveEvent(element, e)
                    })
                })
            }

            datesErrorDiv.style.display = "none"
        }
        displayingCalendar()
    })

    calendar.addEventListener("click", (e)=>{
        e.stopPropagation()
    })

    //creating the calendar
    const createCalendar = (year, month, span) =>{
        let lastDay
        let firstDay

        if(!year && span.parentElement.parentElement.classList.contains("month-two-stays")){
            year = new Date().getFullYear()
            month = new Date().getMonth() + 2

            firstDay = new Date(year, month - 1, 1)
            lastDay = new Date(year, month, 0)
        }else if(span.parentElement.parentElement.classList.contains("month-two-stays")){
            month++
            if(month === 13){
                year++
                month = 1
            }

            firstDay = new Date(year, month - 1, 1)
            lastDay = new Date(year, month, 0)
            
        }else if(!year){
            year = new Date().getFullYear()
            month = new Date().getMonth() + 1

            firstDay = new Date(year, month - 1, 1)
            lastDay = new Date(year, month, 0)
        }else{
            firstDay = new Date(year, month - 1, 1)
            lastDay = new Date(year, month, 0)
        }

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

            //console.log(new Date(year, month - 1, date), new Date(checkInDate))

            if(new Date(year, month - 1, date).getTime() > new Date(checkInDate).getTime() && new Date(year, month - 1, date).getTime() < new Date(checkOutDate).getTime()){
                return "in-between"
            }else if(new Date(year, month - 1, date).getTime() == new Date(checkInDate).getTime()) {
                return "starting"
            }else if(new Date(year, month - 1, date).getTime() == new Date(checkOutDate).getTime()) {
                return "last"
            }else if(new Date(year, month - 1, date).getTime() < new Date(formatDate(new Date())).getTime()) {
                return "invalid"
            }else {
                return ""
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

    //bring a date forward for the calendar
    const oneMonthAfterToday = (userPickedDate) =>{
        userPickedDate.setMonth(userPickedDate.getMonth() + 1)
    
        const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
        const date = userPickedDate.getDate()
        const month = userPickedDate.toLocaleDateString("default", {month: "short"})
        const year = userPickedDate.getFullYear()
        
        const fullDate = `${weekday} ${date} ${month} ${year}`
    
        return fullDate
    }

    //bring a date back for the calendar 
    const oneMonthBack = (userPickedDate) =>{
        userPickedDate.setMonth(userPickedDate.getMonth() - 1)
    
        const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
        const date = userPickedDate.getDate()
        const month = userPickedDate.toLocaleDateString("default", {month: "short"})
        const year = userPickedDate.getFullYear()
        
        const fullDate = `${weekday} ${date} ${month} ${year}`
    
        return fullDate
    }

    //fortmat the date for the span element
    const formatDate = (userPickedDate) =>{
        const weekday = userPickedDate.toLocaleDateString("default", {weekday: "short"})
        const date = userPickedDate.getDate()
        const month = userPickedDate.toLocaleDateString("default", {month: "short"})
        const year = userPickedDate.getFullYear()
        
        const fullDate = `${weekday} ${date} ${month} ${year}`
    
        return fullDate
    }

    //flip calendar to next page
    nextButton.addEventListener("click", ()=>{
        nextDate = new Date(oneMonthAfterToday(new Date(leftMonthSpan.textContent)))

        leftPage.innerHTML = createCalendar(nextDate.getFullYear(), nextDate.getMonth() + 1, leftMonthSpan)
        rightPage.innerHTML = createCalendar(nextDate.getFullYear(), nextDate.getMonth() + 1, rightMonthSpan)

        prevButton.style.display = "flex"

        if(nextDate.getFullYear() > new Date().getFullYear() && nextDate.getMonth() + 2 === new Date().getMonth() + 1){
            nextButton.style.display = "none"
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

        if(!firstClick){
            allValidDateElements.forEach((element) =>{
                element.addEventListener("mouseover", (e)=>{
                    mouseOverEvent(element, e)
                })
                element.addEventListener("mouseleave", (e)=>{
                    mouseLeaveEvent(element, e)
                })
            })
        }
    })

    //flip calendar to previous page
    prevButton.addEventListener("click", ()=>{
        nextDate = new Date(oneMonthBack(new Date(leftMonthSpan.textContent)))

        leftPage.innerHTML = createCalendar(nextDate.getFullYear(), nextDate.getMonth() + 1, leftMonthSpan)
        rightPage.innerHTML = createCalendar(nextDate.getFullYear(), nextDate.getMonth() + 1, rightMonthSpan)

        nextButton.style.display = "flex"

        if(nextDate.getFullYear() === new Date().getFullYear() && nextDate.getMonth() + 1 === new Date().getMonth() + 1){
            prevButton.style.display = "none"
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

        if(!firstClick){
            allValidDateElements.forEach((element) =>{
                element.addEventListener("mouseover", (e)=>{
                    mouseOverEvent(element, e)
                })
                element.addEventListener("mouseleave", (e)=>{
                    mouseLeaveEvent(element, e)
                })
            })
        }
    })

    //user picking the dates form the calendar
    const eventFunction = (element) =>{
        if(firstClick){
            //if its the first click remove the class elements
            const allValidDateElements = document.querySelectorAll(".valid")
            allValidDateElements.forEach((el) =>{
                el.classList.remove("starting", "last", "in-between")
            })

            element.classList.add("starting")
            //then set the firstClick to false
            firstClick = false

            if(element.parentElement.parentElement.parentElement.classList.contains("month-one-stays")){
                checkInDate = new Date(`${element.textContent} ${leftMonthSpan.textContent}`)
            }else{
                //adding the logic here as well as making the logic for one way trips
                checkInDate = new Date(`${element.textContent} ${rightMonthSpan.textContent}`)
            }
    
            checkInDate = formatDate(checkInDate)
            checkOutDate = "Check-out date"
            
            datesError = true
            
            allValidDateElements.forEach((element) =>{
                element.addEventListener("mouseover", (e)=>{
                    mouseOverEvent(element, e)
                })
                element.addEventListener("mouseleave", (e)=>{
                    mouseLeaveEvent(element, e)
                })
            })
            

            checkInSpan.textContent = checkInDate
            checkOutSpan.textContent = checkOutDate
        }else{
            //check if the date picked is before the flyingDate
            if(element.parentElement.parentElement.parentElement.classList.contains("month-one-stays")){
                if(new Date(`${element.textContent} ${leftMonthSpan.textContent}`).getTime() < new Date(checkInDate).getTime()){
                    const allValidDateElements = document.querySelectorAll(".valid")
                    allValidDateElements.forEach((el) =>{
                        el.classList.remove("starting", "last", "in-between", "only-date")
                    })

                    element.classList.add("starting")
                    
                    checkInDate = new Date(`${element.textContent} ${leftMonthSpan.textContent}`)
                    checkInDate = formatDate(checkInDate)
    
                    checkInSpan.textContent = checkInDate
                    checkOutSpan.textContent = checkOutDate
                }else {
                    //close element and create the return date
                    //also add mouse over event
                    if(new Date(`${element.textContent} ${leftMonthSpan.textContent}`).getTime() === new Date(checkInDate).getTime()){
                        return ""
                    }else{
                        checkOutDate = new Date(`${element.textContent} ${leftMonthSpan.textContent}`)

                        firstClick = true 
                        calendar.style.display = "none"
                        guestDropdown.style.display = "flex"
                        window.addEventListener("click", ()=>{
                            guestDropdown.style.display = "none"

                            if(guestsError){
                                guestsErrorDiv.style.display = "block"
                            }else{
                                guestsErrorDiv.style.display = "none"
                            }
                        })

                        checkOutDate = formatDate(checkOutDate)
                        checkOutSpan.textContent = checkOutDate

                        datesError = false

                        guestsErrorDiv.style.display = "none"
                    }
                }
            }else{
                if(new Date(`${element.textContent} ${rightMonthSpan.textContent}`).getTime() < new Date(checkInDate).getTime()){
                    const allValidDateElements = document.querySelectorAll(".valid")
                    allValidDateElements.forEach((el) =>{
                        el.classList.remove("starting", "last", "in-between", "only-date")
                    })

                    element.classList.add("starting")
                    
                    checkInDate = new Date(`${element.textContent} ${rightMonthSpan.textContent}`)
                    checkInDate = formatDate(checkInDate)
    
                    checkInSpan.textContent = checkInDate
                    checkOutSpan.textContent = checkOutDate
                }else {
                    if(new Date(`${element.textContent} ${rightMonthSpan.textContent}`).getTime() === new Date(checkInDate).getTime()){
                        return ""
                    }else{
                        checkOutDate = new Date(`${element.textContent} ${rightMonthSpan.textContent}`)

                        firstClick = true 
                        calendar.style.display = "none"
                        guestDropdown.style.display = "flex"
                        window.addEventListener("click", ()=>{
                            guestDropdown.style.display = "none"

                            if(guestsError){
                                guestsErrorDiv.style.display = "block"
                            }else{
                                guestsErrorDiv.style.display = "none"
                            }
                        })

                        checkOutDate = formatDate(checkOutDate)
                        
                        checkOutSpan.textContent = checkOutDate

                        datesError = false

                        guestsErrorDiv.style.display = "none"
                    }
                }
            }
        }
    }

    const mouseOverEvent = (element, e) =>{
        let date = e.target.textContent
        let monthYear = ""
    
        //create 2 loops that will go over the elements
        if(element.parentElement.parentElement.parentElement.classList.contains("month-one-stays")){
            monthYear = leftMonthSpan.textContent
        }else {
            monthYear = rightMonthSpan.textContent
        }
        
        const dayHovered = new Date(`${date} ${monthYear}`)
    
        const monthLeftDays = document.querySelectorAll(".month-one-stays .valid")
        const monthRightDays = document.querySelectorAll(".month-two-stays .valid")
        
        if(dayHovered.getTime() > new Date(checkInDate).getTime()){
            /*
            allValidDateElements.forEach((el)=>{
                el.classList.remove("starting", "last", "in-between", "only-date")
    
                //logic needs touching
                if(new Date(`${el.textContent} ${monthYear}`).getTime() == new Date(flyingDate).getTime()){
                    el.classList.add("starting")
                }else if(new Date(`${el.textContent} ${monthYear}`).getTime() > new Date(flyingDate).getTime() && new Date(`${el.textContent} ${monthYear}`).getTime() <= dayHovered.getTime()){
                    //finish up the logic
                    el.classList.add("in-between")
                }
            })*/
            
            monthLeftDays.forEach((el) =>{
                el.classList.remove("starting", "last", "in-between", "only-date")
    
                if(new Date(`${el.textContent} ${leftMonthSpan.textContent}`).getTime() == new Date(checkInDate).getTime()){
                    el.classList.add("starting")
                }else if(new Date(`${el.textContent} ${leftMonthSpan.textContent}`).getTime() > new Date(checkInDate).getTime() && new Date(`${el.textContent} ${leftMonthSpan.textContent}`).getTime() <= dayHovered.getTime()){
                    el.classList.add("in-between")
                }
            })
            
            monthRightDays.forEach((el) =>{
                el.classList.remove("starting", "last", "in-between", "only-date")
    
                if(new Date(`${el.textContent} ${rightMonthSpan.textContent}`).getTime() == new Date(checkInDate).getTime()){
                    el.classList.add("starting")
                }else if(new Date(`${el.textContent} ${rightMonthSpan.textContent}`).getTime() > new Date(checkInDate).getTime() && new Date(`${el.textContent} ${rightMonthSpan.textContent}`).getTime() <= dayHovered.getTime()){
                    el.classList.add("in-between")
                }
            })
        }
    }
    
    //removing the classses when user leaves element
    const mouseLeaveEvent = (element, e) =>{
        const monthLeftDays = document.querySelectorAll(".month-one-stays .valid")
        const monthRightDays = document.querySelectorAll(".month-two-stays .valid")
    
        monthLeftDays.forEach((el) =>{
            el.classList.remove("starting", "last", "in-between", "only-date")
    
            if(new Date(`${el.textContent} ${leftMonthSpan.textContent}`).getTime() == new Date(checkInDate).getTime()){
                el.classList.add("starting")
            }
        })
    
        monthRightDays.forEach((el) =>{
            el.classList.remove("starting", "last", "in-between", "only-date")
    
            if(new Date(`${el.textContent} ${rightMonthSpan.textContent}`).getTime() == new Date(checkInDate).getTime()){
                el.classList.add("starting")
            }
        })
    }


    //room guests
    const guestElement = document.querySelector(".guest-stays")
    const guestDropdown = document.querySelector(".guests-dropdown")

    const doneButton = document.querySelector(".done-btn")

    const childrenPlus = document.querySelector(".children-plus-stays")
    const childrenMinus = document.querySelector(".children-minus-stays")
    
    const adultsPlus = document.querySelector(".adults-plus-stays")
    const adultsMinus = document.querySelector(".adults-minus-stays")

    const roomsPlus = document.querySelector(".rooms-plus")
    const roomMinus = document.querySelector(".rooms-minus")

    const childrenAmount = document.querySelector(".children-amount")
    const adultsAmount = document.querySelector(".adults-amount")
    const roomsAmount = document.querySelector(".rooms-amount")

    const guestsTextAdults = document.querySelector(".adults-text")
    const guestsTextChildren = document.querySelector(".children-text")
    const guestsTextRooms = document.querySelector(".rooms-text")

    let adults = 2
    let children = 0
    let rooms = 1

    guestElement.addEventListener("click", (e)=>{
        e.stopPropagation()

        guestDropdown.style.display = "flex"
        calendar.style.display = "none"
        staysDropdown.style.display = "none"

        window.addEventListener("click", ()=>{
            guestDropdown.style.display = "none"

            if(guestsError){
                guestsErrorDiv.style.display = "block"
            }else{
                guestsErrorDiv.style.display = "none"
            }
        })

        guestsErrorDiv.style.display = "none"
    })

    guestDropdown.addEventListener("click", (e)=>{
        e.stopPropagation()
    })

    doneButton.addEventListener("click", ()=>{
        guestDropdown.style.display = "none"

        if(guestsError){
            guestsErrorDiv.style.display = "block"
        }else{
            guestsErrorDiv.style.display = "none"
        }
    })

    //modifying the amount of guests
    adultsPlus.addEventListener("click", ()=>{
        adults++

        if(adults + children > 5){
            adultsPlus.classList.add("disabled")
            childrenPlus.classList.add("disabled")
            if(adults + children > 6){
                adults--
            }
        }else{
            adultsMinus.classList.remove("disabled")
        }

        if(adults != 1){
            adultsMinus.classList.remove("disabled")
        }

        adultsAmount.textContent = adults
        
        if(adults === 1){
            guestsTextAdults.textContent = `${adults} adult`
        }else{
            guestsTextAdults.textContent = `${adults} adults`
        }
    })
    adultsMinus.addEventListener("click", ()=>{
        adults--

        if(adults < 2){
            adultsMinus.classList.add("disabled")
            if(adults < 1){
                adults++
            }
        }else{
            adultsPlus.classList.remove("disabled")
        }

        if(adults + children < 6){
            childrenPlus.classList.remove("disabled")
            adultsPlus.classList.remove("disabled")
        }

        adultsAmount.textContent = adults

        if(adults === 1){
            guestsTextAdults.textContent = `${adults} adult`
        }else{
            guestsTextAdults.textContent = `${adults} adults`
        }
    })
    childrenPlus.addEventListener("click", ()=>{
        children++

        if(adults + children > 5){
            adultsPlus.classList.add("disabled")
            childrenPlus.classList.add("disabled")
            if(adults + children > 6){
                children--
            }
        }else{
            childrenMinus.classList.remove("disabled")
        }

        if(children != 0){
            childrenMinus.classList.remove("disabled")
        }

        childrenAmount.textContent = children
        
        if(children === 1){
            guestsTextChildren.textContent = `${children} child`
        }else{
            guestsTextChildren.textContent = `${children} children`
        }

        const elementWrapper = document.querySelector(".ages-wrapper")
        if(elementWrapper.children.length < children){
            childAgeCreate()
        }
    })
    childrenMinus.addEventListener("click", ()=>{
        children--

        if(children < 1){
            childrenMinus.classList.add("disabled")
            if(children < 0){
                children++
            }
        }else{
            childrenPlus.classList.remove("disabled")
        }

        if(adults + children < 6){
            adultsPlus.classList.remove("disabled")
            childrenPlus.classList.remove("disabled")
        }

        childrenAmount.textContent = children

        if(children === 1){
            guestsTextChildren.textContent = `${children} child`
        }else{
            guestsTextChildren.textContent = `${children} children`
        }

        const elementWrapper = document.querySelector(".ages-wrapper")
        if(elementWrapper.children.length > 0){
            elementWrapper.children[elementWrapper.children.length - 1].remove()

            if(elementWrapper.children.length == 0){
                const childAgeWrapper = document.querySelector(".children-age-element")
                childAgeWrapper.style.display = "none"

                guestsError = false
            }

            const allEls = document.querySelectorAll("#age-selection-stays")
            for(let i = 0; i < allEls.length; i++){
                //console.log(allEls[i])
                if(allEls[i].options[0].value === ""){
                    guestsError = true
                    return
                }else{
                    guestsError = false
                }
            }
        }
    })

    roomMinus.addEventListener("click", ()=>{
        rooms--

        if(rooms < 2){
            roomMinus.classList.add("disabled")
            if(rooms < 1){
                rooms++
            }
        }

        roomsPlus.classList.remove("disabled")
        roomsAmount.textContent = rooms

        if(rooms === 1){
            guestsTextRooms.textContent = `${rooms} room`
        }else{
            guestsTextRooms.textContent = `${rooms} rooms`
        }
    })
    roomsPlus.addEventListener("click", ()=>{
        rooms++

        if(rooms > 9){
            roomsPlus.classList.add("disabled")
            if(rooms > 10){
                rooms--
            }
        }

        roomsAmount.textContent = rooms

        roomMinus.classList.remove("disabled")

        if(rooms === 1){
            guestsTextRooms.textContent = `${rooms} room`
        }else{
            guestsTextRooms.textContent = `${rooms} rooms`
        }
    })


    //child age selecting
    const childAgeCreate = () =>{
        const childAgeWrapper = document.querySelector(".children-age-element")
        childAgeWrapper.style.display = "flex"
        const elementWrapper = document.querySelector(".ages-wrapper")

        const element = document.createElement("div")
        element.classList.add("child-age")
        elementWrapper.appendChild(element)

        element.innerHTML = `
        <select class="error" id="age-selection-stays">
            <option value="">Age needed</option>
            <option value="1">1 year old</option>
            <option value="2">2 years old</option>
            <option value="3">3 years old</option>
            <option value="4">4 years old</option>
            <option value="5">5 years old</option>
            <option value="6">6 years old</option>
            <option value="7">7 years old</option>
            <option value="8">8 years old</option>
            <option value="9">9 years old</option>
            <option value="10">10 years old</option>
            <option value="11">11 years old</option>
            <option value="12">12 years old</option>
            <option value="13">13 years old</option>
            <option value="14">14 years old</option>
            <option value="15">15 years old</option>
            <option value="16">16 years old</option>
            <option value="17">17 years old</option>
        </select>
        `
        const allOptions = document.querySelectorAll("#age-selection-stays")
        allOptions.forEach((select) =>{
            select.addEventListener("change", ()=>{
                if(select.value !== "" && select.options[0].value === ""){
                    select.options[0].remove()
                    select.classList.remove("error")

                    const allEls = document.querySelectorAll("#age-selection-stays")
                    for(let i = 0; i < allEls.length; i++){
                        //console.log(allEls[i])
                        if(allEls[i].options[0].value === ""){
                            guestsError = true
                            return
                        }else{
                            guestsError = false
                        }
                    }
                }
            })
        })

        guestsError = true
    }


    //next up showcase a couple of hotels on a carousel
    const hotelsCarouselWrap = document.querySelector(".popular-hotels-carousel-wrap")

    const popularHotels = [
        {image: ["paris1.png", "paris2.png", "paris3.png", "paris4.png", "paris5.png"], description: "Hôtel des Arts Montmartre is located in the center of Paris, in the Montmartre district, a 9-minute walk from the Sacré-Coeur Basilica.",
        stars: 4, name: "Hotel des Arts Montmartre", bookRating: "9.6"},
        
        {image: ["madrid1.png", "madrid2.png", "madrid3.png", "madrid4.png", "madrid5.png"], description: "Located in Madrid, a 6-minute walk from Gran Via Station Metro Station.",
        stars: 5, name: "Four Seasons Hotel Madrid", bookRating: "9.5"},

        {image: ["barcelona1.png", "barcelona2.png", "barcelona3.png", "barcelona4.png", "barcelona5.png"], description: "The stylish Casa Camper Barcelona boutique hotel is in central Barcelona.",
        stars: 4, name: "Casa Camper Barcelona", bookRating: "9.6"},

        {image: ["rome1.png", "rome2.png", "rome3.png", "rome4.png", "rome5.png"], description: "Residenza Venti Settembre features free WiFi and rooms with air conditioning in Rome.", 
        stars: 4, name: "Residenza Venti Settembre", bookRating: "10"},

        {image: ["istanbul1.png", "istanbul2.png", "istanbul3.png", "istanbul4.png", "istanbul5.png"], description: "Conveniently located in Istanbul, HaciBayramHotel provides air-conditioned rooms, a garden, free WiFi and a shared lounge.", 
        stars: 3, name: "HaciBayramHotel", bookRating: "9.9"},

        {image: ["dubai1.png", "dubai2.png", "dubai3.png", "dubai4.png", "dubai5.png"], description: "Sofitel Dubai Jumeirah Beach is located in The Walk at Jumeirah Beach Residence.", 
        stars: 5, name: "Sofitel Dubai Jumeirah", bookRating: "9.3"},

        {image: ["amsterdam1.png", "amsterdam2.png", "amsterdam3.png", "amsterdam4.png", "amsterdam5.png"], description: "Right in the heart of Amsterdam overlooking the Royal Palace, the National Monument on Dam Square and the Rokin, you will find Hotel TwentySeven.", 
        stars: 5, name: "Hotel TwentySeven", bookRating: "9.8"},

        {image: ["tokyo1.png", "tokyo2.png", "tokyo3.png", "tokyo4.png", "tokyo5.png"], description: "Composed of 2 buildings, The Okura Tokyo features a garden and bar.", 
        stars: 5, name: "The Okura Tokyo", bookRating: "9.5"},

        {image: ["newyork1.png", "newyork2.png", "newyork3.png", "newyork4.png", "newyork5.png"], description: "Located in New York and with Strawberry Fields reachable within a 13-minute walk.", 
        stars: 5, name: "The Wallace Hotel", bookRating: "9.3"},

        {image: ["bangkok1.png", "bangkok2.png", "bangkok3.png", "bangkok4.png", "bangkok5.png"], description: "Luxurious stays await at Siam Kempinski Hotel Bangkok, with multiple pools located within landscaped grounds.", 
        stars: 5, name: "Siam Kempinski Hotel", bookRating: "9.5"},

        {image: ["singapore1.jpg", "singapore2.png", "singapore3.png", "singapore4.png", "singapore5.png"], description: "Located in Singapore, a 2-minute walk from The Shoppes at Marina Bay Sands.",
        stars: 5, name: "Marina Bay Sands", bookRating: "9.2"},

        {image: ["seoul1.png", "seoul2.png", "seoul3.png", "seoul4.png", "seoul5.png"], description: "Designed with a cinematic theme, Hotel28 Myeongdong is Korea's first hotel to be a member of Small Luxury Hotels of the World Ltd.",
        stars: 3, name: "Hotel28 Myeongdong", bookRating: "9.2"},

        {image: ["hongkong1.png", "hongkong2.png", "hongkong3.png", "hongkong4.png", "hongkong5.png"], description: "Located at Victoria Dockside in Hong Kong, K11 ARTUS is only a few steps away from K11 MUSEA and Avenue of Stars.",
        stars: 5, name: "K11 ARTUS", bookRating: "9.1"},

        {image: ["rio1.png", "rio2.png", "rio3.png", "rio4.png", "rio5.png"], description: "Offering an outdoor pool and stunning views to Sugar Loaf Mountain and Guanabara Bay, located in Rio de Janeiro.",
        stars: 4, name: "Gerthrudes Bed & Breakfast", bookRating: "9.7"},

        {image: ["buenosaires1.png", "buenos2.png", "buenos3.png", "buenos4.png", "buenos5.png"], description: "Featuring a garden, InspireBA - Garden offers accommodations in Buenos Aires.",
        stars: 4, name: "InspireBA - Garden", bookRating: "9.7"},
    ]

    
    for(let i = 0; i < popularHotels.length; i++){
        const eachHotel = document.createElement("div")
        eachHotel.classList.add("each-hotel")
        hotelsCarouselWrap.appendChild(eachHotel)

        const starsAmount = (stars) =>{
            if(stars === 1){
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
            }else if(stars === 2){
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
            }else if(stars === 3){
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
            }else if(stars === 4){
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
            }else if(stars === 5){
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
            }
        }
       
        eachHotel.innerHTML = `
        <div class="hotel-images">
            <div class="bubble-wrap">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
            <div class="hotel-images-wrap">
                <img src="./images/hotels/${popularHotels[i].image[0]}">
                <img src="./images/hotels/${popularHotels[i].image[1]}">
                <img src="./images/hotels/${popularHotels[i].image[2]}">
                <img src="./images/hotels/${popularHotels[i].image[3]}">
                <img src="./images/hotels/${popularHotels[i].image[4]}">
            </div>
        </div>
        <div class="hotel-details">
            <div>
                <span class="hotel-name">${popularHotels[i].name}</span>
                <div class="stars-wrap">
                    ${starsAmount(popularHotels[i].stars)}
                </div>
            </div>
            <div>
                <span class="description">${popularHotels[i].description}</span>
                <div class="rating">${popularHotels[i].bookRating}</div>
            </div>
        </div>
        <div class="book-now">Book Now</div>
        `
    }

    //carousel buttons to move the element
    const buttonLeftCarousel = document.querySelector(".button-left")
    const buttonRightCarousel = document.querySelector(".button-right")

    const carouselElement = document.querySelector(".popular-hotels-carousel-wrap")
    const cardWidth = document.querySelector(".each-hotel").clientWidth

    buttonRightCarousel.addEventListener("click", ()=>{
        carouselElement.scrollLeft += cardWidth
    })

    buttonLeftCarousel.addEventListener("click", ()=>{
        carouselElement.scrollLeft -= cardWidth
    })

    carouselElement.addEventListener("scroll", ()=>{
        if(carouselElement.scrollLeft === (carouselElement.scrollWidth - carouselElement.clientWidth) && window.innerWidth > 950){
            buttonRightCarousel.classList.remove("show")
            buttonRightCarousel.classList.add("hide")

            buttonRightCarousel.addEventListener("animationend", ()=>{
                buttonRightCarousel.classList.remove("hide")
            })
        }else{
            if(window.innerWidth > 950){
                buttonRightCarousel.classList.add("show")
            }
        }

        if(carouselElement.scrollLeft === 0 && window.innerWidth > 950){
            buttonLeftCarousel.classList.remove("show")
            buttonLeftCarousel.classList.add("hide")

            buttonLeftCarousel.addEventListener("animationend", ()=>{
                buttonLeftCarousel.classList.remove("hide")
            })
        }else{
            if(window.innerWidth > 950){
                buttonLeftCarousel.classList.add("show")
            }
        }
    })

    //switching between hotel photos
    const imageHover = document.querySelectorAll(".hotel-images")
    const bubbleWrap = document.querySelectorAll(".bubble-wrap")
    const imageCarousel = document.querySelectorAll(".hotel-images-wrap")

    imageHover.forEach((element, idx) =>{
        element.addEventListener("mouseover", (e)=>{
            bubbleWrap[idx].style.display = "flex"
        })

        element.addEventListener("mouseleave", (e)=>{
            bubbleWrap[idx].style.display = "none"
        })
    })

    const imageWidth = document.querySelector(".hotel-images img").clientWidth
    bubbleWrap.forEach((wrappers, idx) =>{
        for(let i = 0; i < wrappers.children.length; i++){
            wrappers.children[i].addEventListener("click", ()=>{
                //imageHover[idx].style.transform = `translateX(${wrappers.children[i] * i}px)`
                imageCarousel[idx].scrollLeft = imageWidth * i
            })
        }
    })

    window.addEventListener("resize", ()=>{
        if(buttonLeftCarousel === null){
            return
        }else{
            if(window.innerWidth > 950 && carouselElement.scrollLeft !== 0){
                buttonLeftCarousel.classList.add("show")
            }else{
                buttonLeftCarousel.classList.remove("show")
            }

            if(window.innerWidth > 950 && carouselElement.scrollLeft !== (carouselElement.scrollWidth - carouselElement.clientWidth)){
                buttonRightCarousel.classList.add("show")
            }else{
                buttonRightCarousel.classList.remove("show")
            }

            if(window.innerWidth > 950 && wrapper.scrollLeft !== 0){
                leftBtn.classList.add("show")
            }else{
                leftBtn.classList.remove("show")
            }

            if(window.innerWidth > 950 & Math.round(wrapper.scrollLeft) !== (wrapper.scrollWidth - wrapper.clientWidth)){
                rightBtn.classList.add("show")
            }else{
                rightBtn.classList.remove("show")
            }
        }
    })


    //popular theme destinations
    const themesArray = [
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"/></svg>`, vibe: "Beach"},
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"/></svg>`, vibe: "Outdoors"},
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>`, vibe: "Romance"},
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5 21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"/></svg>`, vibe: "City"},
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M183.1 235.3c33.7 20.7 62.9 48.1 85.8 80.5c7 9.9 13.4 20.3 19.1 31c5.7-10.8 12.1-21.1 19.1-31c22.9-32.4 52.1-59.8 85.8-80.5C437.6 207.8 490.1 192 546 192h9.9c11.1 0 20.1 9 20.1 20.1C576 360.1 456.1 480 308.1 480H288 267.9C119.9 480 0 360.1 0 212.1C0 201 9 192 20.1 192H30c55.9 0 108.4 15.8 153.1 43.3zM301.5 37.6c15.7 16.9 61.1 71.8 84.4 164.6c-38 21.6-71.4 50.8-97.9 85.6c-26.5-34.8-59.9-63.9-97.9-85.6c23.2-92.8 68.6-147.7 84.4-164.6C278 33.9 282.9 32 288 32s10 1.9 13.5 5.6z"/></svg>`, vibe: "Relax"},
        {svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M380.7 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L232.7 361.3l46.2-69.2-75.1-75.1c-14.6-14.6-20.4-33.9-18.4-52.1l108.8 52 39.3 39.3c16.2 16.2 18.7 41.5 6 60.6L289.8 391l128.7 66.8c13.6 7.1 29.8 7.2 43.6 .3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7L12.9 301.3C1.2 295.2-3.4 280.7 2.7 268.9zM118.9 65.6L137 74.2l8.7-17.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-8.5 16.9 54.7 26.2c1.5-.7 3.1-1.4 4.7-2.1l83.4-33.4c34.2-13.7 72.8 4.2 84.5 39.2l17.1 51.2 52.1 26.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-58.1-29c-11.4-5.7-20-15.7-24.1-27.8l-5.8-17.3-27.3 12.1-6.8 3-6.7-3.2L151.5 116.7l-9.2 18.4c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l9-18-17.6-8.4c-8-3.8-11.3-13.4-7.5-21.3s13.4-11.3 21.3-7.5z"/></svg>`, vibe: "Ski"},
    ]
    const allThemeCities = [
        {
            cities: [
                {city: "Barcelona", img: "./images/destinations/barcelona.png", country: "Spain"},
                {city: "Rio de Janeiro", img: "./images/destinations/riodejaneiro.png", country: "Brazil"},
                {city: "Miami", img: "./images/destinations/miami.png", country: "USA"},
                {city: "Cancun", img: "./images/destinations/cancun.png", country: "Mexico"},
                {city: "Phuket", img: "./images/destinations/phuket.png", country: "Thailand"},
                {city: "Bali", img: "./images/destinations/bali.png", country: "Indonesia"},
                {city: "Honolulu", img: "./images/destinations/honolulu.png", country: "Hawaii"},
                {city: "Nice", img: "./images/destinations/nice.png", country: "France"},
                {city: "Sydney", img: "./images/destinations/sydney.png", country: "Australia"},
                {city: "Mykonos", img: "./images/destinations/mykonos.png", country: "Greece"},
            ]
        },

        {
            cities: [
                {city: "Denver", img: "./images/destinations/denver.png", country: "USA"},
                {city: "Vancouver", img: "./images/destinations/vancouver.png", country: "Canada"},
                {city: "Queenstown", img: "./images/destinations/queenstown.png", country: "New Zealand"},
                {city: "Reykjavik", img: "./images/destinations/raj.png", country: "Iceland"},
                {city: "Interlaken", img: "./images/destinations/interlaken.png", country: "Switzerland"},
                {city: "Cape Town", img: "./images/destinations/capetown.jpg", country: "South Africa"},
                {city: "Innsbruck", img: "./images/destinations/insbruck.png", country: "Austria"},
                {city: "Boulder", img: "./images/destinations/boulder.png", country: "USA"},
                {city: "Banff", img: "./images/destinations/banff.png", country: "Canada"},
                {city: "Chamonix", img: "./images/destinations/chamonix.png", country: "France"}
            ]
        }, 

        {
            cities: [
                {city: "Paris", img: "./images/destinations/paris.png", country: "France"},
                {city: "Venice", img: "./images/destinations/venice.png", country: "Italy"},
                {city: "Rome", img: "./images/destinations/rome.png", country: "Italy"},
                {city: "Prague", img: "./images/destinations/prague.png", country: "Czech Republic"},
                {city: "Kyoto", img: "./images/destinations/kyoto.png", country: "Japan"},
                {city: "Santorini", img: "./images/destinations/santorini.png", country: "Greece"},
                {city: "Vienna", img: "./images/destinations/vienna.png", country: "Austria"},
                {city: "Bruges", img: "./images/destinations/bruges.png", country: "Belgium"},
                {city: "Buenos Aires", img: "./images/destinations/buenos.png", country: "Argentina"},
                {city: "Verona", img: "./images/destinations/verona.png", country: "Italy"},
            ]
        }, 

        {
            cities: [
                {city: "New York City", img: "./images/destinations/new york.png", country: "USA"},
                {city: "Tokyo", img: "./images/destinations/tokyo.png", country: "Japan"},
                {city: "London", img: "./images/destinations/london.png", country: "England"},
                {city: "Istanbul", img: "./images/destinations/istanbul.png", country: "Turkey"},
                {city: "Dubai", img: "./images/destinations/dubai.png", country: "UAE"},
                {city: "Mumbai", img: "./images/destinations/mumbai.png", country: "India"},
                {city: "Shanghai", img: "./images/destinations/shanghai.png", country: "China"},
                {city: "Los Angeles", img: "./images/destinations/los agneles.png", country: "USA"},
                {city: "Toronto", img: "./images/destinations/toronto.png", country: "Canada"},
                {city: "Berlin", img: "./images/destinations/berlin.png", country: "Germany"},
            ]
        },

        {
            cities: [
                {city: "Maui", img: "./images/destinations/maui.png", country: "Hawaii"},
                {city: "Maldives", img: "./images/destinations/maldives.png", country: ""},
                {city: "Ibiza", img: "./images/destinations/ibiza.png", country: "Spain"},
                {city: "Fiji", img: "./images/destinations/fiji.png", country: ""},
                {city: "Tulum", img: "./images/destinations/tulum.png", country: "Mexico"},
                {city: "Bora Bora", img: "./images/destinations/bora bora.png", country: "Frech Polynesia"},
                {city: "Key West", img: "./images/destinations/key west.png", country: "USA"},
                {city: "Palawan", img: "./images/destinations/palawan.png", country: "Philippines"},
                {city: "Sedona", img: "./images/destinations/sedona.png", country: "USA"},
                {city: "Napa Valley", img: "./images/destinations/napa valley.png", country: "USA"},
            ]
        },

        {
            cities: [
                {city: "Aspen", img: "./images/destinations/aspen.png", country: "USA"},
                {city: "Whistler", img: "./images/destinations/whistler.png", country: "Canada"},
                {city: "St. Moritz", img: "./images/destinations/moritz.png", country: "Switzerland"},
                {city: "Jackson Hole", img: "./images/destinations/jackson hole.png", country: "USA"},
                {city: "Park City", img: "./images/destinations/park city.png", country: "USA"},
                {city: "Zermatt", img: "./images/destinations/zermatt.png", country: "Switzerland"},
                {city: "Vail", img: "./images/destinations/vail.png", country: "USA"},
                {city: "Courchevel", img: "./images/destinations/couch.png", country: "France"},
                {city: "Val d'Isère", img: "./images/destinations/val.png", country: "France"},
                {city: "Åre", img: "./images/destinations/are.png", country: "Sweden"},
            ]
        }
    ]
    const hoveringEl = document.querySelector(".vibes-hovering")

    const vibesEl = document.querySelector(".vibes")
    for(let i = 0; i < themesArray.length; i++){
        const vibe = document.createElement("div")
        vibe.classList.add("vibe")
        vibesEl.appendChild(vibe)

        vibe.innerHTML = `
        ${themesArray[i].svg} <span>${themesArray[i].vibe}</span>
        `

        if(i === 0){
            vibe.classList.add("selected")
            hoveringEl.style.width = `${vibe.clientWidth}px`
            
        }
    }

    const allVibes = document.querySelectorAll(".vibe")
    allVibes.forEach((vibe, idx) =>{
        vibe.addEventListener("click", ()=>{
            if(!vibe.classList.contains("selected")){
                allVibes.forEach(vibe => vibe.classList.remove("selected"))

                vibe.classList.add("selected")
                hoveringEl.style.width = `${vibe.clientWidth}px`
                hoveringEl.style.transform = `translateX(${vibe.offsetLeft}px)`
                createDestinations(allThemeCities[idx].cities)
            }
        })
    })


    const wrapper = document.querySelector(".carousel-wrap")
    const createDestinations = (cities) =>{
        
        wrapper.innerHTML = ``
        wrapper.scrollLeft = 0

        for(let i = 0; i < cities.length; i++){
            const city = document.createElement("div")
            city.classList.add("city")
            wrapper.appendChild(city)

            city.innerHTML = `
            <img src="${cities[i].img}"/>
            <span class="city-name">${cities[i].city}${cities[i].country !== "" ? ", " + cities[i].country : cities[i].country}</span>
            `

            //add an event listener with proper dates to use for hotel search leter
        }
    }
    createDestinations(allThemeCities[0].cities)

    const rightBtn = document.querySelector(".planner-right-btn")
    const leftBtn = document.querySelector(".planner-left-btn")
    const elementWidth = document.querySelector(".city").clientWidth
    
    rightBtn.addEventListener("click", ()=>{
        wrapper.scrollLeft += elementWidth
    })

    leftBtn.addEventListener("click", ()=>{
        wrapper.scrollLeft -= elementWidth
    })

    wrapper.addEventListener("scroll", ()=>{
        //console.log(wrapper.scrollLeft, wrapper.scrollWidth - wrapper.clientWidth)
        if(Math.round(wrapper.scrollLeft) === (wrapper.scrollWidth - wrapper.clientWidth) && window.innerWidth > 950){
            rightBtn.classList.remove("show")
            rightBtn.classList.add("hide")

            rightBtn.addEventListener("animationend", ()=>{
                rightBtn.classList.remove("hide")
            })
        }else{
            if(window.innerWidth > 950){
                rightBtn.classList.add("show")
            }
        }

        if(wrapper.scrollLeft === 0 && window.innerWidth > 950){
            leftBtn.classList.remove("show")
            leftBtn.classList.add("hide")

            leftBtn.addEventListener("animationend", ()=>{
                leftBtn.classList.remove("hide")
            })
        }else{
            if(window.innerWidth > 950){
                leftBtn.classList.add("show")
            }
        }
    })

    //hide the buttons initially
    if(window.innerWidth < 950){
        buttonLeftCarousel.classList.remove("show")
        buttonRightCarousel.classList.remove("show")

        rightBtn.classList.remove("show")
        leftBtn.classList.remove("show")
    }

    const oneWeekAfter = (userPickedDate) =>{
        let oneMonthAfterDate = new Date(userPickedDate)
        oneMonthAfterDate.setDate(oneMonthAfterDate.getDate() + 8)
    
        const weekday = oneMonthAfterDate.toLocaleDateString("default", {weekday: "short"})
        const date = oneMonthAfterDate.getDate()
        const month = oneMonthAfterDate.toLocaleDateString("default", {month: "short"})
        const year = oneMonthAfterDate.getFullYear()
    
        const fullDate = `${weekday} ${date} ${month} ${year}`
    
        return fullDate
    }

    const checkInOffersDATE = oneWeekAfter(new Date())
    const checkInOffers = document.querySelector(".stays-offerdates .checkin")
    const checkOutOffers = document.querySelector(".stays-offerdates .checkout")

    checkInOffers.textContent = checkInOffersDATE
    checkOutOffers.textContent = oneWeekAfter(checkInOffersDATE)

    //flipping words element
    const flipper = document.querySelector(".flipper")
    const spanHeight = flipper.firstElementChild.clientHeight
    let currentEl = 0

    //clone first element to create visual illusion
    flipper.appendChild(flipper.children[0].cloneNode(true))

    //each interval iteration we translate the elements up
    setInterval(() => {
        currentEl = (currentEl + 1) % flipper.children.length
        for(let i = 0; i < flipper.children.length; i++){
            flipper.children[i].style.transition = "300ms ease"
            flipper.children[i].style.transform = `translateY(-${spanHeight * currentEl}px)`
        }
        
        //when we reach the last child we reset the element back to the first one
        //and our last is a clone of the first so it creates the illusion of infinite text flipping
        if(currentEl === flipper.children.length - 1){
            setTimeout(() => {
                for(let i = 0; i < flipper.children.length; i++){
                    flipper.children[i].style.transition = "none"
                    flipper.children[i].style.transform = `translateY(0)`
                }
                currentEl = 0
            }, 1000);
        }

        //flipper.style.transform = `translateY(-${spanHeight * currentEl}px)`
    }, 2000);


    //grid layout
    const mostPopularCities = [
        {city: "Dubai", img: "./images/popular-dubai.png", country: "UE"},
        {city: "London", img: "./images/popular-london.png", country: "GB"},
        {city: "Istanbul", img: "./images/popular-istanbul.png", country: "TR"},
        {city: "Bangkok", img: "./images/popular-bangkok.jpg", country: "TH"},
        {city: "Hong Kong", img: "./images/popular-hongkong.png", country: "HK"},
        {city: "Paris", img: "./images/popular-paris.png", country: "FR"},
        {city: "New York", img: "./images/popular-newyork.jpg", country: "US"},
        {city: "Singapore", img: "./images/popular-singapore.png", country: "SG"},
    ]

    const getUserCountry = async () =>{
        const city = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1]

        const request = await fetch(`https://api.api-ninjas.com/v1/country?name=${city}`, {
            headers: {
                'X-Api-Key': 'HK8cAjtwpCwNkZ/zcSHg8w==PhiE8l5yLKdgG0D8'
            }  
        })

        const response = await request.json()

        return response[0]
    }
    
    const allGridItems = document.querySelectorAll(".each-item")
    const countrytext = document.querySelector(".user-country")
    const creatingGridLayout = async () =>{
        const {iso2, name} = await getUserCountry()

        countrytext.textContent = name

        const filteredDestinations = mostPopularCities.filter((city) =>{
            return city.country !== iso2
        })

        for(let i = 0; i < allGridItems.length; i++){
            allGridItems[i].innerHTML = `
            <span class="grid-text">${filteredDestinations[i].city}</span>
            <img src="${filteredDestinations[i].img}"/>
            `

            allGridItems[i].addEventListener("click", ()=>{
                const queryForAPI = allGridItems[i].firstElementChild.textContent
            })
        }        
    }
    creatingGridLayout()


    //faq
    const allQuestionEl = document.querySelectorAll(".question-stays")
    const allSVGs = document.querySelectorAll(".question-stays svg")
    const allAnswerEl = document.querySelectorAll(".answer-wrap-stays")

    allQuestionEl.forEach((question, i) =>{
        question.addEventListener("click", ()=>{
            
            question.classList.toggle("border")
            allSVGs[i].classList.toggle("rotate")
            allAnswerEl[i].classList.toggle("show")
            
        })
    })

    //click event on search button
    //making the errors
    let placeError = true
    let datesError = true
    let guestsError = false

    const staysErrorDiv = document.querySelector(".stays-place-error")
    const datesErrorDiv = document.querySelector(".stays-dates-error")
    const guestsErrorDiv = document.querySelector(".stays-guests-error")

    const searchBtn = document.querySelector(".search-stays")
    searchBtn.addEventListener("click", ()=>{
        if(!placeError && !datesError && !guestsError){
            //setting the skeleton
            newElemnetsSkeleton()

            //getting the properties for the search
            const destination = document.querySelector(".stays-span").textContent
            const checkIn = document.querySelector(".check-in").textContent
            const checkOut = document.querySelector(".check-out").textContent

            //formatting the dates
            const formatDateForAPI = (timestring) =>{
                const year = timestring.getFullYear()
                const month = String(timestring.getMonth() + 1).padStart(2, "0")
                const day = String(timestring.getDate()).padStart(2, "0")

                return `${year}-${month}-${day}`
            }

            const checkInDateFormatted = formatDateForAPI(new Date(checkIn))
            const checkOutDateFormatted = formatDateForAPI(new Date(checkOut))

            let childrenStr = []
            if(children > 0){
                const allSelectEls = document.querySelectorAll("#age-selection-stays")
                allSelectEls.forEach((select) =>{
                    childrenStr.push(select.value)
                })

                childrenStr = childrenStr.join(",")
            }else{
                childrenStr = ""
            }
            
            //console.log(checkInDateFormatted, checkOutDateFormatted, destination, adults, children, childrenStr)

            //get a response, call the display function
            const fetchHotelData = async () =>{
                const API_KEY = `c01897a06f765f96b954be7d64923e3071cebcc57c0e30d30ed2df4d9340b5cd`
                const request = await fetch(`https://serpapi.com/search.json?engine=google_hotels&q=${destination}&currency=EUR&check_in_date=${checkInDateFormatted}&check_out_date=${checkOutDateFormatted}&adults=${adults}&children=${children}${childrenStr ? "&children_ages="+childrenStr : ""}&api_key=${API_KEY}`)

                const response = await request.json()

                console.log(response)
            }
            fetchHotelData()
        }else{
            if(placeError){
                staysErrorDiv.style.display = "block"
            }

            if(datesError){
                datesErrorDiv.style.display = "block"
            }

            if(guestsError){
                guestsErrorDiv.style.display = "block"
            }
        }
    })

    //quick skeleton loader and then present the real thing
    const newElemnetsSkeleton = () =>{
        const sectionTitle = document.querySelector(".head-search-outer")
        const initialStaysContent = document.querySelector(".initial-stays-content")
    
        sectionTitle.innerHTML = ``
        initialStaysContent.innerHTML = `
        <div class="stays-content-wrapper">
            
            <div class="stays-filters-wrapper">
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
                <div class="stays-filter"> <div class="stays-long"></div> <div class="stays-short"></div> </div>
            </div>
    
            <div class="result-stays-wrapper">
                <div class="all-stays">
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                    <div class="result-hotel">
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="long"></div>
                            <div class="short"></div>
                        </div>
                        <div>
                            <div class="square"></div>
                            <div class="medium"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        ` 
    }

    //display function
    const displayHotels = (data) =>{

    }
}
generateHotelsContent()

//footer
const reserved = document.querySelector(".reserved").textContent = `ExploreHub All rights reserved ${new Date().getFullYear()} ©`