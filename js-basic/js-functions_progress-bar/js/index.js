console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    // console.log(`window.scrollY: ${window.scrollY}\nwindow.innerHeight: ${window.innerHeight}\ndocument.body.clientHeight: ${document.body.clientHeight}   `);

    // Berechnung des Scroll in Prozent
    const scrollInProzent = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100;
    // Übergabe an den style
    progressBar.style.width = `${scrollInProzent}%`;

}
document.addEventListener("scroll", () => {
    calculateScrollPercentage();
});