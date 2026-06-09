//Destination page

let destinationData =
[
    {
        name:"Yala National Park",
        country:"Sri Lanka",
        continent:"Asia",
        image:"image/yala.jpg",
        description: "Yala National Park is Sri Lanka's premier wildlife destination, renowned for having one of the world's highest densities of Sri Lankan leopards. Located in the southeast, it offers a dramatic landscape of dry scrub, forests, and lagoons packed with elephants, sloth bears, and crocodiles, making it a top location for safari experiences.",

        attractions:
        [
            "Sigiriya",
            "Mirissa",
            "Ella"
        ],

        cost:
        {
            budget:"$700",
            moderate:"$1500",
            luxury:"$3000"
        }
    },

    {
        name:"Phi phi Islands",
        country:"Thailand",
        continent:"Asia",
        image:"image/Phi-Phi-islands.jpg",
        description: "Phi Phi Islands, Thailand are a stunning tropical paradise known for their crystal-clear turquoise waters, dramatic limestone cliffs, and vibrant marine life. These islands are perfect for snorkeling, diving, beach relaxation, and island-hopping adventures, offering an unforgettable experience in one of Thailand’s most beautiful coastal destinations.",
        attractions:
        [
            "Phi phi Islands",
            "Bangkok",
            "Phuket"
        ],
        cost:
        {
            budget:"$800",
            moderate:"$1700",
            luxury:"$3500"
        }
    },
    {
        name:"Black Forest",
        country:"Germany",
        continent:"Europe",
        image:"image/Black-Forest.jpg",
        description:"Black Forest, Germany is a picturesque region in southwestern Germany known for its dense evergreen forests, charming traditional villages, and peaceful mountain landscapes. It is famous for hiking trails, cuckoo clocks, waterfalls, and fairytale-like scenery, making it a perfect destination for nature lovers, photographers, and cultural explorers seeking a calm escape.",
        attractions:
        [
            "Berlin",
            "Neuschwanstein Castle",
            "Munich"
        ],
        cost:
        {
            budget:"$1200",
            moderate:"$2200",
            luxury:"$4500"
        }

    },
    {
        name:"Entalula",
        country:"Philippines",
        continent:"Asia",
        image:"image/entalula-beach.jpg",
        description:"Entalula Beach is one of the most beautiful island destinations in the Philippines, famous for its crystal-clear turquoise waters, soft white sand, and dramatic limestone cliffs. Located near El Nido, it offers a peaceful tropical escape ideal for swimming, snorkeling, sunbathing, and unforgettable island-hopping adventures.",
        attractions:
        [
            "Boracy",
            "Palawan",
            "Cebu"
        ],
        cost:
        {
            budget:"$750",
            moderate:"$1500",
            luxury:"3000"
        }
    },
    {
        name:"Eiffel Tower",
        country:"France",
        continent:"Europe",
        image:"image/France.jpg",
        description:"Eiffel Tower is one of the world’s most iconic landmarks, standing proudly in the heart of Paris. Famous for its stunning iron architecture, panoramic city views, and romantic atmosphere, the tower attracts millions of visitors each year. Surrounded by beautiful gardens and vibrant streets.",
        attractions:
        [
            "Paris",
            "French Riviera",
            "Eiffel Tower",
        ],
        cost:
        {
            budget:"$1300",
            moderate:"$2500",
            luxury:"$5000"
        }
    },
    {
        name:"Old Town",
        country:"Prague",
        continent:"Europe",
        image:"image/Prague Old Town.jpg",
        description:"Old Town, Prague is a historic and cultural heart of the Czech Republic filled with Gothic architecture, cobblestone streets, and lively squares. It is home to famous attractions like the Astronomical Clock and Charles Bridge nearby, offering visitors a magical atmosphere rich in history, art, and European charm.",
        attractions:
        [
            "Charles Bridge",
            "Prague Castle",
            "Old Town Square"
        ],
        cost:
        {
            budget:"$1000",
            moderate:"$1900",
            luxury:"$3800"
        }
    },
    {
        name:"Postiano",
        country:"Italy",
        continent:"Europe",
        image:"image/postiano.jpg",
        description:  "Positano, Italy is a breathtaking cliffside village along the Amalfi Coast known for its colorful houses, stunning sea views, and romantic atmosphere. It is a popular destination for honeymooners and travelers looking for luxury, relaxation, beach time, and scenic Mediterranean beauty.",
        attractions:
        [
            "Rome",
            "Venice",
            "Colosseum"
        ],
        cost:
        {
            budget:"$1500",
            moderate:"$2600",
            luxury:"$5500"
        }
    },
    {
        name:"Istanbul",
        country:"Turkey",
        continent:"Europe & Asia",
        image:"image/Istanbul, Turcia.jpg",
        description:"Istanbul, Turkey is a vibrant and historic city that uniquely connects Europe and Asia, blending ancient traditions with modern life. It is famous for landmarks like Hagia Sophia, Blue Mosque, and the Bosphorus Strait, offering rich culture, delicious cuisine, and unforgettable city experiences.",
        attractions:
        [
            "Istanbul",
            "Cappadocia",
            "Pamukkale"
        ],
        cost:
        {
            budget:"$850",
            moderate:"$1700",
            luxury:"3400"
        }
    },
    {
        name:"Merzouga",
        country:"Morocco",
        continent:"Africa",
        image:"image/Merzouga,morocco.jpg",
        description:"Merzouga, Morocco is the gateway to the Sahara Desert, famous for its massive golden sand dunes and breathtaking desert landscapes. Visitors can enjoy camel trekking, 4x4 desert tours, and overnight camping under star-filled skies, creating a magical and once-in-a-lifetime adventure.",
        attractions:
        [
            "Marrakech",
            "Sahara Desert",
            "Chefchaouen"
        ],
        cost:
        {
            budget:"$800",
            country:"$1600",
            luxury:"$3200"
        }

    },
];

