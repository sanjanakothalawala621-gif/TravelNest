// Support Page


let faqQuestions =
document.querySelectorAll
(
    ".faq-question"
);

faqQuestions.forEach
(
    function(question)
    {
        question.addEventListener
        (
            "click",
            function()
            {

                let answer =
                question.nextElementSibling;

                if
                (
                    answer.style.display
                    ==
                    "block"
                )
                {
                    answer.style.display =
                    "none";
                }
                else
                {
                    answer.style.display =
                    "block";
                }
            }
        );
    }
);

//support page feedback form

let feedbackButton =
document.getElementById
(
    "feedback-btn"
);

if(feedbackButton)
{
    feedbackButton.addEventListener
    (
        "click",
        function()
        {
            let name =
            document.getElementById
            (
                "name"
            ).value;

            let email =
            document.getElementById
            (
                "contact"
            ).value;

            let message =
            document.getElementById
            (
                "message"
            ).value;

            if
            (
                name == ""
                ||
                email == ""
                ||
                message ==""
                
            )
            {
                alert
                (
                    "Please fill all fields."
                );

                return;
            }

            alert 
            (
                "Feedback Submitted Successfully!"
            );

            let feedbacks =
            JSON.parse
            (
                localStorage.getItem
                (
                    "feedbacks"
                )
            )
            ||
            [];

            feedbacks.push
            (
                {
                    name:name,
                    email:email,
                    message:message
                }
            );
            localStorage.setItem
            (
                "feedbacks",
                JSON.stringify
                (
                    feedbacks
                )
            );
            
            document.getElementById
            (
                "name-input"
            ).value = "";

            document.getElementById
            (
                "email-input"
            ).value ="";

            document.getElementById
            (
                "message-input"
            ).value ="";
        }
    );
}
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
