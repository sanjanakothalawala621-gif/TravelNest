
//Travel Mood Page(Ambient Sound)

//beach sound
let beachButton =
document.getElementById("beach-btn");

let beachSound = 
document.getElementById("beach-sound");

if(beachButton)
{
    beachButton.addEventListener
    (
        "click",
        function()
        {
            if (beachSound.paused)
            {
                beachSound.play();
                beachButton.textContent ="Pause Sound";   
            }
            else
            {
                beachSound.pause();
                beachButton.textContent =
                "Play Sound";
            }
        }
    );
}

if(beachSound)
{
    beachSound.addEventListener 
    (
        "ended",
        function()
        {
            beachButton.textContent =
            "Play Sound";
        }
    );
}

//forest sound
let forestButton =
document.getElementById("forest-btn");

let forestSound = 
document.getElementById("forest-sound");

if(forestButton)
{
    forestButton.addEventListener
    (
        "click",
        function()
        {
            if (forestSound.paused)
            {
                forestSound.play();
                forestButton.textContent ="Pause Sound";   
            }
            else
            {
                forestSound.pause();
                forestButton.textContent =
                "Play Sound";
            }
        }
    );
}

if(forestSound)
{
    forestSound.addEventListener 
    (
        "ended",
        function()
        {
            forestButton.textContent =
            "Play Sound";
        }
    );
}

//city sounds
let cityButton =
document.getElementById("city-btn");

let citySound = 
document.getElementById("city-sound");

if(cityButton)
{
    cityButton.addEventListener
    (
        "click",
        function()
        {
            if (citySound.paused)
            {
                citySound.play();
                cityButton.textContent ="Pause Sound";   
            }
            else
            {
                citySound.pause();
                cityButton.textContent =
                "Play Sound";
            }
        }
    );
}

if(citySound)
{
    citySound.addEventListener 
    (
        "ended",
        function()
        {
            cityButton.textContent =
            "Play Sound";
        }
    );
}
let visitedButtons =
document.querySelectorAll
(
    ".visited-btn"
);


visitedButtons.forEach
(
    function(button)
    {
        button.addEventListener
        (
            "click",
            function()
            {
                let plannedButton = button.nextElementSibling;

                if 
                (
                    button.textContent
                    ==
                    "Visited ✓"
                )
                {
                    button.textContent =
                    "Visited";

                    localStorage.removeItem
                    (
                        button.parentElement
                        .parentElement.querySelector("h3")
                        .textContent
                    );
                }
                else
                {
                    button.textContent =
                    "Visited ✓";

                    plannedButton.textContent =
                    "Planned";

                    localStorage.setItem
                    (
                        button.parentElement
                        .parentElement
                        .querySelector("h3")
                        .textContent,

                        "Visited"
                    );
                }
            }

        );
    }
);

let plannedButtons =
document.querySelectorAll
(
    ".planned-btn"
);

plannedButtons.forEach
(
    function(button)
    {
        button.addEventListener
        (
            "click",
            function()
            {
                let visitedButton =
                button.previousElementSibling;

                if
                (
                    button.textContent
                    ==
                    "Planned ✓"
                )
                {
                    button.textContent =
                    "Planned";

                    localStorage.removeItem
                    (
                        button.parentElement
                        .parentElement
                        .querySelector("h3")
                        .textContent
                    );
                }
                else
                {
                    button.textContent =
                    "Planned ✓";

                    visitedButton.textContent =
                    "Visited";

                    localStorage.setItem
                    (
                        button.parentElement
                        .parentElement
                        .querySelector("h3")
                        .textContent,
                        "Planned"
                    
                    );

                }
            }
        );
    }
);
let trackerCards =
document.querySelectorAll
(
    ".tracker-card"
);

trackerCards.forEach
(
    function(card)
    {
        let destinationName =
        card.querySelector("h3")
        .textContent;

        let savedStatus =
        localStorage.getItem
        (
            destinationName
        );
        if(savedStatus=="Visited")
        {
            card.querySelector
            (
                ".visited-btn"
            ).textContent =
            "Visited ✓"
        }
        if(savedStatus=="Planned")
        {
            card.querySelector
            (
                ".planned-btn"
            ).textContent =
            "Planned ✓";
        }
    }
);
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});