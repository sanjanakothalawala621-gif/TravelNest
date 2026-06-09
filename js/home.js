

let heroParagraph =
document.getElementById("hero-paragraph");

if(heroParagraph)
{
    let paragraphs =
    [
        "Inspiring destinations, personalized trip planning, and effortless booking to create travel experiences you’ll never forget. Begin your next journey with TravelNest!",

        "Discover breathtaking destinations, curated travel packages, and seamless planning designed to make every adventure unforgettable with TravelNest.",

        "From relaxing beach escapes to exciting city adventures, easy booking options, and memorable journeys carefully crafted to make every trip enjoyable with TravelNest.",

        "Experience hassle-free travel with customized recommendations, adventures designed around your dream destinations, helping you explore the world  with TravelNest."
    ];

    let currentIndex = 0;

    function changeParagraph()
    {
        currentIndex++;

        if(currentIndex >= paragraphs.length)
        {
            currentIndex = 0;
        }
 
        heroParagraph.textContent =
        paragraphs[currentIndex];
    }

    setInterval(changeParagraph,3000);
}
//NEWSLETTER SUBSCRIPTION

let subscribeButton =
document.getElementById("subscribe-btn");

let emailInput =
document.getElementById("newsletter-email");

if(subscribeButton && emailInput)
{
    subscribeButton.addEventListener
    (
        "click",
        function()
        {
            let email =
            emailInput.value;

            if(email == "")
            {
                alert("Please enter your email.");
                return;
            }

            let emails =
            JSON.parse
            (
                localStorage.getItem
                (
                    "newsletterEmails"
                )
            )
            ||
            [];

            if
            (
                !emails.includes(email)
            )
            {
                emails.push
                (
                    email
                );
                localStorage.setItem
                (
                    "newsletterEmails",
                    JSON.stringify
                    (
                        emails
                    )
                );
                alert
                (
                    "Successfully Subscribed!"
                );
            }
            else
            {
                alert
                (
                    "Email already subscribed!"
                );
            }

            emailInput.value ="";
        }
    );
}
//DESTINATION OF THE DAY//

let destinations=
[
    {
        title:"Yala National Park, Sri Lanka",
        type:"Adventure",
        budget: "Low Budget",
        text: "Yala National Park is Sri Lanka's premier wildlife destination, renowned for having one of the world's highest densities of Sri Lankan leopards. Located in the southeast, it offers a dramatic landscape of dry scrub, forests, and lagoons packed with elephants, sloth bears, and crocodiles, making it a top location for safari experiences.",
        image:"image/yala.jpg"
    },
    {
        title:"Entalula Beach, Philippines",
        type:"Relaxation",
        budget: "Low Budget",
        text:"Entalula Beach is one of the most beautiful island destinations in the Philippines, famous for its crystal-clear turquoise waters, soft white sand, and dramatic limestone cliffs. Located near El Nido, it offers a peaceful tropical escape ideal for swimming, snorkeling, sunbathing, and unforgettable island-hopping adventures.",
        image:"image/entalula beach.jpg"
    },
    {
        title:"Black Forest, Germany",
        type:"Nature",
        budget: "Medium Budget",
        text:"Black Forest, Germany is a picturesque region in southwestern Germany known for its dense evergreen forests, charming traditional villages, and peaceful mountain landscapes. It is famous for hiking trails, cuckoo clocks, waterfalls, and fairytale-like scenery, making it a perfect destination for nature lovers, photographers, and cultural explorers seeking a calm escape.",
        image:"image/Black-Forest.jpg"
    },
    {
        title:"Eiffel Tower, France",
        type:"Cultural",
        budget: "Medium Budget",
        text:"Eiffel Tower is one of the world’s most iconic landmarks, standing proudly in the heart of Paris. Famous for its stunning iron architecture, panoramic city views, and romantic atmosphere, the tower attracts millions of visitors each year. Surrounded by beautiful gardens and vibrant streets.",
        image:"image/France.jpg"
    },
    {
        title:"Phi-phi Islands, Thailand",
        type:"Relaxation",
        budget:"Medium Budget",
        text:"Phi Phi Islands, Thailand are a stunning tropical paradise known for their crystal-clear turquoise waters, dramatic limestone cliffs, and vibrant marine life. These islands are perfect for snorkeling, diving, beach relaxation, and island-hopping adventures, offering an unforgettable experience in one of Thailand’s most beautiful coastal destinations.",
        image:"image/Phi-Phi-islands.jpg"
    },
    {
        title:"Old Town, Prague",
        type:"Cultural",
        budget: "Medium Budget",
        text:"Old Town, Prague is a historic and cultural heart of the Czech Republic filled with Gothic architecture, cobblestone streets, and lively squares. It is home to famous attractions like the Astronomical Clock and Charles Bridge nearby, offering visitors a magical atmosphere rich in history, art, and European charm.",
        image:"image/Prague Old Town.jpg"
    },
    {
        title:"Postiano, Italy",
        type:"Relaxation",
        budget: "Medium Budget",
        text:"Positano, Italy is a breathtaking cliffside village along the Amalfi Coast known for its colorful houses, stunning sea views, and romantic atmosphere. It is a popular destination for honeymooners and travelers looking for luxury, relaxation, beach time, and scenic Mediterranean beauty.",
        image:"image/postiano.jpg"
    },
    {
        title:"Istanbul, Turkey",
        type:"Cultural",
        budget: "Low Budget", 
        text:"Istanbul, Turkey is a vibrant and historic city that uniquely connects Europe and Asia, blending ancient traditions with modern life. It is famous for landmarks like Hagia Sophia, Blue Mosque, and the Bosphorus Strait, offering rich culture, delicious cuisine, and unforgettable city experiences.",
        image:"image/Istanbul, Turcia.jpg"
    },
    {
        title:"Merzouga, Morocco",
        type:"Adventure",
        budget: "Medium Budget",
        text:"Merzouga, Morocco is the gateway to the Sahara Desert, famous for its massive golden sand dunes and breathtaking desert landscapes. Visitors can enjoy camel trekking, 4x4 desert tours, and overnight camping under star-filled skies, creating a magical and once-in-a-lifetime adventure.",
        image:"image/Merzouga,morocco.jpg"
    },
    {
        title:"Coloseum, Italy",
        type:"Cultural",
        budget: "Luxury Budget",
        text:"Colosseum, Italy is an ancient Roman amphitheater located in Rome and one of the most significant historical monuments in the world. It represents the glory of the Roman Empire and allows visitors to explore ancient gladiator battles, architecture, and deep cultural heritage.",
        image:"image/rome.jpg"
    },
    

];


let dayTitle =
document.getElementById("day-title");

let dayText =
document.getElementById("day-text");

let dayImage =
document.getElementById("day-image");

if(dayTitle && dayText && dayImage)
{
    let today =
    new Date().getDay();

    let selectedDestination =
    destinations[today % destinations.length];

    dayTitle.textContent =
    selectedDestination.title;

    dayText.textContent =
    selectedDestination.text;

    dayImage.src =
    selectedDestination.image;
}
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});





