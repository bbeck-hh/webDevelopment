console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');

// Be lazy ;-)
const createEle = (element) => document.createElement(element);
const addCss = (htmlElement, cssClass) => htmlElement.classList.add(cssClass);

// Create const for the html elements
const articleElement = createEle("article");
const pElement = createEle("p");
const footerElement = createEle("footer");
const spanElement = createEle("span");
const buttonElement = createEle("button");

// Add css classes to the elements
addCss(articleElement, "post");
addCss(pElement, "post__content");
addCss(footerElement, "post__footer");
addCss(spanElement, "post__username");
addCss(buttonElement, "post__button");

// Add some content 
pElement.textContent = "Hello, like me or not";
spanElement.textContent = "@timetogo";
buttonElement.textContent = "♥ Like";

// Add the elements and nest them
footerElement.append(spanElement, buttonElement);
articleElement.append(pElement, footerElement);
document.body.append(articleElement);

buttonElement.addEventListener("click", handleLikeButtonClick);


// Exercise:
// Use document.createElement() and append another social media post to the body.
