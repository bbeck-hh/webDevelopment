"use strict";

import { renderElement } from "../../js-fetch_star-wars/js/utils.js";
import { JobCard } from "../components/cards/JobCard.js";

console.clear();
const url = "https://www.arbeitnow.com/api/job-board-api";


fetchDataAndRender(url);

// --v-- your code below this line --v--

async function fetchDataAndRender(url) {

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("there was an error");
      throw new Error(`The requested page could not be found (Error ${response.status}).`);
    }

    const responseData = await response.json(); // json parse here
    // Anzahl Datensätze
    const countData = responseData.data.length;
    console.log(`Anzahl der zu generierenden Cards: ${countData} `);


    //responseData.data.forEach((job) => {
    //console.log(`Job Titel: ${job.title} `);

    // Übergabe der Daten aus der API an Card
    //let jobcard = JobCard(job);

    // Nun die fertige Card im Browser anzeigen lassen
    //renderElement(jobcard);

    //});

    // Komplettes Chaining
    responseData.data
      .map(job => {
        console.log(`Job Titel(map): ${job.title}`);
        return JobCard(job); // Verwende JobCard, da es im ursprünglichen Code funktioniert hat
      })
      .forEach(jobcard => renderElement(jobcard)); // Rendere jede JobCard

  } catch (x) {
    return { error: x.message };
  }

}
