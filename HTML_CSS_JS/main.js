// =========================================================================
// JAVASCRIPT FILE FOR THE LOCAL COMMUNITY EVENT PORTAL
// This file handles dynamic event generation, filtering, searching, and form validation.
// =========================================================================

// JavaScript Requirement 2: Display console.log() when script starts
console.log("Community Portal Script: Loaded and running.");

// JavaScript Requirement 35: Comment explaining one benefit of React or Vue frameworks:
// "Benefit of React/Vue: These frameworks use a virtual DOM or reactive rendering, meaning the UI automatically 
// updates when data state changes. This replaces tedious manual DOM manipulation (like querySelector, createElement, 
// and appendChild) with declarative component templates, making the code much easier to scale and maintain."

// JavaScript Requirement 13: Create an Event class
class Event {
    // JavaScript Requirement 25: Demonstrate default parameters
    constructor(id, title, category, date, location, seatsLeft = 10) {
        // JavaScript Requirement 4: Store event information inside properties
        this.id = id;
        this.title = title;
        this.category = category;
        this.date = date;
        this.location = location;
        this.seatsLeft = seatsLeft;
    }
}

// JavaScript Requirement 14: Add a prototype method named checkAvailability() to the Event class
Event.prototype.checkAvailability = function() {
    // JavaScript Requirement 7: Use if-else statements
    if (this.seatsLeft > 0) {
        return true;
    } else {
        return false;
    }
};

// JavaScript Requirement 3: Use const and let
// JavaScript Requirement 16: Create an events array
const eventsArray = [];

// JavaScript Requirement 10: Create function addEvent()
function addEvent(eventObj) {
    // JavaScript Requirement 17: Demonstrate push()
    eventsArray.push(eventObj);
    // JavaScript Requirement 33: Add console logs useful for debugging
    console.log(`Debug: Event added successfully: ${eventObj.title}`);
}

// Adding some default events to our database array when the application loads
addEvent(new Event(1, "Beginner Watercolor Workshop", "Art", "2026-06-15", "Room A, Community Center", 8));
addEvent(new Event(2, "Neighborhood Cleanup & Picnic", "Volunteer", "2026-06-20", "Central Park Main Gates", 15));
addEvent(new Event(3, "Cooking Healthy on a Budget", "Education", "2026-06-25", "Kitchen Annex", 0)); // Sold out event
addEvent(new Event(4, "Outdoor Movie Night: Toy Story", "Social", "2026-07-02", "Central Park Lawn", 30));
addEvent(new Event(5, "Digital Literacy for Seniors", "Education", "2026-07-10", "Computer Lab Room 102", 5));

