console.clear();
const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    // console.log(`window.scrollY: ${window.scrollY}\nwindow.innerHeight: ${window.innerHeight}\ndocument.body.clientHeight: ${document.body.clientHeight}   `);

    // Berechnung des Scroll in Prozent
    const scrollInProzent = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
    // Übergabe an den style

    // Farbwechsel bei 50% und 80% der width
    //scrollInProzent > 50 ? progressBar.style.backgroundColor = "red" : progressBar.style.backgroundColor = "green";

    if (scrollInProzent < 50) {
        progressBar.style.backgroundColor = "green";
    } else if (scrollInProzent > 50 && scrollInProzent < 80) {
        progressBar.style.backgroundColor = "yellow"
    } else {
        progressBar.style.backgroundColor = "red"
    }

    progressBar.style.width = `${scrollInProzent}%`;

}
document.addEventListener("scroll", () => {
    calculateScrollPercentage();
});

