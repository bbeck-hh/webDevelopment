console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log("there was an error");
            return;
        }
        const data = await response.json(); // here happens JSON.parse()
        //console.log(data.results[0].name);
        data.results.forEach((hero) => {
            // All heros
            console.log(hero.name);
            if (hero.name === "R2-D2") {
                console.log(`Die Augenfarbe vom Held ${hero.name} : ${hero.eye_color} `);
            };
        });

    } catch (error) {
        console.log(`Im catch Block: ${error}`);
    }
}

fetchData(url); 
