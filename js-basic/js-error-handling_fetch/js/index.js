console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);

    // Check first of all if we had a connection!
    if (!response.ok) {
      // It make sense to have diffrents user message for different response code -> build a switch
      throw new Error(`The requested page could not be found (Error ${response.status}).`);
    }

    const contentType = response.headers.get("content-type");
    console.log(contentType);

    // WE CAN USE A ELSE IF !!
    // Check first if contentType is true(not undefiend, null, empty.. )
    // Check then if the contentType include 'application/json'
    // Both of this must be true!
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      // Write here the User Error message in the Error Object. 
      throw new Error(`Unexpected content type received.\nPlease check the response format.\nNeed: application/json\nGet: ${contentType}`);
    }
  } catch (x) {
    return { error: x.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);
    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
