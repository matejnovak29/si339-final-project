window.addEventListener("DOMContentLoaded", () => {
    const runQueryButton = document.querySelector("#run-query");
    const noProjectMessage = document.querySelector("#no-projects-msg");

    runQueryButton.addEventListener("click", function() {
        /* get user input value and convert it to number for comparison */
        const numberOfYearsInput = Number(document.querySelector("#user-input").value);
        /* select project length string to be available to extract number of years */
        const projectLengths = document.querySelectorAll(".project-length");
        var areProjectsAvailable = false;
        

        projectLengths.forEach(project => {
            //console.log(project); for debugging
            /* extract number from project length string */
            const projectLength = Number(project.innerText.match(/\d+/)[0]);
            /* define parent element to be available to hide/show it */
            const projectDetail = project.parentElement.parentElement;
            //console.log(projectDetail); for debugging
            if (projectLength < numberOfYearsInput) {
                projectDetail.style.display = "none";
            } else {
                projectDetail.style.display = "flex";
                areProjectsAvailable = true;
            }
        });

        if (areProjectsAvailable) {
            noProjectMessage.style.display = "none";
        } else {
            noProjectMessage.style.display = "block";
        }
    });

    /* reset project page */
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function() {
        const allProjects = document.querySelectorAll('[data-id]');
        allProjects.forEach(project => {
            project.style.display = "flex"; 
        });
        /* clear value */
        document.querySelector("#user-input").value = "";
        noProjectMessage.style.display = "none";
    });
});