// JavaScript Requirement 11: Demonstrate closures with a registration counter
function makeRegistrationCounter() {
    let count = 0; // Local private variable
    return {
        increment: function() {
            // JavaScript Requirement 6: Demonstrate ++ operator
            count++;
            return count;
        },
        decrement: function() {
            // JavaScript Requirement 6: Demonstrate -- operator
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
// Instantiate the closure function
const regCounter = makeRegistrationCounter();

// JavaScript Requirement 12: Use callback functions
// This is a generic function that takes a callback to filter events based on customized logic
function filterEventsCustom(events, filterCallback) {
    return events.filter(filterCallback);
}

// JavaScript Requirement 10: Create function filterEventsByCategory()
function filterEventsByCategory(category) {
    // JavaScript Requirement 33: Add console logs useful for debugging
    console.log(`Debug: Filtering events by category: ${category}`);
    
    let filteredEvents;
    if (category === "All") {
        filteredEvents = eventsArray;
    } else {
        // JavaScript Requirement 17: Demonstrate filter()
        filteredEvents = filterEventsCustom(eventsArray, function(eventItem) {
            return eventItem.category === category;
        });
    }
    
    // Rerender the list with filtered items
    renderEventCards(filteredEvents);
}

// JavaScript Requirement 10: Create function registerUser()
function registerUser(eventId) {
    // Find the event in our array using destructuring
    const eventObj = eventsArray.find(ev => ev.id === eventId);
    
    if (eventObj) {
        if (eventObj.checkAvailability()) {
            // JavaScript Requirement 6: Demonstrate -- operator to subtract a seat
            eventObj.seatsLeft--;
            
            // Increment our closure registration counter
            const totalReg = regCounter.increment();
            
            // JavaScript Requirement 2: Display alert() to notify user
            alert(`Success! You have registered for: ${eventObj.title}\nTotal registrations registered: ${totalReg}`);
            
            // Update the display counter text on the page
            const counterDisplay = document.getElementById("counterDisplay");
            if (counterDisplay) {
                counterDisplay.innerText = `Total successful registrations registered locally: ${totalReg}`;
            }
            
            // Refresh list to update seats count on UI
            renderEventCards(eventsArray);
        } else {
            alert(`Sorry, the event "${eventObj.title}" is already sold out!`);
        }
    } else {
        console.error("Debug Error: Event ID not found.");
    }
}

// JavaScript Requirement 19: Dynamically create event cards
function renderEventCards(eventsToDisplay) {
    // JavaScript Requirement 18: Use querySelector()
    const container = document.querySelector("#eventsContainer");
    if (!container) return;
    
    // Clear existing content inside container
    container.innerHTML = "";
    
    // JavaScript Requirement 17: Demonstrate map() to project data (we'll log the mapped titles)
    const titlesList = eventsToDisplay.map(e => e.title);
    console.log("Debug Mapped Event Titles: ", titlesList);

    // JavaScript Requirement 8: Use forEach() loop to iterate through events
    eventsToDisplay.forEach(event => {
        // JavaScript Requirement 18: Use createElement()
        const cardDiv = document.createElement("div");
        cardDiv.className = "event-card";
        
        // Determine availability status
        const isAvailable = event.checkAvailability();
        const availabilityText = isAvailable ? `${event.seatsLeft} seats left` : "SOLD OUT";
        const availabilityClass = isAvailable ? "available" : "sold-out";
        
        // JavaScript Requirement 5: Use template literals
        cardDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Status:</strong> <span class="highlight">${availabilityText}</span></p>
        `;
        
        // Add a Register button if seats are available
        if (isAvailable) {
            const regBtn = document.createElement("button");
            regBtn.className = "btn";
            regBtn.innerText = "Register";
            regBtn.style.marginTop = "10px";
            
            // JavaScript Requirement 20: Add Register buttons using onclick
            regBtn.onclick = function() {
                registerUser(event.id);
            };
            
            cardDiv.appendChild(regBtn);
        }
        
        // JavaScript Requirement 18: Use appendChild()
        container.appendChild(cardDiv);
    });
}

// Populate the events dropdown menu dynamically in the registration form
function populateFormDropdown() {
    const selectElem = document.querySelector("#regEvent");
    if (!selectElem) return;
    
    // Reset dropdown except first option
    selectElem.innerHTML = `<option value="">-- Choose an Event --</option>`;
    
    eventsArray.forEach(event => {
        const opt = document.createElement("option");
        opt.value = event.id;
        opt.innerText = `${event.title} (${event.category})`;
        selectElem.appendChild(opt);
    });
}

// JavaScript Requirement 23: Demonstrate Promise, then(), and catch()
// We create a function returning a promise that validates if registration form name is not a spam input
function checkNameSpamPromise(name) {
    return new Promise((resolve, reject) => {
        // Simple logic: if name is "spam" or "admin", reject it
        if (name.toLowerCase() === "spam" || name.toLowerCase() === "admin") {
            reject("This name is flagged as spam. Please enter a valid name.");
        } else {
            resolve("Name is clear.");
        }
    });
}

// JavaScript Requirement 24: Demonstrate async and await
async function processRegistrationSubmission(registrationData) {
    const statusDiv = document.getElementById("formStatus");
    statusDiv.style.color = "#1e3a8a";
    statusDiv.innerText = "Validating entry with server simulation...";

    try {
        // First check name validity using the Promise with await
        // JavaScript Requirement 9: Use try-catch error handling
        const spamCheckResult = await checkNameSpamPromise(registrationData.fullName);
        console.log(`Debug Spam check: ${spamCheckResult}`);
        
        statusDiv.innerText = "Submitting registration payload...";
        
        // JavaScript Requirement 32: Simulate server delay using setTimeout inside a promise structure
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // JavaScript Requirement 31: Simulate form submission using fetch()
        // We use JSONPlaceholder as our mock external API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(registrationData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        
        if (!response.ok) {
            throw new Error("Server responded with a connection error.");
        }
        
        const data = await response.json();
        console.log("Debug mock response data:", data);
        
        // Registration success processing
        statusDiv.style.color = "#16a34a";
        statusDiv.innerText = `Registration successful! Mock Server ID: ${data.id}`;
        
        // Register user in local memory storage to update seats count
        registerUser(parseInt(registrationData.eventId));
        
        // Clear form fields
        document.getElementById("regForm").reset();
        
    } catch (error) {
        statusDiv.style.color = "#dc2626";
        statusDiv.innerText = `Error: ${error.message || error}`;
    }
}

// Page initialization after DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    // Render the initial list of event cards
    renderEventCards(eventsArray);
    
    // Populate registration form options
    populateFormDropdown();
    
    // JavaScript Requirement 15: Use Object.entries() to print out first event details for study log
    if (eventsArray.length > 0) {
        console.log("Debug: Checking object schema properties:");
        for (const [key, value] of Object.entries(eventsArray[0])) {
            console.log(`Property -> Key: ${key}, Value: ${value}`);
        }
    }

    // Bind Category Filter change event
    const filterSelect = document.querySelector("#categoryFilter");
    if (filterSelect) {
        // JavaScript Requirement 21: Add category filtering using onchange
        filterSelect.onchange = function(e) {
            filterEventsByCategory(e.target.value);
        };
    }

    // Bind Search Input keydown event
    const searchInput = document.querySelector("#searchInput");
    if (searchInput) {
        // JavaScript Requirement 22: Add search functionality using keydown
        searchInput.onkeydown = function(e) {
            // Perform filtering after key press finishes (using setImmediate/setTimeout to wait for input buffer)
            setTimeout(() => {
                const queryText = searchInput.value.toLowerCase();
                const matchedEvents = eventsArray.filter(eventObj => {
                    return eventObj.title.toLowerCase().includes(queryText);
                });
                renderEventCards(matchedEvents);
            }, 50);
        };
    }

    // Setup Form submission validation
    const regForm = document.getElementById("regForm");
    if (regForm) {
        regForm.addEventListener("submit", function(e) {
            // JavaScript Requirement 28: Use preventDefault()
            e.preventDefault();
            
            // JavaScript Requirement 27: Access form fields using form.elements
            const formElements = regForm.elements;
            const fullName = formElements["fullName"].value.trim();
            const emailAddress = formElements["emailAddress"].value.trim();
            const eventId = formElements["selectedEvent"].value;
            
            // JavaScript Requirement 29 & 30: Validate inputs & Display validation errors
            let hasErrors = false;
            
            // Validate name
            const nameError = document.getElementById("nameError");
            if (fullName === "") {
                nameError.innerText = "Full Name is required.";
                hasErrors = true;
            } else {
                nameError.innerText = "";
            }
            
            // Validate email
            const emailError = document.getElementById("emailError");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailAddress === "") {
                emailError.innerText = "Email address is required.";
                hasErrors = true;
            } else if (!emailRegex.test(emailAddress)) {
                emailError.innerText = "Please enter a valid email format.";
                hasErrors = true;
            } else {
                emailError.innerText = "";
            }
            
            // Validate event selection
            const eventError = document.getElementById("eventError");
            if (eventId === "") {
                eventError.innerText = "Please choose a community event.";
                hasErrors = true;
            } else {
                eventError.innerText = "";
            }
            
            if (hasErrors) {
                console.log("Validation check: Forms have input errors.");
                return; // Stop form execution
            }
            
            // JavaScript Requirement 25: Use destructuring & spread operator to bundle registration data
            const basicData = { fullName, emailAddress };
            const registrationData = { ...basicData, eventId, timestamp: new Date().toISOString() };
            
            // Process form submit asynchronously
            processRegistrationSubmission(registrationData);
        });
    }

    // =========================================================================
    // JQUERY REQUIREMENTS DEMONSTRATION
    // JavaScript Requirement 34: Include small jQuery example with click(), fadeIn(), fadeOut()
    // =========================================================================
    
    // Toggle Layout Visibility boxes using JQuery click handlers
    $("#btnToggleVis").click(function() {
        // Toggle the hidden visibility box with fade effects
        const box = $("#visBox");
        if (box.css("visibility") === "hidden") {
            box.css("visibility", "visible").hide().fadeIn(800);
        } else {
            box.fadeOut(800, function() {
                box.css("visibility", "hidden").show();
            });
        }
    });

    $("#btnToggleDisp").click(function() {
        // Toggle the display box using standard JQuery fadeIn/fadeOut
        const box = $("#dispBox");
        if (box.is(":visible")) {
            box.fadeOut(500);
        } else {
            box.fadeIn(500);
        }
    });
});
