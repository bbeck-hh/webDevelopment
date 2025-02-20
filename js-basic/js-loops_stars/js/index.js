console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  // for (let i = 1; i < 5; i++) {
  //   const star = document.createElement('img');
  //   star.src = 'assets/star-empty.svg';
  //   starContainer.appendChild(star);
  // }

  const renderStars = (filledStars) => {
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('img');
      star.src = i < filledStars ? 'assets/star-filled.svg' : 'assets/star-empty.svg';
      starContainer.appendChild(star);
    }
  }

  renderStars(2);
  // --^-- write or modify code above this line --^--
}


