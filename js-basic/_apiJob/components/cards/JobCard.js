// --^-- your code here --^--
export function JobCard(job) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = job.title;

  card.append(heading);

  const company_name = document.createElement("p");
  company_name.textContent = `Firma: ${job.company_name}`;

  card.append(company_name);

  const location = document.createElement("p");
  location.textContent = `Ort: ${job.location}`;

  card.append(location);

  const job_types = document.createElement("p");
  job_types.textContent = `Position: ${job.job_types}`;

  card.append(job_types);

  const slug = document.createElement("p");
  slug.textContent = `URL-freundliche Zeichenfolge: ${job.slug}`;

  card.append(slug);




  return card;
}
