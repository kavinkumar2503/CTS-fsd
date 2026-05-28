console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Page Fully Loaded");

};

const eventName = "Music Festival";

const eventDate = "2026-06-15";

let availableSeats = 50;

let eventInfo =
    `Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`;

console.log(eventInfo);

availableSeats--;

console.log("Seats Left:", availableSeats);

const events = [

    {
        name: "Music Festival",
        date: "2026-06-15",
        seats: 20,
        category: "Music"
    },

    {
        name: "Baking Workshop",
        date: "2026-07-10",
        seats: 0,
        category: "Workshop"
    },

    {
        name: "Sports Meet",
        date: "2027-01-01",
        seats: 10,
        category: "Sports"
    }

];

events.forEach(function (event) {

    let today = new Date();

    let eventDay = new Date(event.date);

    if (eventDay > today && event.seats > 0) {

        console.log(event.name);

    }

});

function registerSeat(event) {

    try {

        if (event.seats <= 0) {

            throw "No Seats Available";

        }

        event.seats--;

        console.log(`Registered for ${event.name}`);

    }

    catch (error) {

        console.log(error);

    }

}

function addEvent(name, date, seats, category) {

    events.push({

        name,
        date,
        seats,
        category

    });

}

function registerUser(eventName) {

    let found =
        events.find(event => event.name === eventName);

    if (found) {

        registerSeat(found);

    }

}

function filterEventsByCategory(category, callback) {

    let filtered =
        events.filter(event => event.category === category);

    callback(filtered);

}

function registrationTracker() {

    let total = 0;

    return function () {

        total++;

        return total;

    };

}

const musicCounter =
    registrationTracker();

console.log(musicCounter());

console.log(musicCounter());

filterEventsByCategory(

    "Music",

    function (filtered) {

        console.log(filtered);

    }

);

class Event {

    constructor(name, date, seats) {

        this.name = name;

        this.date = date;

        this.seats = seats;

    }

}

Event.prototype.checkAvailability = function () {

    return this.seats > 0
        ? "Seats Available"
        : "Full";

};

const newEvent =
    new Event("Dance Show", "2026-08-01", 30);

console.log(newEvent.checkAvailability());

Object.entries(newEvent).forEach(

    ([key, value]) => {

        console.log(key, value);

    }

);

events.push({

    name: "Art Expo",

    date: "2026-09-01",

    seats: 40,

    category: "Art"

});

let musicEvents =
    events.filter(event => event.category === "Music");

console.log(musicEvents);

let formattedEvents =
    events.map(event => `Workshop on ${event.name}`);

console.log(formattedEvents);

const eventContainer =
    document.querySelector("#eventContainer");

function displayEvents() {

    if (!eventContainer) return;

    eventContainer.innerHTML = "";

    events.forEach(event => {

        let card =
            document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>Date: ${event.date}</p>

            <p>Seats: ${event.seats}</p>

            <button onclick="registerUser('${event.name}')">

                Register

            </button>

        `;

        eventContainer.appendChild(card);

    });

}

displayEvents();

const categoryFilter =
    document.querySelector("#categoryFilter");

if (categoryFilter) {

    categoryFilter.onchange = function () {

        let category = this.value;

        let filtered =
            events.filter(

                event =>
                    category === "All"
                    || event.category === category

            );

        console.log(filtered);

    };

}

const searchBox =
    document.querySelector("#searchBox");

if (searchBox) {

    searchBox.addEventListener(

        "keydown",

        function () {

            console.log(searchBox.value);

        }

    );

}

fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())

    .then(data => {

        console.log(data);

    })

    .catch(error => {

        console.log(error);

    });

async function loadEvents() {

    try {

        console.log("Loading...");

        let response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        let data =
            await response.json();

        console.log(data);

    }

    catch (error) {

        console.log(error);

    }

}

loadEvents();

function createUser(

    name = "Guest",

    event = "Music"

) {

    console.log(name, event);

}

createUser();

const eventObject = {

    title: "Food Festival",

    date: "2026-10-01",

    seats: 100

};

const {

    title,

    date,

    seats

} = eventObject;

console.log(title);

let copiedEvents =
    [...events];

console.log(copiedEvents);

const form =
    document.querySelector("#eventForm");

if (form) {

    form.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            let name =
                form.elements["name"].value;

            let email =
                form.elements["email"].value;

            let selectedEvent =
                form.elements["selectedEvent"].value;

            if (name === "" || email === "") {

                document.querySelector("#formError")
                    .innerHTML = "Please Fill All Fields";

                return;

            }

            console.log(name, email, selectedEvent);

        }

    );

}

function submitRegistration() {

    let userData = {

        name: "Kavin Kumar",

        event: "Music Festival"

    };

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(userData)

            }

        )

            .then(response => response.json())

            .then(data => {

                console.log("Success", data);

            })

            .catch(error => {

                console.log("Failure", error);

            });

    }, 2000);

}

submitRegistration();

console.log("Debugging Started");

$(document).ready(function () {

    $("#registerBtn").click(function () {

        $(".event-card").fadeOut(1000);

        $(".event-card").fadeIn(1000);

    });

});

console.log(
    "React and Vue provide reusable components and better state management."
);
