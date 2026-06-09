
//Budget Planner Page
let calculateButton =
document.getElementById
(
    "calculate-btn"    
);

if(calculateButton)
{
    calculateButton.addEventListener
    (
        "click",
        function()
        {
            let destination =
            document.getElementById
            (
                "destination"
            ).value;

            let days =
            document.getElementById
            (
                "days"
            ).value;

            let dailyBudget =
            document.getElementById
            (
                "budget"
            ).value;
            let totalCost =
            days * dailyBudget;

            document.getElementById
            (
                "total-cost"
            ).textContent =
            "$"+ totalCost;
            let status ="";
            let progressWidth ="";

            if(totalCost < 1000)
            {
                status =
                "Low Budget Travel";

                progressWidth =
                "30%";
            }
            else if(totalCost < 3000)
            {
                status =
                "Moderate Travel Experience";

                progressWidth=
                "60%";
            }
            else
            {
                status =
                "Luxury Travel Experience";

                progressWidth =
                "100%";
            }
            document.getElementById
            (
                "budget-status"
            ).textContent =

            status;
            document.getElementById
            (
                "progress-fill"
            ).style.width =

            progressWidth;

            //SAVE ALL BUDGETS
            let budgets =
            JSON.parse
            (
                localStorage.getItem
                (
                    "tripBudgets"
                )
            )
            ||
            [];

            budgets.push
            (
                {
                    destination:destination,
                    days: days,
                    dailyBudget: dailyBudget,
                    totalCost:totalCost,
                    status:status
                }
            );
            localStorage.setItem
            (
                "tripBudgets",
                JSON.stringify
                (
                    budgets
                )
            );
        }

    );
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