let destinationContainer =
document.getElementById
(
    "destination-container"
);

if(destinationContainer)
{
    destinationData.forEach
    (
        function(destination)
        {
            destinationContainer.innerHTML +=
            `
            <div class="destination-card">

              <img
                src="${destination.image}"
                alt="${destination.name}">

                <div class="card-info">

                    <h3>${destination.name}</h3>

                    <p>
                        ${destination.country}
                    </p>

                </div>

            </div>
            `;
        }
    );
}

let cards = 
document.querySelectorAll
(
    ".destination-card"
);

let modal =
document.getElementById
(
    "destination-modal"
);

let closeModal =
document.getElementById
(
    "close-modal"
);

cards.forEach
(
    function(card,index)
    {
        card.addEventListener
        (
            "click",
            function()
            {
                let selectedDestination =
                destinationData[index];

                document.getElementById("modal-image").src =
                selectedDestination.image;

                document.getElementById("modal-title").textContent =
                selectedDestination.name;
                
                document.getElementById("modal-description").textContent =
                selectedDestination.description;
                
                let attractionsList=
                document.getElementById
                (
                    "modal-attractions"
                );
                attractionsList.innerHTML="";
                selectedDestination.attractions.forEach
                (
                    function(attraction)
                    {
                        attractionsList.innerHTML  +=
                        `
                        <li>${attraction}</li>
                        `;
                    }
                );
                document.getElementById("budget-cost").textContent =
                selectedDestination.cost.budget;
                document.getElementById("moderate-cost").textContent =
                selectedDestination.cost.moderate;
                document.getElementById("luxury-cost").textContent =
                selectedDestination.cost.luxury;
                
                modal.style.display=
                "flex";    
            }
        );    
    }
);

if(closeModal)
{
    closeModal.addEventListener
    (
        "click",
        function()
        {
            modal.style.display =
            "none";
        }
    );
}
let searchInput=
document.getElementById
(
    "search-input"
);

let continentFilter=
document.getElementById
(
    "continent-filter"
);

if(searchInput && continentFilter)
{
function displayDestinations(filteredDestinations)
{
    destinationContainer.innerHTML ="";

    filteredDestinations.forEach
    (
        function(destination)
        {
            destinationContainer.innerHTML+= 
            `
            <div class="destination-card">
                <img
                src="${destination.image}"
                alt="${destination.name}">

                <div class="card-info">
                    <h3>${destination.name}</h3>

                    <p>${destination.country}</p>

                    </div>

                    </div>
               `;
        }
    );
}

searchInput.addEventListener
(
    "keyup",

    function()
    {
        let searchValue =
        searchInput.value.toLowerCase();

        let filteredDestinations =
        destinationData.filter
        (
            function(destination)
            {
                return destination.name
                .toLowerCase()
                .includes(searchValue);
            }
        );

        displayDestinations(filteredDestinations);
    }
);

continentFilter.addEventListener
(
    "change",

function()
{
    let selectedContinent =
    continentFilter.value;

    let filteredDestinations=
    destinationData.filter
    (
        function(destination)
        {
            if(selectedContinent=="All Continents")
            {
                return true;
            }

            return destination.continent===
            selectedContinent;
        }
    );

    displayDestinations(filteredDestinations);
}
);
}
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});