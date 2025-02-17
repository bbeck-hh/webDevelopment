console.clear();

function getElements(datajs) {
    return document.querySelector(`[data-js=${datajs}]`);
}

const box = getElements("box");
const colorInput = getElements("input-color");
const radiusInput = getElements("input-radius");
const rotationInput = getElements("input-rotation");

console.log(`${box} ${colorInput} ${radiusInput} ${rotationInput}`);

colorInput.addEventListener("input", () => {
    const hue = colorInput.value;
    console.log(`${hue} `);
    const colorString = `hsl(${hue}, 100%, 50%)`;

    box.style.backgroundColor = colorString;
});

radiusInput.addEventListener("input", () => {
    const radius = radiusInput.value;
    console.log(`${radius} `);
    box.style.borderRadius = `${radius}px`;
});

rotationInput.addEventListener("input", () => {
    const rotation = rotationInput.value;
    console.log(`${rotation} `);
    box.style.transform = `rotate(${rotation}deg)`;
});

